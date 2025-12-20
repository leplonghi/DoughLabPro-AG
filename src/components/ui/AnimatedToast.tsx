import React, { useEffect, useState } from 'react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastProps {
    message: string;
    type?: ToastType;
    duration?: number;
    onClose?: () => void;
    action?: {
        label: string;
        onClick: () => void;
    };
}

/**
 * Toast - Animated notification component
 * 
 * Features:
 * - Multiple types (success, error, warning, info)
 * - Auto-dismiss with configurable duration
 * - Optional action button
 * - Smooth slide-in and fade-out animations
 * - Progress bar showing remaining time
 */
export const Toast: React.FC<ToastProps> = ({
    message,
    type = 'info',
    duration = 5000,
    onClose,
    action,
}) => {
    const [isVisible, setIsVisible] = useState(true);
    const [progress, setProgress] = useState(100);

    useEffect(() => {
        if (duration > 0) {
            const interval = 50;
            const decrement = (interval / duration) * 100;

            const progressTimer = setInterval(() => {
                setProgress((prev) => {
                    const next = prev - decrement;
                    return next <= 0 ? 0 : next;
                });
            }, interval);

            const dismissTimer = setTimeout(() => {
                setIsVisible(false);
                setTimeout(() => {
                    onClose?.();
                }, 300);
            }, duration);

            return () => {
                clearInterval(progressTimer);
                clearTimeout(dismissTimer);
            };
        }
    }, [duration, onClose]);

    const getTypeStyles = () => {
        switch (type) {
            case 'success':
                return {
                    bg: 'bg-emerald-50 border-emerald-200',
                    text: 'text-emerald-800',
                    icon: 'text-emerald-500',
                    progress: 'bg-emerald-500',
                };
            case 'error':
                return {
                    bg: 'bg-red-50 border-red-200',
                    text: 'text-red-800',
                    icon: 'text-red-500',
                    progress: 'bg-red-500',
                };
            case 'warning':
                return {
                    bg: 'bg-amber-50 border-amber-200',
                    text: 'text-amber-800',
                    icon: 'text-amber-500',
                    progress: 'bg-amber-500',
                };
            case 'info':
            default:
                return {
                    bg: 'bg-blue-50 border-blue-200',
                    text: 'text-blue-800',
                    icon: 'text-blue-500',
                    progress: 'bg-blue-500',
                };
        }
    };

    const getIcon = () => {
        const styles = getTypeStyles();
        switch (type) {
            case 'success':
                return (
                    <svg className={`w-5 h-5 ${styles.icon}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                );
            case 'error':
                return (
                    <svg className={`w-5 h-5 ${styles.icon}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                );
            case 'warning':
                return (
                    <svg className={`w-5 h-5 ${styles.icon}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                );
            case 'info':
            default:
                return (
                    <svg className={`w-5 h-5 ${styles.icon}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                );
        }
    };

    const styles = getTypeStyles();

    if (!isVisible) {
        return null;
    }

    return (
        <div className={`
      relative overflow-hidden rounded-xl border-2 shadow-lg backdrop-blur-sm
      ${styles.bg} ${styles.text}
      animate-slide-in-right
      ${!isVisible ? 'animate-fade-out' : ''}
    `}>
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-black/5">
                <div
                    className={`h-full transition-all ease-linear ${styles.progress}`}
                    style={{ width: `${progress}%` }}
                />
            </div>

            <div className="flex items-start gap-3 p-4 pt-5">
                {/* Icon */}
                <div className="flex-shrink-0">
                    {getIcon()}
                </div>

                {/* Message */}
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium leading-relaxed">
                        {message}
                    </p>
                </div>

                {/* Action Button */}
                {action && (
                    <button
                        onClick={() => {
                            action.onClick();
                            setIsVisible(false);
                            setTimeout(() => onClose?.(), 300);
                        }}
                        className={`
              flex-shrink-0 px-3 py-1 text-xs font-semibold rounded-lg
              transition-all hover:scale-105 active:scale-95
              ${type === 'success' ? 'bg-emerald-500 text-white hover:bg-emerald-600' : ''}
              ${type === 'error' ? 'bg-red-500 text-white hover:bg-red-600' : ''}
              ${type === 'warning' ? 'bg-amber-500 text-white hover:bg-amber-600' : ''}
              ${type === 'info' ? 'bg-blue-500 text-white hover:bg-blue-600' : ''}
            `}
                    >
                        {action.label}
                    </button>
                )}

                {/* Close Button */}
                <button
                    onClick={() => {
                        setIsVisible(false);
                        setTimeout(() => onClose?.(), 300);
                    }}
                    className="flex-shrink-0 p-1 rounded-lg hover:bg-black/5 transition-colors"
                    aria-label="Close notification"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

/**
 * ToastContainer - Container for managing multiple toasts
 */
interface ToastContainerProps {
    toasts: Array<ToastProps & { id: string }>;
    onRemove: (id: string) => void;
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
}

export const ToastContainer: React.FC<ToastContainerProps> = ({
    toasts,
    onRemove,
    position = 'top-right',
}) => {
    const getPositionClasses = () => {
        switch (position) {
            case 'top-right':
                return 'top-4 right-4';
            case 'top-left':
                return 'top-4 left-4';
            case 'bottom-right':
                return 'bottom-4 right-4';
            case 'bottom-left':
                return 'bottom-4 left-4';
            case 'top-center':
                return 'top-4 left-1/2 -translate-x-1/2';
            case 'bottom-center':
                return 'bottom-4 left-1/2 -translate-x-1/2';
            default:
                return 'top-4 right-4';
        }
    };

    return (
        <div className={`fixed z-[9999] ${getPositionClasses()} space-y-3 max-w-md w-full px-4`}>
            {toasts.map((toast, index) => (
                <div key={toast.id} className={`stagger-${Math.min(index + 1, 5)}`}>
                    <Toast {...toast} onClose={() => onRemove(toast.id)} />
                </div>
            ))}
        </div>
    );
};

export default Toast;
