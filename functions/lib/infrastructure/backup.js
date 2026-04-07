"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduledFirestoreExport = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const monitoring_1 = require("./monitoring");
const client = new admin.firestore.v1.FirestoreAdminClient();
/**
 * Scheduled Disaster Recovery: Daily Firestore Export
 * This exports the entire database to a Cloud Storage bucket.
 */
exports.scheduledFirestoreExport = functions.pubsub
    .schedule("0 3 * * *") // Daily at 03:00 UTC
    .onRun(async (context) => {
    const projectId = process.env.GCP_PROJECT || process.env.G_CLOUD_PROJECT || "doughlabpro-fire";
    const databaseName = client.databasePath(projectId, "(default)");
    // Use the project's default storage bucket for backups
    const bucket = `gs://${projectId}-backups`;
    try {
        monitoring_1.logger.info("Starting scheduled Firestore backup", { bucket });
        const [response] = await client.exportDocuments({
            name: databaseName,
            outputUriPrefix: bucket,
            collectionIds: [] // Export all collections
        });
        monitoring_1.logger.info("Firestore backup initiated", { operation: response.name });
        return response;
    }
    catch (error) {
        monitoring_1.logger.error("Firestore backup failed", { error });
        throw error;
    }
});
/**
 * Storage Versioning Utility
 * (Instructional: This is set via GCP CLI or Console)
 * To enable: gsutil versioning set on gs://{project-id}.appspot.com
 */
//# sourceMappingURL=backup.js.map