
import { getFirestore, doc, setDoc, collection, getDocs, deleteDoc } from 'firebase/firestore';
import { app } from '../src/firebase/app';
import { RAW_CANONICAL_STYLES } from '../src/data/stylesData';

const db = getFirestore(app);

/**
 * Validates a style object against the Unified Style Schema.
 * Returns an array of error messages. If array is empty, validation passed.
 */
function validateStyle(style: any): string[] {
  const errors: string[] = [];

  // 1. Top-level string fields
  const requiredStrings = [
    'id', 
    'name', 
    'category', 
    'description', 
    'history', 
    'difficulty', 
    'fermentationType', 
    'source', 
    'createdAt', 
    'releaseDate'
  ];
  
  requiredStrings.forEach(field => {
    if (typeof style[field] !== 'string' || !style[field]) {
      errors.push(`Missing or invalid field: ${field}`);
    }
  });

  // 2. Origin Object
  if (!style.origin || typeof style.origin !== 'object') {
    errors.push('Missing or invalid origin object');
  } else {
    ['country', 'region', 'period'].forEach(f => {
      if (typeof style.origin[f] !== 'string') {
        errors.push(`Missing or invalid origin.${f}`);
      }
    });
  }

  // 3. String Arrays
  const arrayFields = ['tags', 'warnings', 'notes', 'references'];
  arrayFields.forEach(field => {
    if (!Array.isArray(style[field])) {
      errors.push(`Field ${field} must be an array`);
    } else {
      // Ensure all items are strings
      const hasNonString = style[field].some((item: any) => typeof item !== 'string');
      if (hasNonString) {
        errors.push(`Field ${field} must contain only strings`);
      }
    }
  });

  // 4. Boolean Fields
  if (typeof style.isPro !== 'boolean') {
    errors.push('Field isPro must be a boolean');
  }

  // 5. Technical Profile
  if (!style.technicalProfile || typeof style.technicalProfile !== 'object') {
    errors.push('Missing or invalid technicalProfile');
  } else {
    const tp = style.technicalProfile;
    
    // Required strings in technicalProfile
    const tpRequired = ['hydration', 'salt', 'ovenTemp', 'difficulty'];
    tpRequired.forEach(f => {
      if (typeof tp[f] !== 'string' || !tp[f]) {
        errors.push(`technicalProfile.${f} missing or not a string`);
      }
    });

    // Optional strings (check type if present)
    ['oil', 'sugar', 'flourStrength', 'preferment'].forEach(f => {
      if (tp[f] !== undefined && typeof tp[f] !== 'string') {
        errors.push(`technicalProfile.${f} must be a string if present`);
      }
    });

    // Arrays in technicalProfile
    ['fermentationSteps', 'recommendedUse'].forEach(f => {
      if (!Array.isArray(tp[f])) {
        errors.push(`technicalProfile.${f} must be an array`);
      } else {
        if (tp[f].some((item: any) => typeof item !== 'string')) {
          errors.push(`technicalProfile.${f} must contain only strings`);
        }
      }
    });
  }

  return errors;
}

export async function runMigration() {
  console.log('=== DoughLabPro Styles Migration Started ===');

  if (!db) {
    console.error('FATAL: Firestore instance not initialized. Check firebase/app.ts configuration.');
    return;
  }

  try {
    const stylesCollectionRef = collection(db, 'styles');
    
    // 1. Identify Canonical IDs
    const canonicalIds = new Set(RAW_CANONICAL_STYLES.map(s => s.id));
    console.log(`Loaded ${canonicalIds.size} canonical styles from codebase.`);

    // 2. Cleanup Inconsistent Documents
    console.log('Scanning for inconsistent documents in Firestore...');
    const snapshot = await getDocs(stylesCollectionRef);
    let deletedCount = 0;
    
    for (const docSnap of snapshot.docs) {
      if (!canonicalIds.has(docSnap.id)) {
        console.warn(`[Cleanup] Removing inconsistent/obsolete doc: ${docSnap.id}`);
        await deleteDoc(doc(db, 'styles', docSnap.id));
        deletedCount++;
      }
    }
    
    if (deletedCount > 0) {
      console.log(`[Cleanup] Removed ${deletedCount} inconsistent documents.`);
    } else {
      console.log('[Cleanup] No inconsistent documents found.');
    }

    // 3. Upsert Canonical Styles with Validation
    let successCount = 0;
    let failureCount = 0;

    for (const raw of RAW_CANONICAL_STYLES) {
      const validationErrors = validateStyle(raw);
      
      if (validationErrors.length > 0) {
        console.error(`[Validation Failed] Style ID: ${raw.id || 'unknown'}`);
        validationErrors.forEach(err => console.error(` - ${err}`));
        failureCount++;
        continue;
      }

      try {
        // Enforce ID consistency: Doc ID must match style.id
        await setDoc(doc(db, 'styles', raw.id), raw, { merge: true });
        console.log(`[Migrated] ${raw.id}`);
        successCount++;
      } catch (err) {
        console.error(`[Write Failed] Style ID: ${raw.id}`, err);
        failureCount++;
      }
    }

    console.log('=== Migration Completed ===');
    console.log(`Success: ${successCount}`);
    console.log(`Failed: ${failureCount}`);
    console.log(`Cleaned: ${deletedCount}`);

  } catch (error) {
    console.error('Migration script encountered a fatal error:', error);
  }
}

export default runMigration;
