# Root Legacy Scripts

This folder preserves one-off and migration-era scripts that used to live in the repository root.

Why they were moved:
- keep the project root focused on runtime and primary build files
- reduce audit noise from historical utility scripts
- preserve past repair/migration tooling without deleting potentially useful references

Guidelines:
- do not add new app workflows here
- if a script becomes part of the maintained toolchain, move it into `scripts/` and document it in `package.json` or the repo docs
- treat these files as historical utilities and validate them before reuse
