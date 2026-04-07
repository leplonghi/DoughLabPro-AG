# Security Remediation

Use [manual-production-steps.md](C:/Antigravity/doughlabpro/docs/runbooks/manual-production-steps.md) as the main runbook.

## Security closure checklist

1. Rotate the exposed Stripe key in Stripe Dashboard.
2. Update Firebase runtime config with the new Stripe values.
3. Re-deploy backend with `npm run deploy:backend`.
4. Rewrite Git history to remove leaked files.
5. Force-push the cleaned history.
6. Re-scan the repository and verify no secrets remain.
7. Validate checkout, webhook, and billing portal again in production.
