import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ToastProvider';
import {
    CloseIcon,
    GoogleIcon,
    LockClosedIcon,
    UserCircleIcon,
    SpinnerIcon,
    CheckCircleIcon
} from '@/components/ui/Icons';
import { useUser } from '@/contexts/UserProvider';
import { useTranslation } from '@/i18n';

type AuthView = 'login' | 'signup' | 'forgot-password';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
    const { loginWithGoogle, loginWithEmail, registerWithEmail, resetPassword, loginAsGuest } = useAuth();
    const { addToast } = useToast();
    const { grantProAccess } = useUser();

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

    if (!isOpen) return null;

    const handleGoogleLogin = async () => {
        setIsLoading(true);
        setError(null);
        try {
            await loginWithGoogle();
            onClose();
            addToast('Successfully logged in with Google!', 'success');
        } catch (err: any) {
            console.error(err);
            if (err.code === 'auth/unauthorized-domain') {
                 setError('This domain is not authorized for Google Sign-In. Please contact support.');
            } else {
                 setError(err.message || 'Failed to login with Google. Please try again.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleEmailLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Please fill in all fields.');
            return;
        }
        setIsLoading(true);
        setError(null);
        try {
            await loginWithEmail(email, password);
            onClose();
            addToast('Welcome back!', 'success');
        } catch (err: any) {
            console.error(err);
            if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
                setError('Invalid email or password.');
            } else {
                setError('Failed to login. Please try again.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password || !name) {
            setError('Please fill in all fields.');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters.');
            return;
        }
        setIsLoading(true);
        setError(null);
        try {
            await registerWithEmail(email, password, name);
            onClose();
            addToast('Account created successfully!', 'success');
        } catch (err: any) {
            console.error(err);
            if (err.code === 'auth/email-already-in-use') {
                setError('Email is already in use.');
            } else {
                setError('Failed to create account. Please try again.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            setError('Please enter your email address.');
            return;
        }
        setIsLoading(true);
        setError(null);
        try {
            await resetPassword(email);
            setResetSent(true);
            addToast('Password reset email sent!', 'info');
        } catch (err: any) {
            console.error(err);
            if (err.code === 'auth/user-not-found') {
                setError('No account found with this email.');
            } else {
                setError('Failed to send reset email. Please try again.');
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
            addToast('Logged in as Guest', 'info');
        } catch (err) {
            console.error(err);
            setError('Failed to login as guest.');
        } finally {
            setIsLoading(false);
        }
    };
    
    // Admin bypass function
    const handleAdminBypass = async () => {
        setIsLoading(true);
        try {
             // 1. Log in as Guest first (to have a user session)
            await loginAsGuest();
            
            // 2. Grant Pro Access
            grantProAccess();

            onClose();
            addToast('Logged in as Admin (Pro Unlocked)', 'success');
        } catch (err) {
             console.error(err);
            setError('Failed to login as admin.');
        } finally {
            setIsLoading(false);
        }
    }


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
            <div
                className="relative w-full max-w-md bg-dlp-bg-card rounded-2xl shadow-dlp-lg overflow-hidden animate-fade-in"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header Image/Gradient */}
                <div className="h-32 bg-gradient-to-br from-dlp-accent to-dlp-accent-hover flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center mix-blend-overlay"></div>
                    <div className="text-center z-10 p-4">
                        <h2 className="text-3xl font-bold text-white drop-shadow-md">
                            {view === 'forgot-password' ? 'Reset Password' : 'DoughLab Pro'}
                        </h2>
                        <p className="text-white/90 text-sm font-medium mt-1 drop-shadow-sm">
                            {view === 'forgot-password' ? 'Recover your access' : 'Bem-vindo ao DoughLab Pro'}
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/30 text-white rounded-full transition-colors"
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
                        <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg flex items-start gap-2">
                            <span className="mt-0.5">⚠️</span>
                            <span>{error}</span>
                        </div>
                    )}

                    {/* Forms */}
                    {view === 'login' && (
                        <form onSubmit={handleEmailLogin} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-dlp-text-secondary mb-1">{t('general.email')}</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-dlp-text-muted">
                                        <UserCircleIcon className="w-5 h-5" />
                                    </div>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="block w-full pl-10 pr-3 py-2.5 border border-dlp-border rounded-xl focus:ring-2 focus:ring-dlp-accent focus:border-dlp-accent transition-colors bg-dlp-bg-card text-dlp-text-primary placeholder-dlp-text-muted"
                                        placeholder="you@example.com"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-dlp-text-secondary mb-1">{t('general.password')}</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-dlp-text-muted">
                                        <LockClosedIcon className="w-5 h-5" />
                                    </div>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="block w-full pl-10 pr-3 py-2.5 border border-dlp-border rounded-xl focus:ring-2 focus:ring-dlp-accent focus:border-dlp-accent transition-colors bg-dlp-bg-card text-dlp-text-primary placeholder-dlp-text-muted"
                                        placeholder={t('general.')}
                                        required
                                    />
                                </div>
                                <div className="flex justify-end mt-1">
                                    <button
                                        type="button"
                                        onClick={() => setView('forgot-password')}
                                        className="text-xs text-dlp-accent hover:text-dlp-accent-hover font-medium"
                                    >{t('auth.esqueci_minha_senha')}</button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-3 px-4 bg-dlp-accent hover:bg-dlp-accent-hover text-white font-semibold rounded-xl shadow-dlp-md transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                            >
                                {isLoading ? <SpinnerIcon className="w-5 h-5 animate-spin" /> : 'Sign In'}
                            </button>
                        </form>
                    )}

                    {view === 'signup' && (
                        <form onSubmit={handleSignup} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-dlp-text-secondary mb-1">{t('general.name')}</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="block w-full px-3 py-2.5 border border-dlp-border rounded-xl focus:ring-2 focus:ring-dlp-accent focus:border-dlp-accent transition-colors bg-dlp-bg-card text-dlp-text-primary placeholder-dlp-text-muted"
                                    placeholder={t('general.your_name')}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-dlp-text-secondary mb-1">{t('general.email')}</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full px-3 py-2.5 border border-dlp-border rounded-xl focus:ring-2 focus:ring-dlp-accent focus:border-dlp-accent transition-colors bg-dlp-bg-card text-dlp-text-primary placeholder-dlp-text-muted"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-dlp-text-secondary mb-1">{t('general.password')}</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full px-3 py-2.5 border border-dlp-border rounded-xl focus:ring-2 focus:ring-dlp-accent focus:border-dlp-accent transition-colors bg-dlp-bg-card text-dlp-text-primary placeholder-dlp-text-muted"
                                    placeholder="Create a password (min 6 chars)"
                                    required
                                    minLength={6}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-3 px-4 bg-dlp-accent hover:bg-dlp-accent-hover text-white font-semibold rounded-xl shadow-dlp-md transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                            >
                                {isLoading ? <SpinnerIcon className="w-5 h-5 animate-spin" /> : 'Create Account'}
                            </button>
                        </form>
                    )}

                    {view === 'forgot-password' && (
                        <div className="space-y-4">
                            {resetSent ? (
                                <div className="text-center py-6">
                                    <div className="mx-auto w-12 h-12 bg-lime-100 text-dlp-accent rounded-full flex items-center justify-center mb-4">
                                        <CheckCircleIcon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-dlp-text-primary">{t('general.check_your_email')}</h3>
                                    <p className="text-dlp-text-secondary mt-2 text-sm">{t('auth.we_sent_a_password_reset_link_to')}<strong>{email}</strong>
                                    </p>
                                    <button
                                        onClick={() => setView('login')}
                                        className="mt-6 w-full py-2.5 px-4 bg-dlp-bg-muted hover:bg-dlp-border text-dlp-text-secondary font-medium rounded-xl transition-colors"
                                    >{t('auth.back_to_login')}</button>
                                </div>
                            ) : (
                                <form onSubmit={handleResetPassword} className="space-y-4">
                                    <p className="text-sm text-dlp-text-secondary mb-4">
                                        Enter your email address and we'll send you a link to reset your password.
                                    </p>
                                    <div>
                                        <label className="block text-sm font-medium text-dlp-text-secondary mb-1">{t('general.email')}</label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="block w-full px-3 py-2.5 border border-dlp-border rounded-xl focus:ring-2 focus:ring-dlp-accent focus:border-dlp-accent transition-colors bg-dlp-bg-card text-dlp-text-primary placeholder-dlp-text-muted"
                                            placeholder="you@example.com"
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full py-3 px-4 bg-dlp-accent hover:bg-dlp-accent-hover text-white font-semibold rounded-xl shadow-dlp-md transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                                    >
                                        {isLoading ? <SpinnerIcon className="w-5 h-5 animate-spin" /> : 'Send Reset Link'}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setView('login')}
                                        className="w-full py-2.5 px-4 text-dlp-text-secondary hover:text-dlp-text-primary font-medium text-sm transition-colors"
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
                                className="w-full py-2.5 px-4 bg-dlp-bg-card border border-dlp-border hover:bg-dlp-bg-muted hover:border-dlp-border-strong text-dlp-text-secondary font-medium rounded-xl transition-all flex items-center justify-center gap-3"
                            >
                                <GoogleIcon className="w-5 h-5" />
                                <span>{t('general.google')}</span>
                            </button>

                            <button
                                onClick={handleGuestLogin}
                                disabled={isLoading}
                                className="w-full py-2.5 px-4 text-dlp-text-muted hover:text-dlp-text-secondary text-sm font-medium transition-colors"
                            >{t('auth.continue_as_guest')}</button>
                            
                             <button
                                onClick={handleAdminBypass}
                                disabled={isLoading}
                                className="w-full py-2.5 px-4 text-red-500 hover:text-red-700 text-sm font-medium transition-colors border border-red-200 rounded-xl hover:bg-red-50"
                            >
                                [TEST] Admin Access
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
