import runMigration from './migrateStylesToFirestore';

runMigration()
  .then(() => console.log("Migration finished"))
  .catch((err) => console.error(err));
