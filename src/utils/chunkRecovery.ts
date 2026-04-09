import React, { type ComponentType, type LazyExoticComponent } from 'react';

const CHUNK_RELOAD_STORAGE_KEY = 'dlp-chunk-reload-at';
const CHUNK_RELOAD_COOLDOWN_MS = 60_000;
const CHUNK_ERROR_PATTERNS = [
  'Failed to fetch dynamically imported module',
  'Importing a module script failed',
  'ChunkLoadError',
];

let handlersInstalled = false;

const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === 'string') {
    return error;
  }

  return '';
};

export const isDynamicImportError = (error?: unknown) => {
  const message = getErrorMessage(error);
  return CHUNK_ERROR_PATTERNS.some((pattern) => message.includes(pattern));
};

const shouldAttemptChunkRecovery = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  const lastReloadAt = Number(window.sessionStorage.getItem(CHUNK_RELOAD_STORAGE_KEY) || '0');
  const now = Date.now();

  if (!lastReloadAt || now - lastReloadAt > CHUNK_RELOAD_COOLDOWN_MS) {
    window.sessionStorage.setItem(CHUNK_RELOAD_STORAGE_KEY, String(now));
    return true;
  }

  return false;
};

export const triggerChunkRecovery = (error?: unknown) => {
  if (!isDynamicImportError(error) || !shouldAttemptChunkRecovery()) {
    return false;
  }

  window.setTimeout(() => window.location.reload(), 150);
  return true;
};

export const installChunkRecoveryHandlers = () => {
  if (typeof window === 'undefined' || handlersInstalled) {
    return;
  }

  handlersInstalled = true;

  window.addEventListener('unhandledrejection', (event) => {
    if (triggerChunkRecovery(event.reason)) {
      event.preventDefault();
    }
  });

  window.addEventListener('error', (event) => {
    const runtimeError = (event as ErrorEvent).error ?? new Error((event as ErrorEvent).message);
    triggerChunkRecovery(runtimeError);
  });
};

export const lazyWithChunkRecovery = <T extends ComponentType<any>>(
  importer: () => Promise<{ default: T }>,
): LazyExoticComponent<T> =>
  React.lazy(async () => {
    try {
      return await importer();
    } catch (error) {
      if (triggerChunkRecovery(error)) {
        return new Promise<never>(() => {});
      }
      throw error;
    }
  });

export const importWithChunkRecovery = async <T>(importer: () => Promise<T>): Promise<T> => {
  try {
    return await importer();
  } catch (error) {
    if (triggerChunkRecovery(error)) {
      return new Promise<T>(() => {});
    }
    throw error;
  }
};
