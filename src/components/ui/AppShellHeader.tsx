import React from 'react';

interface AppShellHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

export const AppShellHeader: React.FC<AppShellHeaderProps> = ({
  eyebrow,
  title,
  description,
  children,
}) => {
  return (
    <section className="glass-panel glass-sheen relative mb-8 overflow-hidden rounded-[2.2rem] border border-white/80 bg-[linear-gradient(140deg,_rgba(255,255,255,0.78)_0%,_rgba(240,251,242,0.84)_46%,_rgba(225,245,229,0.82)_100%)] px-6 py-7 shadow-[0_34px_84px_-42px_rgba(18,47,24,0.28)] sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-emerald-300/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-full bg-lime-200/30 blur-3xl" />
      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-emerald-200/70 bg-white/72 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.24em] text-[#2f7a3c] shadow-[0_10px_30px_-20px_rgba(47,122,60,0.7)] backdrop-blur-xl">
            {eyebrow}
          </div>
          <h1 className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-slate-950 sm:text-[2.85rem] sm:leading-[0.98]">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
            {description}
          </p>
        </div>
        {children ? (
          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default AppShellHeader;
