---
description: How to maintain low costs and prevent bill spikes in DoughLabPro
---

DoughLabPro uses several cloud services (Firebase, Maps alternatives, Gemini). Follow these steps to automate cost control.

### 1. Verification of Cloud Efficiency
Every time you add a new data feature or AI integration, run the audit script:
// turbo
```bash
node scripts/audit-cloud-efficiency.cjs
```
This script checks for:
- Uncapped Firestore queries.
- Costly Google Maps API usage (favoring free Nominatim/Open-Meteo).
- Orphaned scripts that might be running background tasks or bloating deployments.

### 2. Hard Limits in Google Cloud Console
// turbo
1. Access [GCP Quotas](https://console.cloud.google.com/apis/enabled)
2. Filter for "Maps JavaScript API" or "Places API".
3. Edit Quota: Set a daily limit of **100 requests** for development and **500** for production.

### 3. Firebase Security Rules
Ensure rules are never set to `allow read, write: if true`. 
// turbo
```bash
npx firebase deploy --only firestore:rules
```
The audit script will flag if rules are missing context.

### 4. Cleaning Orphaned Resources
The project has many older `.cjs` and `.py` scripts. 
Check the `[Orphans]` section of the audit report and delete files that are no longer referenced in `package.json`.
