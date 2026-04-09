import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './design-tokens.css';
import './index.css';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import { installChunkRecoveryHandlers } from '@/utils/chunkRecovery';
// Import i18n for side-effect initialization
import '@/i18n';

const forceLightTheme = () => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem('theme', 'light');
  document.documentElement.classList.remove('dark');
};

forceLightTheme();
installChunkRecoveryHandlers();


const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

const root = ReactDOM.createRoot(rootElement);

// Using standard render without StrictMode to avoid double-mount issues during i18n init
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
