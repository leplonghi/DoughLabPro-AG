import React, { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ToastProvider";
import {
  CloseIcon,
  GoogleIcon,
  LockClosedIcon,
  UserCircleIcon,
  SpinnerIcon,
  CheckCircleIcon,
} from "@/components/ui/Icons";
import { useTranslation } from "@/i18n";

type AuthView = "login" | "signup" | "forgot-password";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/* Tiny floating grain particle */
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 4,
    duration: 8 + Math.random() * 14,
    delay: Math.random() * 6,
    opacity: 0.08 + Math.random() * 0.18,
  }));
}

const PARTICLES = generateParticles(18);

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation(["common", "auth", "ui"]);
  const { loginWithGoogle, loginWithEmail, registerWithEmail, resetPassword, loginAsGuest } = useAuth();
  const { addToast } = useToast();

  const [view, setView] = useState<AuthView>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resetSent, setResetSent] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setView("login");
      setError(null);
      setResetSent(false);
      setEmail("");
      setPassword("");
      setName("");
      // Trigger mount animation
      requestAnimationFrame(() => setMounted(true));
    } else {
      setMounted(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  /* ── Handlers (unchanged logic) ──────────────────────────── */
  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await loginWithGoogle();
      onClose();
      addToast(t("ui:auth_messages.login_google_success"), "success");
    } catch (err: any) {
      if (err.code === "auth/unauthorized-domain") {
        setError(t("ui:auth_messages.unauthorized_domain"));
      } else {
        setError(err.message || t("ui:auth_messages.failed_google_login"));
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) { setError(t("ui:auth_messages.fill_all_fields")); return; }
    setIsLoading(true);
    setError(null);
    try {
      await loginWithEmail(email, password);
      onClose();
      addToast(t("ui:auth_messages.welcome_back"), "success");
    } catch (err: any) {
      if (["auth/invalid-credential", "auth/user-not-found", "auth/wrong-password"].includes(err.code)) {
        setError(t("ui:auth_messages.invalid_email_password"));
      } else {
        setError(t("ui:auth_messages.failed_login"));
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !name) { setError(t("ui:auth_messages.fill_all_fields")); return; }
    if (password.length < 6) { setError(t("ui:auth_messages.password_min_6")); return; }
    setIsLoading(true);
    setError(null);
    try {
      await registerWithEmail(email, password, name);
      onClose();
      addToast(t("ui:auth_messages.account_created"), "success");
    } catch (err: any) {
      setError(err.code === "auth/email-already-in-use"
        ? t("ui:auth_messages.email_in_use")
        : t("ui:auth_messages.failed_create_account"));
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) { setError(t("ui:auth_messages.enter_email")); return; }
    setIsLoading(true);
    setError(null);
    try {
      await resetPassword(email);
      setResetSent(true);
      addToast(t("ui:auth_messages.reset_email_sent"), "info");
    } catch (err: any) {
      setError(err.code === "auth/user-not-found"
        ? t("ui:auth_messages.no_account_found")
        : t("ui:auth_messages.failed_reset"));
    } finally {
      setIsLoading(false);
    }
  };

  const handleGuestLogin = async () => {
    setIsLoading(true);
    try {
      onClose();
      addToast(t("ui:auth_messages.logged_in_guest"), "info");
    } catch (err) {
      setError(t("ui:auth_messages.failed_guest"));
    } finally {
      setIsLoading(false);
    }
  };

  const handleAdminBypass = async () => {
    setIsLoading(true);
    try {
      localStorage.setItem("dough-lab-vip-mode", "true");
      window.location.reload();
    } catch (err) {
      setError("Failed to login as admin.");
    } finally {
      setIsLoading(false);
    }
  };

  const switchView = (next: AuthView) => {
    setView(next);
    setError(null);
  };

  /* ── Render ───────────────────────────────────────────────── */
  return (
    <>
      {/* Inline keyframe styles */}
      <style>{`
        @keyframes auth-backdrop-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes auth-modal-in {
          from { opacity: 0; transform: scale(0.92) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes auth-field-in {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes auth-particle-float {
          0%   { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: var(--p-opacity); }
          33%  { transform: translateY(-18px) translateX(8px) rotate(120deg); }
          66%  { transform: translateY(8px) translateX(-6px) rotate(240deg); }
          100% { transform: translateY(0px) translateX(0px) rotate(360deg); opacity: var(--p-opacity); }
        }
        @keyframes auth-header-wave {
          0%   { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        @keyframes auth-orb-pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50%       { transform: scale(1.15); opacity: 0.5; }
        }
        @keyframes auth-tab-slide {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes shimmer-sweep {
          0%   { left: -100%; }
          100% { left: 150%; }
        }
        @keyframes error-shake {
          0%, 100% { transform: translateX(0); }
          20%      { transform: translateX(-6px); }
          40%      { transform: translateX(6px); }
          60%      { transform: translateX(-4px); }
          80%      { transform: translateX(4px); }
        }
        .auth-field-stagger-1 { animation: auth-field-in 0.45s cubic-bezier(0.16,1,0.3,1) 0.05s both; }
        .auth-field-stagger-2 { animation: auth-field-in 0.45s cubic-bezier(0.16,1,0.3,1) 0.12s both; }
        .auth-field-stagger-3 { animation: auth-field-in 0.45s cubic-bezier(0.16,1,0.3,1) 0.19s both; }
        .auth-field-stagger-4 { animation: auth-field-in 0.45s cubic-bezier(0.16,1,0.3,1) 0.26s both; }
        .auth-field-stagger-5 { animation: auth-field-in 0.45s cubic-bezier(0.16,1,0.3,1) 0.33s both; }
        .auth-field-stagger-6 { animation: auth-field-in 0.45s cubic-bezier(0.16,1,0.3,1) 0.40s both; }

        .auth-input {
          display: block;
          width: 100%;
          padding: 11px 12px 11px 40px;
          border: 1.5px solid #E7E5E4;
          border-radius: 10px;
          background: #FFFFFF;
          color: #1C1917;
          font-size: 0.875rem;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
          outline: none;
        }
        .auth-input::placeholder { color: #A8A29E; }
        .auth-input:focus {
          border-color: #10b981;
          box-shadow: 0 0 0 3px rgba(16,185,129,0.15);
          background: #f0fdf8;
        }
        .auth-input:hover:not(:focus) {
          border-color: #D6D3D1;
        }

        .auth-submit-btn {
          position: relative;
          overflow: hidden;
          width: 100%;
          padding: 13px 16px;
          border-radius: 10px;
          background: linear-gradient(135deg, #059669 0%, #10b981 100%);
          color: white;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 0.01em;
          border: none;
          cursor: pointer;
          transition: transform 0.15s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s;
          box-shadow: 0 4px 14px rgba(16,185,129,0.35);
        }
        .auth-submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(16,185,129,0.45);
        }
        .auth-submit-btn:active:not(:disabled) {
          transform: translateY(0) scale(0.98);
        }
        .auth-submit-btn:disabled { opacity: 0.65; cursor: not-allowed; }
        .auth-submit-btn::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);
          transform: skewX(-20deg);
        }
        .auth-submit-btn:hover:not(:disabled)::after {
          animation: shimmer-sweep 0.7s ease forwards;
        }

        .auth-google-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 11px 16px;
          border-radius: 10px;
          border: 1.5px solid #E7E5E4;
          background: #FFFFFF;
          color: #44403C;
          font-weight: 600;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4,0,0.2,1);
        }
        .auth-google-btn:hover:not(:disabled) {
          border-color: #D6D3D1;
          background: #F5F5F4;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.07);
        }
        .auth-google-btn:disabled { opacity: 0.65; cursor: not-allowed; }

        .auth-tab-indicator {
          position: absolute;
          bottom: 2px;
          height: 2px;
          background: linear-gradient(90deg, #059669, #10b981);
          border-radius: 2px;
          transition: left 0.3s cubic-bezier(0.34,1.56,0.64,1), width 0.3s;
        }

        .auth-label {
          display: block;
          font-size: 0.78rem;
          font-weight: 600;
          color: #57534E;
          margin-bottom: 5px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        @media (prefers-reduced-motion: reduce) {
          .auth-field-stagger-1,
          .auth-field-stagger-2,
          .auth-field-stagger-3,
          .auth-field-stagger-4,
          .auth-field-stagger-5,
          .auth-field-stagger-6 { animation: none; }
          .auth-submit-btn::after { display: none; }
        }
      `}</style>

      {/* ── Backdrop ─────────────────────────────────────────── */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
          background: "rgba(15, 23, 18, 0.55)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          animation: "auth-backdrop-in 0.25s ease-out both",
        }}
      >
        {/* ── Floating flour particles ─────────────────────── */}
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            style={{
              position: "absolute",
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.7)",
              pointerEvents: "none",
              "--p-opacity": p.opacity,
              animation: `auth-particle-float ${p.duration}s ${p.delay}s ease-in-out infinite`,
            } as React.CSSProperties}
          />
        ))}

        {/* ── Modal Card ──────────────────────────────────── */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "420px",
            background: "#FFFFFF",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 32px 64px -12px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,0,0,0.04)",
            animation: "auth-modal-in 0.45s cubic-bezier(0.16,1,0.3,1) both",
          }}
        >
          {/* ── Header ──────────────────────────────────────── */}
          <div
            style={{
              position: "relative",
              height: "136px",
              background: "linear-gradient(135deg, #064e3b 0%, #059669 55%, #10b981 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            {/* Orb 1 */}
            <div style={{
              position: "absolute", top: "-30px", left: "-30px",
              width: "140px", height: "140px",
              borderRadius: "50%",
              background: "rgba(16,185,129,0.25)",
              animation: "auth-orb-pulse 4s ease-in-out infinite",
            }} />
            {/* Orb 2 */}
            <div style={{
              position: "absolute", bottom: "-20px", right: "-20px",
              width: "100px", height: "100px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.08)",
              animation: "auth-orb-pulse 5s 1.5s ease-in-out infinite",
            }} />
            {/* Grid lines decoration */}
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(255,255,255,0.04) 28px, rgba(255,255,255,0.04) 29px), repeating-linear-gradient(90deg, transparent, transparent 28px, rgba(255,255,255,0.04) 28px, rgba(255,255,255,0.04) 29px)",
              backgroundSize: "29px 29px",
            }} />
            {/* Shimmer sweep on load */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%)",
              animation: "auth-header-wave 1.8s ease-out 0.3s both",
            }} />

            {/* Bread emoji icon */}
            <div style={{
              position: "relative", zIndex: 2,
              textAlign: "center",
            }}>
              <div style={{
                fontSize: "2rem",
                marginBottom: "4px",
                display: "inline-block",
                filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.3))",
                animation: "auth-orb-pulse 3s ease-in-out infinite",
              }}>
                🥖
              </div>
              <h2 style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#FFFFFF",
                margin: 0,
                letterSpacing: "-0.02em",
                textShadow: "0 2px 12px rgba(0,0,0,0.2)",
              }}>
                {view === "forgot-password" ? t("ui.reset_password_357") : t("ui.doughlab_pro_358")}
              </h2>
              <p style={{
                margin: "2px 0 0",
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.82)",
                fontWeight: 500,
                letterSpacing: "0.02em",
              }}>
                {view === "forgot-password"
                  ? t("ui.recover_your_access_359")
                  : t("ui:auth_messages.welcome_to_doughlab")}
              </p>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              style={{
                position: "absolute", top: "12px", right: "12px", zIndex: 3,
                width: "32px", height: "32px",
                borderRadius: "50%",
                background: "rgba(0,0,0,0.22)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "white",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer",
                transition: "background 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.4)";
                (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.22)";
                (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
              }}
            >
              <CloseIcon className="w-4 h-4" />
            </button>
          </div>

          {/* ── Body ────────────────────────────────────────── */}
          <div style={{ padding: "24px 24px 20px" }}>

            {/* Tabs */}
            {view !== "forgot-password" && (
              <div
                className="auth-field-stagger-1"
                style={{
                  position: "relative",
                  display: "flex",
                  marginBottom: "20px",
                  borderBottom: "2px solid #F0EDEC",
                }}
              >
                {(["login", "signup"] as AuthView[]).map((v, i) => (
                  <button
                    key={v}
                    onClick={() => switchView(v)}
                    style={{
                      flex: 1,
                      paddingBottom: "10px",
                      paddingTop: "4px",
                      fontSize: "0.875rem",
                      fontWeight: view === v ? 700 : 500,
                      color: view === v ? "#059669" : "#78716C",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      transition: "color 0.2s",
                      minHeight: "auto",
                    }}
                  >
                    {v === "login" ? t("auth.login") : t("auth.sign_up")}
                  </button>
                ))}
                {/* Sliding indicator */}
                <div
                  className="auth-tab-indicator"
                  style={{
                    left: view === "login" ? "2px" : "50%",
                    width: "calc(50% - 4px)",
                  }}
                />
              </div>
            )}

            {/* Error */}
            {error && (
              <div
                style={{
                  marginBottom: "14px",
                  padding: "10px 12px",
                  background: "#FEF2F2",
                  border: "1px solid #FECACA",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                  fontSize: "0.82rem",
                  color: "#B91C1C",
                  animation: "error-shake 0.4s cubic-bezier(0.36,0.07,0.19,0.97) both",
                }}
              >
                <span style={{ flexShrink: 0, marginTop: "1px" }}>⚠️</span>
                <span>{error}</span>
              </div>
            )}

            {/* ── LOGIN FORM ─────────────────────────────── */}
            {view === "login" && (
              <form onSubmit={handleEmailLogin} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div className="auth-field-stagger-2">
                  <label className="auth-label">{t("general.email")}</label>
                  <div style={{ position: "relative" }}>
                    <span style={{
                      position: "absolute", left: "12px", top: "50%",
                      transform: "translateY(-50%)",
                      color: "#A8A29E", pointerEvents: "none",
                      display: "flex",
                    }}>
                      <UserCircleIcon className="w-4 h-4" />
                    </span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="auth-input"
                      placeholder={t("ui:you_example_com")}
                      required
                    />
                  </div>
                </div>

                <div className="auth-field-stagger-3">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "5px" }}>
                    <label className="auth-label" style={{ marginBottom: 0 }}>{t("general.password")}</label>
                    <button
                      type="button"
                      onClick={() => switchView("forgot-password")}
                      style={{
                        fontSize: "0.72rem",
                        color: "#059669",
                        fontWeight: 600,
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                        minHeight: "auto",
                        minWidth: "auto",
                        transition: "color 0.15s",
                      }}
                    >
                      {t("auth.esqueci_minha_senha")}
                    </button>
                  </div>
                  <div style={{ position: "relative" }}>
                    <span style={{
                      position: "absolute", left: "12px", top: "50%",
                      transform: "translateY(-50%)",
                      color: "#A8A29E", pointerEvents: "none",
                      display: "flex",
                    }}>
                      <LockClosedIcon className="w-4 h-4" />
                    </span>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="auth-input"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>

                <div className="auth-field-stagger-4">
                  <button type="submit" disabled={isLoading} className="auth-submit-btn">
                    {isLoading
                      ? <SpinnerIcon className="w-5 h-5 animate-spin" style={{ display: "inline-block" }} />
                      : t("ui:auth_messages.sign_in_button")}
                  </button>
                </div>
              </form>
            )}

            {/* ── SIGNUP FORM ────────────────────────────── */}
            {view === "signup" && (
              <form onSubmit={handleSignup} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div className="auth-field-stagger-2">
                  <label className="auth-label">{t("general.name")}</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="auth-input"
                    style={{ paddingLeft: "12px" }}
                    placeholder={t("general.your_name")}
                    required
                  />
                </div>
                <div className="auth-field-stagger-3">
                  <label className="auth-label">{t("general.email")}</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="auth-input"
                    style={{ paddingLeft: "12px" }}
                    placeholder={t("ui:you_example_com")}
                    required
                  />
                </div>
                <div className="auth-field-stagger-4">
                  <label className="auth-label">{t("general.password")}</label>
                  <div style={{ position: "relative" }}>
                    <span style={{
                      position: "absolute", left: "12px", top: "50%",
                      transform: "translateY(-50%)",
                      color: "#A8A29E", pointerEvents: "none",
                      display: "flex",
                    }}>
                      <LockClosedIcon className="w-4 h-4" />
                    </span>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="auth-input"
                      placeholder={t("ui:auth_messages.create_password", { defaultValue: "Min. 6 caracteres" })}
                      required
                      minLength={6}
                    />
                  </div>
                </div>
                <div className="auth-field-stagger-5">
                  <button type="submit" disabled={isLoading} className="auth-submit-btn">
                    {isLoading
                      ? <SpinnerIcon className="w-5 h-5 animate-spin" style={{ display: "inline-block" }} />
                      : t("ui:auth_messages.create_account_button")}
                  </button>
                </div>
              </form>
            )}

            {/* ── FORGOT PASSWORD ────────────────────────── */}
            {view === "forgot-password" && (
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {resetSent ? (
                  <div style={{ textAlign: "center", padding: "20px 0" }} className="auth-field-stagger-1">
                    <div style={{
                      width: "52px", height: "52px",
                      background: "linear-gradient(135deg, #d1fae5, #a7f3d0)",
                      borderRadius: "50%",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      margin: "0 auto 14px",
                      boxShadow: "0 4px 12px rgba(16,185,129,0.25)",
                    }}>
                      <CheckCircleIcon className="w-6 h-6" style={{ color: "#059669" }} />
                    </div>
                    <h3 style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "1.1rem", fontWeight: 700,
                      color: "#1C1917", margin: "0 0 6px",
                    }}>
                      {t("general.check_your_email")}
                    </h3>
                    <p style={{ fontSize: "0.83rem", color: "#78716C", margin: "0 0 18px", lineHeight: 1.5 }}>
                      {t("auth.we_sent_a_password_reset_link_to")}
                      <strong style={{ color: "#1C1917" }}> {email}</strong>
                    </p>
                    <button
                      onClick={() => switchView("login")}
                      className="auth-google-btn"
                    >
                      {t("auth.back_to_login")}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleResetPassword} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    <p className="auth-field-stagger-1" style={{ fontSize: "0.83rem", color: "#78716C", margin: 0, lineHeight: 1.5 }}>
                      {t("ui:auth_messages.reset_password_instruction")}
                    </p>
                    <div className="auth-field-stagger-2">
                      <label className="auth-label">{t("general.email")}</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="auth-input"
                        style={{ paddingLeft: "12px" }}
                        placeholder={t("ui:you_example_com")}
                        required
                      />
                    </div>
                    <div className="auth-field-stagger-3">
                      <button type="submit" disabled={isLoading} className="auth-submit-btn">
                        {isLoading
                          ? <SpinnerIcon className="w-5 h-5 animate-spin" style={{ display: "inline-block" }} />
                          : t("ui:auth_messages.send_reset_link")}
                      </button>
                    </div>
                    <div className="auth-field-stagger-4">
                      <button
                        type="button"
                        onClick={() => switchView("login")}
                        style={{
                          width: "100%", padding: "10px",
                          fontSize: "0.83rem", fontWeight: 500,
                          color: "#78716C", background: "none",
                          border: "none", cursor: "pointer",
                          transition: "color 0.15s",
                          minHeight: "auto",
                        }}
                      >
                        {t("auth.cancel")}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}

            {/* ── Divider + Social ──────────────────────── */}
            {view !== "forgot-password" && (
              <>
                <div className="auth-field-stagger-5" style={{
                  position: "relative",
                  margin: "18px 0",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}>
                  <div style={{ flex: 1, height: "1px", background: "#E7E5E4" }} />
                  <span style={{ fontSize: "0.75rem", color: "#A8A29E", fontWeight: 500, whiteSpace: "nowrap" }}>
                    {t("general.or_continue_with")}
                  </span>
                  <div style={{ flex: 1, height: "1px", background: "#E7E5E4" }} />
                </div>

                <div className="auth-field-stagger-6" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <button
                    onClick={handleGoogleLogin}
                    disabled={isLoading}
                    className="auth-google-btn"
                  >
                    <GoogleIcon className="w-5 h-5" />
                    <span>{t("general.google")}</span>
                  </button>

                  <button
                    onClick={handleGuestLogin}
                    disabled={isLoading}
                    style={{
                      width: "100%",
                      padding: "9px",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      color: "#A8A29E",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      transition: "color 0.15s",
                      minHeight: "auto",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#57534E")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#A8A29E")}
                  >
                    {t("auth.continue_as_guest")}
                  </button>

                  <button
                    onClick={handleAdminBypass}
                    disabled={isLoading}
                    style={{
                      width: "100%",
                      padding: "9px",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      color: "#EF4444",
                      background: "none",
                      border: "1px dashed #FECACA",
                      borderRadius: "8px",
                      cursor: "pointer",
                      transition: "all 0.15s",
                      minHeight: "auto",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = "#FEF2F2";
                      (e.currentTarget as HTMLButtonElement).style.borderColor = "#FCA5A5";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = "none";
                      (e.currentTarget as HTMLButtonElement).style.borderColor = "#FECACA";
                    }}
                  >
                    [TEST] Admin Access
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthModal;
