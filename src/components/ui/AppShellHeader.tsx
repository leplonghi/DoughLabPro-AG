import React from 'react';

interface AppShellHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  size?: 'default' | 'compact';
}

export const AppShellHeader: React.FC<AppShellHeaderProps> = ({
  eyebrow,
  title,
  description,
  children,
  size = 'default',
}) => {
  const isCompact = size === 'compact';
  return (
    <section className={`glass-panel glass-sheen relative mb-8 overflow-hidden border border-white/80 bg-[linear-gradient(140deg,_rgba(255,255,255,0.78)_0%,_rgba(240,251,242,0.84)_46%,_rgba(225,245,229,0.82)_100%)] shadow-[0_34px_84px_-42px_rgba(18,47,24,0.28)] ${isCompact ? 'rounded-[1.6rem] px-5 py-5 sm:px-6 lg:px-7' : 'rounded-[2.2rem] px-6 py-7 sm:px-8 lg:px-10'}`}>
      <div className={`pointer-events-none absolute -right-16 top-0 rounded-full bg-emerald-300/25 blur-3xl ${isCompact ? 'h-32 w-32' : 'h-48 w-48'}`} />
      <div className={`pointer-events-none absolute bottom-0 left-0 rounded-full bg-lime-200/30 blur-3xl ${isCompact ? 'h-28 w-28' : 'h-40 w-40'}`} />
      <div className={`relative flex flex-col ${isCompact ? 'gap-4' : 'gap-6'} lg:flex-row lg:items-end lg:justify-between`}>
        <div className="max-w-3xl">
          <div className={`inline-flex items-center rounded-full border border-emerald-200/70 bg-white/72 font-bold uppercase text-[#2f7a3c] shadow-[0_10px_30px_-20px_rgba(47,122,60,0.7)] backdrop-blur-xl ${isCompact ? 'px-3 py-0.5 text-[10px] tracking-[0.2em]' : 'px-3 py-1 text-[11px] tracking-[0.24em]'}`}>
            {eyebrow}
          </div>
          <h1 className={`mt-4 max-w-3xl font-black tracking-tight text-slate-950 ${isCompact ? 'text-2xl sm:text-[2.25rem] sm:leading-[1.02]' : 'text-3xl sm:text-[2.85rem] sm:leading-[0.98]'}`}>
            {title}
          </h1>
          <p className={`mt-3 max-w-2xl leading-7 text-slate-700 ${isCompact ? 'text-sm sm:text-base' : 'text-base sm:text-lg'}`}>
            {description}
          </p>
        </div>
        {children ? (
          <div className={`flex flex-wrap items-center lg:justify-end ${isCompact ? 'gap-2' : 'gap-3'}`}>
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default AppShellHeader;
