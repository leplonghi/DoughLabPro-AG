import React from 'react';
import i18n from '@/i18n';
import { monitor } from '@/infrastructure/monitoring';

interface ErrorBoundaryProps {
  children?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

// Fallback if React.Component is not typed correctly
// We extend the imported one, but defining the class members manually
// to satisfy TypeScript when types are missing.
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  // Manually declare props and state for TS
  public props: Readonly<ErrorBoundaryProps> & Readonly<{ children?: React.ReactNode }>;
  public state: Readonly<ErrorBoundaryState>;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.props = props;
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  // Use 'any' for errorInfo if types are missing
  componentDidCatch(error: Error, errorInfo: any) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    monitor.trackError(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center">
          <h1 className="text-xl font-bold text-red-600 mb-4">
            {i18n.t('common:something_went_wrong') as string}
          </h1>
          <pre className="text-left bg-slate-100 p-4 rounded overflow-auto text-sm text-slate-700">
            {this.state.error?.toString()}
          </pre>
        </div>
      );
    }
    return this.props.children ?? null;
  }
}

export default ErrorBoundary;
