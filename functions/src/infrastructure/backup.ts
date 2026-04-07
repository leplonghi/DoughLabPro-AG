import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { logger } from "./monitoring";

const client = new admin.firestore.v1.FirestoreAdminClient();

/**
 * Scheduled Disaster Recovery: Daily Firestore Export
 * This exports the entire database to a Cloud Storage bucket.
 */
export const scheduledFirestoreExport = functions.pubsub
    .schedule("0 3 * * *") // Daily at 03:00 UTC
    .onRun(async (context) => {
        const projectId = process.env.GCP_PROJECT || process.env.G_CLOUD_PROJECT || "doughlabpro-fire";
        const databaseName = client.databasePath(projectId, "(default)");
        // Use the project's default storage bucket for backups
        const bucket = `gs://${projectId}-backups`;

        try {
            logger.info("Starting scheduled Firestore backup", { bucket });

            const [response] = await client.exportDocuments({
                name: databaseName,
                outputUriPrefix: bucket,
                collectionIds: [] // Export all collections
            });

            logger.info("Firestore backup initiated", { operation: response.name });
            return response;
        } catch (error) {
            logger.error("Firestore backup failed", { error });
            throw error;
        }
    });

/**
 * Storage Versioning Utility
 * (Instructional: This is set via GCP CLI or Console)
 * To enable: gsutil versioning set on gs://{project-id}.appspot.com
 */
