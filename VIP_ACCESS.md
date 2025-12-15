# VIP Access Mode

This application includes a special "VIP Mode" that allows access to all Pro features without a user account.

## How to Use
Append `?vip=true` to the application URL.

**Example:**
`http://localhost:5173/?vip=true`
`https://doughlabpro.web.app/?vip=true`

## Behavior
- **Authentication**: Bypasses the login screen (`RequireAuth`).
- **Permissions**: Grants full "Pro" status (`isPro: true`, `plan: 'lab_pro'`).
- **Data Persistence**: 
  - Writes to Firestore are **disabled**.
  - Creates/Updates are handled locally in memory (transient) or essentially "mocked".
  - VIP status is persisted in `localStorage` (`dough-lab-vip-mode`), so you can refresh the page and stay logged in.

## How to Exit
Click the **Logout** button in the User Menu. This will clear the VIP status from `localStorage` and return you to the standard login screen.
