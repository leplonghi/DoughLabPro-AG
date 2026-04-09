import React from 'react';
import { Logo } from '@/components/ui/Logo';
import { useTranslation } from '@/i18n';

interface AppLoadingScreenProps {
  fullScreen?: boolean;
  title?: string;
  subtitle?: string;
}

const doughLoaderStyles = `
  @keyframes dlp-fermentation-ring {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dlp-dough-rise {
    0%,
    100% {
      transform: translateY(0) scale(0.96, 1.03);
    }

    45% {
      transform: translateY(-10px) scale(1.05, 0.95);
    }

    72% {
      transform: translateY(-4px) scale(1, 1);
    }
  }

  @keyframes dlp-bubble-rise {
    0%,
    100% {
      opacity: 0;
      transform: translateY(12px) scale(0.75);
    }

    20%,
    80% {
      opacity: 0.95;
    }

    100% {
      opacity: 0;
      transform: translateY(-18px) scale(1.12);
    }
  }

  @keyframes dlp-scan-line {
    0%,
    100% {
      opacity: 0.25;
      transform: translateY(0);
    }

    50% {
      opacity: 0.8;
      transform: translateY(8px);
    }
  }

  .dlp-loader-ring {
    animation: dlp-fermentation-ring 8s linear infinite;
    transform-origin: center;
    transform-box: fill-box;
  }

  .dlp-loader-dough {
    animation: dlp-dough-rise 2.2s cubic-bezier(0.37, 0, 0.2, 1) infinite;
    transform-origin: center bottom;
    transform-box: fill-box;
  }

  .dlp-loader-bubble {
    animation: dlp-bubble-rise 2.6s ease-in-out infinite;
    transform-origin: center;
    transform-box: fill-box;
  }

  .dlp-loader-bubble-delay-1 {
    animation-delay: 0.45s;
  }

  .dlp-loader-bubble-delay-2 {
    animation-delay: 0.9s;
  }

  .dlp-loader-scan {
    animation: dlp-scan-line 1.8s ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    .dlp-loader-ring,
    .dlp-loader-dough,
    .dlp-loader-bubble,
    .dlp-loader-scan {
      animation: none;
    }
  }
`;

const DoughLabLoaderGraphic: React.FC = () => (
  <svg
    viewBox="0 0 240 240"
    className="h-[210px] w-[210px] drop-shadow-[0_24px_50px_rgba(15,23,42,0.12)]"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="dlp-shell" x1="64" y1="76" x2="180" y2="184" gradientUnits="userSpaceOnUse">
        <stop stopColor="#f8fbf5" />
        <stop offset="0.6" stopColor="#edf6eb" />
        <stop offset="1" stopColor="#d6ead2" />
      </linearGradient>
      <linearGradient id="dlp-dough" x1="86" y1="120" x2="156" y2="182" gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff5d6" />
        <stop offset="0.55" stopColor="#f4d896" />
        <stop offset="1" stopColor="#e8b868" />
      </linearGradient>
      <linearGradient id="dlp-accent" x1="76" y1="62" x2="172" y2="168" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7dd37a" />
        <stop offset="1" stopColor="#3f8e40" />
      </linearGradient>
      <radialGradient id="dlp-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(120 126) rotate(90) scale(88 88)">
        <stop stopColor="#83d68f" stopOpacity="0.2" />
        <stop offset="1" stopColor="#83d68f" stopOpacity="0" />
      </radialGradient>
      <filter id="dlp-soft" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="6" />
      </filter>
    </defs>

    <circle cx="120" cy="120" r="76" fill="url(#dlp-glow)" />

    <g className="dlp-loader-ring">
      <circle
        cx="120"
        cy="120"
        r="84"
        fill="none"
        stroke="rgba(81,161,69,0.14)"
        strokeWidth="1.5"
        strokeDasharray="3 11"
        strokeLinecap="round"
      />
      <path
        d="M120 36 A84 84 0 0 1 192 82"
        fill="none"
        stroke="url(#dlp-accent)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M48 158 A84 84 0 0 1 78 54"
        fill="none"
        stroke="#d9e8d5"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </g>

    <ellipse cx="120" cy="181" rx="56" ry="13" fill="#9ab18f" opacity="0.14" filter="url(#dlp-soft)" />

    <path
      d="M72 92C75 78 88 66 104 66h32c16 0 29 12 32 26l8 52c1.8 11.6-7.1 22-18.9 22H82.9c-11.8 0-20.7-10.4-18.9-22L72 92Z"
      fill="url(#dlp-shell)"
      stroke="#5b6d65"
      strokeWidth="3"
      strokeLinejoin="round"
    />

    <path
      d="M89 84h62"
      stroke="#5b6d65"
      strokeWidth="3"
      strokeLinecap="round"
      opacity="0.8"
    />

    <path
      d="M96 83c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8"
      fill="none"
      stroke="#5b6d65"
      strokeWidth="3"
      strokeLinecap="round"
    />

    <g className="dlp-loader-dough">
      <path
        d="M83 139c0-20.4 16.4-36.8 36.8-36.8h0.4c20.4 0 36.8 16.4 36.8 36.8 0 17.4-14.1 31.5-31.5 31.5H114.5C97.1 170.5 83 156.4 83 139Z"
        fill="url(#dlp-dough)"
      />
      <path
        d="M95 126c8-10.5 18.2-15.8 30.6-15.8 12.9 0 22.7 5.1 29.4 15.2"
        fill="none"
        stroke="rgba(255,255,255,0.55)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <ellipse cx="111" cy="136" rx="8" ry="4.5" fill="#f3cb76" opacity="0.42" />
      <ellipse cx="138" cy="146" rx="6.5" ry="3.6" fill="#edc16a" opacity="0.3" />
    </g>

    <g>
      <circle className="dlp-loader-bubble" cx="103" cy="102" r="4.5" fill="#7fcb74" />
      <circle className="dlp-loader-bubble dlp-loader-bubble-delay-1" cx="121" cy="92" r="3.8" fill="#51a145" />
      <circle className="dlp-loader-bubble dlp-loader-bubble-delay-2" cx="138" cy="104" r="4.2" fill="#9bd890" />
    </g>

    <g opacity="0.9">
      <path
        className="dlp-loader-scan"
        d="M71 118h98"
        stroke="url(#dlp-accent)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="10 8"
      />
      <path d="M77 109v44" stroke="#cad9c6" strokeWidth="2" strokeLinecap="round" />
      <path d="M163 109v44" stroke="#cad9c6" strokeWidth="2" strokeLinecap="round" />
      <path d="M87 101h8" stroke="#8ba58b" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M145 101h8" stroke="#8ba58b" strokeWidth="2.5" strokeLinecap="round" />
    </g>
  </svg>
);

const AppLoadingScreen: React.FC<AppLoadingScreenProps> = ({
  fullScreen = true,
  title,
  subtitle,
}) => {
  const { t } = useTranslation(['ui', 'common']);

  const resolvedTitle = title ?? t('ui.loading_workspace', 'Preparing your workspace');
  const resolvedSubtitle =
    subtitle ??
    t(
      'ui.loading_workspace_subtitle',
      'Syncing formulas, styles, and lab context for a smoother start.'
    );

  return (
    <section
      className={[
        'relative isolate flex w-full items-center justify-center overflow-hidden px-6',
        fullScreen ? 'min-h-screen' : 'min-h-[42vh] rounded-[24px]',
        'bg-[radial-gradient(circle_at_top,#ffffff_0%,#f7fbf7_34%,#edf5f0_100%)]',
      ].join(' ')}
      role="status"
      aria-live="polite"
      aria-label={resolvedTitle}
    >
      <style>{doughLoaderStyles}</style>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),transparent_72%)]" />
        <div className="absolute left-[-4rem] top-[-3rem] h-52 w-52 rounded-full bg-[#cfe8cf]/35 blur-3xl" />
        <div className="absolute bottom-[-4rem] right-[-3rem] h-56 w-56 rounded-full bg-[#d8e8de]/50 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(rgba(63,142,64,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(63,142,64,0.45) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
      </div>

      <div className="relative flex w-full max-w-[380px] flex-col items-center text-center">
        <Logo className="h-8 w-auto opacity-95" />

        <div className="relative mt-5 flex items-center justify-center" aria-hidden="true">
          <DoughLabLoaderGraphic />
        </div>

        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#4d8d4b]">
          {t('ui.loading', 'Loading')}
        </p>

        <p className="mt-3 text-[1.65rem] font-semibold tracking-[-0.04em] text-slate-900">
          {resolvedTitle}
        </p>
        <p className="mt-2 max-w-[30ch] text-sm leading-relaxed text-slate-600">
          {resolvedSubtitle}
        </p>

        <div className="mt-5 h-px w-20 bg-[linear-gradient(90deg,transparent,rgba(81,161,69,0.45),transparent)]" />
        <p className="mt-3 text-xs font-medium tracking-[0.08em] text-slate-500">
          {t('ui.loading_dough_note', 'Letting the dough rise before we open the lab.')}
        </p>
      </div>
    </section>
  );
};

export default AppLoadingScreen;
