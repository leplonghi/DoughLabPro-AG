import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ToastProvider';
import { isNativePlatform } from '@/capacitor/platform';
import {
    CloseIcon,
    GoogleIcon,
    LockClosedIcon,
    UserCircleIcon,
    SpinnerIcon,
    CheckCircleIcon
} from '@/components/ui/Icons';
import { useTranslation } from '@/i18n';

type AuthView = 'login' | 'signup' | 'forgot-password';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
    const { t } = useTranslation(['common', 'auth']);
    const { loginWithGoogle, loginWithEmail, registerWithEmail, resetPassword, loginAsGuest } = useAuth();
    const { addToast } = useToast();
    const isNative = isNativePlatform();

    const [view, setView] = useState<AuthView>('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [resetSent, setResetSent] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setView('login');
            setError(null);
            setResetSent(false);
            setEmail('');
            setPassword('');
            setName('');
        }
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleGoogleLogin = async () => {
        setIsLoading(true);
        setError(null);
        try {
            await loginWithGoogle();
            onClose();
            addToast(isNative ? 'Signed in successfully.' : 'Signed in with Google.', 'success');
        } catch (err: any) {
            console.error(err);
            if (!isNative && err.code === 'auth/unauthorized-domain') {
                setError('This domain is not authorized for Google Sign-In. Contact support to finish setup.');
            } else if (isNative && (err.code === 'auth/cancelled-popup-request' || err.code === 'auth/popup-closed-by-user')) {
                setError('Google sign-in was cancelled before completion.');
            } else {
                setError(err.message || 'Google sign-in failed. Try again in a moment.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleEmailLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Enter your email and password to continue.');
            return;
        }
        setIsLoading(true);
        setError(null);
        try {
            await loginWithEmail(email, password);
            onClose();
            addToast('Welcome back.', 'success');
        } catch (err: any) {
            console.error(err);
            if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
                setError('That email or password is not correct.');
            } else {
                setError('Sign-in failed. Try again in a moment.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password || !name) {
            setError('Complete your name, email, and password to create an account.');
            return;
        }
        if (password.length < 6) {
            setError('Use a password with at least 6 characters.');
            return;
        }
        setIsLoading(true);
        setError(null);
        try {
            await registerWithEmail(email, password, name);
            onClose();
            addToast('Account created successfully.', 'success');
        } catch (err: any) {
            console.error(err);
            if (err.code === 'auth/email-already-in-use') {
                setError('That email is already in use.');
            } else {
                setError('Account creation failed. Try again in a moment.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            setError('Enter your email address to reset your password.');
            return;
        }
        setIsLoading(true);
        setError(null);
        try {
            await resetPassword(email);
            setResetSent(true);
            addToast('Password reset email sent.', 'info');
        } catch (err: any) {
            console.error(err);
            if (err.code === 'auth/user-not-found') {
                setError('No account was found for that email.');
            } else {
                setError('Reset email failed to send. Try again in a moment.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleGuestLogin = async () => {
        setIsLoading(true);
        try {
            await loginAsGuest();
            onClose();
            addToast('Continuing as guest.', 'info');
        } catch (err) {
            console.error(err);
            setError('Guest access is unavailable right now.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
            onClick={onClose}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="auth-modal-title"
                aria-describedby="auth-modal-description"
                className="relative w-full max-w-md bg-dlp-bg-card rounded-2xl shadow-dlp-lg overflow-hidden animate-fade-in"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header Image/Gradient */}
                <div className="h-32 bg-gradient-to-br from-dlp-primary to-dlp-primary-hover flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center mix-blend-overlay"></div>
                    <div className="text-center z-10 p-4">
                        <h2 id="auth-modal-title" className="text-3xl font-bold text-white drop-shadow-md text-balance">
                            {view === 'forgot-password' ? 'Reset Password' : 'Access DoughLab'}
                        </h2>
                        <p id="auth-modal-description" className="text-white/90 text-sm font-medium mt-1 drop-shadow-sm">
                            {view === 'forgot-password' ? 'Recover your account access.' : 'Sign in, save your lab, and continue where you left off.'}
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        aria-label="Close authentication dialog"
                        className="absolute top-4 right-4 rounded-full bg-black/20 p-2 text-white transition-colors hover:bg-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/10"
                    >
                        <CloseIcon className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6 pt-8">
                    {/* Tabs */}
                    {view !== 'forgot-password' && (
                        <div className="flex mb-6 bg-dlp-bg-muted p-1 rounded-xl">
                            <button
                                onClick={() => { setView('login'); setError(null); }}
                                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${view === 'login'
                                    ? 'bg-dlp-bg-card text-dlp-text-primary shadow-dlp-sm'
                                    : 'text-dlp-text-muted hover:text-dlp-text-secondary'
                                    }`}
                            >{t('auth.login')}</button>
                            <button
                                onClick={() => { setView('signup'); setError(null); }}
                                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${view === 'signup'
                                    ? 'bg-dlp-bg-card text-dlp-text-primary shadow-dlp-sm'
                                    : 'text-dlp-text-muted hover:text-dlp-text-secondary'
                                    }`}
                            >{t('auth.sign_up')}</button>
                        </div>
                    )}

                    {/* Error Message */}
                    {error && (
                        <div className="mb-4 flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-600" role="alert" aria-live="polite">
                            <span className="mt-0.5">⚠️</span>
                            <span>{error}</span>
                        </div>
                    )}

                    {/* Forms */}
                    {view === 'login' && (
                        <form onSubmit={handleEmailLogin} className="space-y-4">
                            <div>
                                <label htmlFor="auth-login-email" className="mb-1 block text-sm font-medium text-dlp-text-secondary">{t('general.email')}</label>
                                <div className="relative">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-dlp-text-muted">
                                        <UserCircleIcon className="w-5 h-5" />
                                    </div>
                                    <input
                                        id="auth-login-email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        spellCheck={false}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="block w-full rounded-xl border border-dlp-border bg-dlp-bg-card py-2.5 pl-10 pr-3 text-dlp-text-primary placeholder-dlp-text-muted transition-colors focus:border-dlp-primary focus:ring-2 focus:ring-dlp-primary focus-visible:outline-none"
                                        placeholder="you@example.com…"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="auth-login-password" className="mb-1 block text-sm font-medium text-dlp-text-secondary">{t('general.password')}</label>
                                <div className="relative">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-dlp-text-muted">
                                        <LockClosedIcon className="w-5 h-5" />
                                    </div>
                                    <input
                                        id="auth-login-password"
                                        name="current-password"
                                        type="password"
                                        autoComplete="current-password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="block w-full rounded-xl border border-dlp-border bg-dlp-bg-card py-2.5 pl-10 pr-3 text-dlp-text-primary placeholder-dlp-text-muted transition-colors focus:border-dlp-primary focus:ring-2 focus:ring-dlp-primary focus-visible:outline-none"
                                        placeholder="Enter your password…"
                                        required
                                    />
                                </div>
                                <div className="flex justify-end mt-1">
                                    <button
                                        type="button"
                                        onClick={() => setView('forgot-password')}
                                        className="text-xs font-medium text-dlp-primary hover:text-dlp-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dlp-primary focus-visible:ring-offset-2"
                                    >Forgot Password?</button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-dlp-primary px-4 py-3 font-semibold text-white shadow-dlp-lg shadow-dlp-primary/20 transition-all hover:bg-dlp-primary-hover active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dlp-primary focus-visible:ring-offset-2"
                            >
                                {isLoading ? <SpinnerIcon className="h-5 w-5 animate-spin" /> : 'Sign In'}
                            </button>
                        </form>
                    )}

                    {view === 'signup' && (
                        <form onSubmit={handleSignup} className="space-y-4">
                            <div>
                                <label htmlFor="auth-signup-name" className="mb-1 block text-sm font-medium text-dlp-text-secondary">{t('general.name')}</label>
                                <input
                                    id="auth-signup-name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="block w-full rounded-xl border border-dlp-border bg-dlp-bg-card px-3 py-2.5 text-dlp-text-primary placeholder-dlp-text-muted transition-colors focus:border-dlp-primary focus:ring-2 focus:ring-dlp-primary focus-visible:outline-none"
                                    placeholder="Your name…"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="auth-signup-email" className="mb-1 block text-sm font-medium text-dlp-text-secondary">{t('general.email')}</label>
                                <input
                                    id="auth-signup-email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    spellCheck={false}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full rounded-xl border border-dlp-border bg-dlp-bg-card px-3 py-2.5 text-dlp-text-primary placeholder-dlp-text-muted transition-colors focus:border-dlp-primary focus:ring-2 focus:ring-dlp-primary focus-visible:outline-none"
                                    placeholder="you@example.com…"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="auth-signup-password" className="mb-1 block text-sm font-medium text-dlp-text-secondary">{t('general.password')}</label>
                                <input
                                    id="auth-signup-password"
                                    name="new-password"
                                    type="password"
                                    autoComplete="new-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full rounded-xl border border-dlp-border bg-dlp-bg-card px-3 py-2.5 text-dlp-text-primary placeholder-dlp-text-muted transition-colors focus:border-dlp-primary focus:ring-2 focus:ring-dlp-primary focus-visible:outline-none"
                                    placeholder="Create a password (min 6 chars)…"
                                    required
                                    minLength={6}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-dlp-primary px-4 py-3 font-semibold text-white shadow-dlp-lg shadow-dlp-primary/20 transition-all hover:bg-dlp-primary-hover active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dlp-primary focus-visible:ring-offset-2"
                            >
                                {isLoading ? <SpinnerIcon className="h-5 w-5 animate-spin" /> : 'Create Account'}
                            </button>
                        </form>
                    )}

                    {view === 'forgot-password' && (
                        <div className="space-y-4">
                            {resetSent ? (
                                <div className="text-center py-6">
                                    <div className="mx-auto w-12 h-12 bg-lime-100 text-lime-700 rounded-full flex items-center justify-center mb-4">
                                        <CheckCircleIcon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-dlp-text-primary">{t('general.check_your_email')}</h3>
                                    <p className="text-dlp-text-secondary mt-2 text-sm">{t('auth.we_sent_a_password_reset_link_to')}<strong>{email}</strong>
                                    </p>
                                    <button
                                        onClick={() => setView('login')}
                                        className="mt-6 w-full rounded-xl bg-dlp-bg-muted px-4 py-2.5 font-medium text-dlp-text-secondary transition-colors hover:bg-dlp-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dlp-primary focus-visible:ring-offset-2"
                                    >{t('auth.back_to_login')}</button>
                                </div>
                            ) : (
                                <form onSubmit={handleResetPassword} className="space-y-4">
                                    <p className="text-sm text-dlp-text-secondary mb-4">
                                        Enter your email address and we’ll send you a reset link.
                                    </p>
                                    <div>
                                        <label htmlFor="auth-reset-email" className="mb-1 block text-sm font-medium text-dlp-text-secondary">{t('general.email')}</label>
                                        <input
                                            id="auth-reset-email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            spellCheck={false}
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="block w-full rounded-xl border border-dlp-border bg-dlp-bg-card px-3 py-2.5 text-dlp-text-primary placeholder-dlp-text-muted transition-colors focus:border-dlp-primary focus:ring-2 focus:ring-dlp-primary focus-visible:outline-none"
                                            placeholder="you@example.com…"
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-dlp-primary px-4 py-3 font-semibold text-white shadow-dlp-lg shadow-dlp-primary/20 transition-all hover:bg-dlp-primary-hover active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dlp-primary focus-visible:ring-offset-2"
                                    >
                                        {isLoading ? <SpinnerIcon className="h-5 w-5 animate-spin" /> : 'Send Reset Link'}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setView('login')}
                                        className="w-full px-4 py-2.5 text-sm font-medium text-dlp-text-secondary transition-colors hover:text-dlp-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dlp-primary focus-visible:ring-offset-2"
                                    >{t('auth.cancel')}</button>
                                </form>
                            )}
                        </div>
                    )}

                    {/* Divider */}
                    {view !== 'forgot-password' && (
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-dlp-border"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-dlp-bg-card text-dlp-text-muted">{t('general.or_continue_with')}</span>
                            </div>
                        </div>
                    )}

                    {/* Social Login */}
                    {view !== 'forgot-password' && (
                        <div className="space-y-3">
                            <button
                                onClick={handleGoogleLogin}
                                disabled={isLoading}
                                className="flex w-full items-center justify-center gap-3 rounded-xl border border-dlp-border bg-dlp-bg-card px-4 py-2.5 font-medium text-dlp-text-secondary transition-all hover:bg-dlp-bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dlp-primary focus-visible:ring-offset-2"
                            >
                                <GoogleIcon className="w-5 h-5" />
                                <span>{isNative ? 'Continue with Google on this device' : 'Continue with Google'}</span>
                            </button>

                            <button
                                onClick={handleGuestLogin}
                                disabled={isLoading}
                                className="w-full px-4 py-2.5 text-sm font-medium text-dlp-text-muted transition-colors hover:text-dlp-text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dlp-primary focus-visible:ring-offset-2"
                            >Continue as Guest</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthModal;


