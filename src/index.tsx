import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './design-tokens.css';
import './index.css';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
// Import i18n for side-effect initialization
import '@/i18n';

// ========================================
// DoughLabPro Design System Enforcement
// ========================================
// IMPORTANT: This app is LIGHT MODE ONLY
// - Force remove any dark mode classes
// - Clear any theme preferences
// - This is a PERMANENT design decision
// ========================================
document.documentElement.classList.remove('dark');
localStorage.removeItem('theme');


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
