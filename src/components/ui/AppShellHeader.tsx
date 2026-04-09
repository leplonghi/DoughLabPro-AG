import React from 'react';

interface AppShellHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  size?: 'default' | 'compact' | 'micro';
  variant?: 'workspace' | 'editorial';
}

const sizeTokens = {
  micro: {
    title: 'text-[1.28rem] sm:text-[1.42rem]',
    description: 'mt-1 text-[12px] leading-[1.35] sm:text-[12.5px]',
    paddingY: 'py-4 sm:py-5',
    actionWidth: 'lg:max-w-[42%]',
  },
  compact: {
    title: 'text-[1.42rem] sm:text-[1.64rem]',
    description: 'mt-1.5 text-[12.5px] leading-[1.38] sm:text-[13px]',
    paddingY: 'py-5 sm:py-6',
    actionWidth: 'lg:max-w-[44%]',
  },
  default: {
    title: 'text-[1.62rem] sm:text-[1.92rem]',
    description: 'mt-2 text-[13px] leading-[1.45] sm:text-[14px]',
    paddingY: 'py-6 sm:py-7',
    actionWidth: 'lg:max-w-[46%]',
  },
} as const;

export const AppShellHeader: React.FC<AppShellHeaderProps> = ({
  eyebrow,
  title,
  description,
  children,
  size = 'micro',
  variant = 'workspace',
}) => {
  const sizeToken = sizeTokens[size];

  return (
    <header
      className={[
        'relative isolate overflow-hidden border-b border-emerald-950/10',
        // Keep the header aligned to the app gutters instead of forcing viewport width.
        'mx-[calc(var(--app-page-gutter,1rem)*-1)]',
        'bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.22)_0%,transparent_52%),radial-gradient(circle_at_82%_14%,rgba(214,255,233,0.22)_0%,transparent_50%),linear-gradient(135deg,#51a145_0%,#2f8b49_38%,#1B4332_100%)]',
      ].join(' ')}
      data-variant={variant}
      data-size={size}
      aria-label={`${eyebrow}: ${title}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.24)_1px,transparent_0)] [background-size:14px_14px]" />
      <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/65 to-transparent" />
      <div className="pointer-events-none absolute -left-10 -top-12 h-32 w-32 rounded-full bg-white/12 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-200/14 blur-3xl" />

      <div className={['relative px-[var(--app-page-gutter,1rem)]', sizeToken.paddingY].join(' ')}>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <h1 className={`font-black leading-[1.02] tracking-[-0.04em] text-white dlp-clamp-2 ${sizeToken.title}`}>
              {title}
            </h1>
            <p className={`max-w-2xl text-emerald-50/85 dlp-clamp-2 ${sizeToken.description}`}>
              {description}
            </p>
          </div>

          {children ? (
            <div
              className={[
                'grid grid-cols-1 gap-2 min-w-0',
                '[&>*]:min-w-0 [&>*]:max-w-full [&>*]:w-full',
                'sm:flex sm:flex-wrap sm:items-center sm:[&>*]:w-auto',
                sizeToken.actionWidth,
                'lg:justify-end lg:pl-4',
              ].join(' ')}
            >
              {children}
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default AppShellHeader;
