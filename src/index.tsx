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

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
