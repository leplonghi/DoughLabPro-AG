import React, { ReactNode } from 'react';
import { monitor } from '@/infrastructure/monitoring';
import { isDynamicImportError, triggerChunkRecovery } from '@/utils/chunkRecovery';

interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    monitor.trackError(error, errorInfo);
    triggerChunkRecovery(error);
  }

  private handleReload = () => {
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center">
          <h1 className="mb-3 text-xl font-bold text-red-600">
            {isDynamicImportError(this.state.error) ? 'O app precisa ser atualizado' : 'Something went wrong'}
          </h1>
          <p className="mx-auto mb-5 max-w-md text-sm text-slate-600">
            {isDynamicImportError(this.state.error)
              ? 'Uma parte da interface ficou desatualizada depois da publicacao. Recarregue a pagina para buscar a versao correta.'
              : 'An unexpected error happened while loading this screen.'}
          </p>
          <div className="mb-5 flex justify-center">
            <button
              type="button"
              onClick={this.handleReload}
              className="rounded-xl bg-dlp-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-dlp-primary-hover"
            >
              Recarregar pagina
            </button>
          </div>
          <pre className="overflow-auto rounded bg-slate-100 p-4 text-left text-sm text-slate-700">
            {this.state.error?.toString()}
          </pre>
        </div>
      );
    }
    return (this as any).props.children;
  }
}

export default ErrorBoundary;
