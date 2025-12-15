import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './design-tokens.css';
import './index.css';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import { useTranslation } from '@/i18n';

// Force Light Theme
document.documentElement.classList.remove('dark');
localStorage.removeItem('theme');

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

// VANILLA JS INJECTION TEST
// If you see this gradient screen, js execution works.
document.body.innerHTML = `
  <div style="height: 100vh; width: 100vw; background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); display: flex; align-items: center; justify-content: center; color: white; font-family: sans-serif; flex-direction: column;">
    <h1 style="font-size: 3rem; margin-bottom: 2rem;">RECOVERY MODE</h1>
    <p style="font-size: 1.5rem;">Vanilla JS Execution Successful</p>
    <button id="restore-app" style="margin-top: 20px; padding: 10px 20px; background: white; color: #1e3c72; border: none; border-radius: 5px; font-weight: bold; cursor: pointer;">TRY LOADING REACT</button>
  </div>
`;

document.getElementById('restore-app')?.addEventListener('click', () => {
  document.body.innerHTML = '<div id="root"></div>';
  const newRoot = ReactDOM.createRoot(document.getElementById('root')!);
  newRoot.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
});
