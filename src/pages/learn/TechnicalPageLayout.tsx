import React, { useMemo } from 'react';
import { BookOpenIcon, ExternalLinkIcon, ShoppingBagIcon, StarIcon, SolidStarIcon } from '@/components/ui/Icons';
import { Logo } from '@/components/ui/Logo';
import { getAffiliateSuggestionsForTopic } from '@/logic/affiliateSuggestions';
import { useUser } from '@/contexts/UserProvider';
import PDFExportButton from '@/components/ui/PDFExportButton';
import ShareButton from '@/components/ui/ShareButton';
import { LockFeature } from '@/components/auth/LockFeature';
import { useTranslation } from '@/i18n';

interface TechnicalPageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  showReferencesSection?: boolean;
  isPro?: boolean;
}

const TechnicalPageLayout: React.FC<TechnicalPageLayoutProps> = ({ title, subtitle, children, showReferencesSection = false, isPro = false }) => {
  const { t } = useTranslation();
  const suggestion = useMemo(() => getAffiliateSuggestionsForTopic(title), [title]);
  const { user, openPaywall, toggleFavorite, isFavorite } = useUser();

  // Use current hash as the unique ID for the article (handling hash routing)
  const articleId = typeof window !== 'undefined' ? window.location.hash.slice(1) || title : title;
  const isFav = isFavorite(articleId);


  const handleToggleFavorite = async () => {
    await toggleFavorite({
      id: articleId,
      type: 'learn',
      title: title
    });
  };

  return (
    <div className="mx-auto max-w-4xl animate-[fadeIn_0.5s_ease-in-out]">
      <style>
        {`
          @media print {
            .no-print { display: none !important; }
            header { display: none !important; } /* Hide global app header */
            body { background: white; }
            .prose { max-width: 100% !important; }
            .print-header { display: flex !important; }
          }
        `}
      </style>

      <div className="flex items-center justify-between mb-6 no-print">
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors"
        >
          &larr; Back
        </button>
        <div className="flex items-center gap-2">
          <button
            onClick={handleToggleFavorite}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-amber-400 transition-colors"
            title={isFav ? t('learn.remove_from_favorites') : t('learn.save_to_favorites')}
          >
            {isFav ? <SolidStarIcon className="h-6 w-6 text-amber-400" /> : <StarIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div id="technical-content" className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200/50 sm:p-10 print:shadow-none print:ring-0 print:p-0">

        {/* Print-only Header - Moved inside technical-content for PDF capture */}
        <div className="hidden print-header items-center justify-between mb-4 border-b border-slate-200 pb-4">
          <Logo className="h-8 w-auto" />
          <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">{t('learn.advanced_dough_science')}</p>
        </div>

        <div className="text-center sm:text-left border-b border-slate-100 pb-6 mb-6 print:border-none print:pb-0 print:mb-4">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h1>
          {subtitle && (
            <p className="mt-4 text-lg text-slate-700">
              {subtitle}
            </p>
          )}

          {/* Action Bar */}
          <div className="flex flex-wrap items-center gap-3 mt-6 no-print justify-center sm:justify-start">
            <LockFeature
              featureKey="export.pdf_json"
              fallback={
                <button
                  onClick={() => openPaywall('exports_pdf')}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 text-slate-400 cursor-not-allowed hover:bg-slate-200 transition-colors font-medium text-sm"
                >
                  <div className="flex items-center gap-1">
                    <span className="text-amber-500">
                      <StarIcon className="h-4 w-4" />
                    </span>{t('learn.download_pdf')}</div>
                </button>
              }
            >
              <PDFExportButton
                targetId="technical-content"
                label={t('learn.download_pdf')}
                className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm"
              />
            </LockFeature>
            <ShareButton
              title={title}
              text={subtitle || `Learn about ${title}`}
              className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm"
            />
          </div>
        </div>

        {isPro ? (
          <LockFeature
            featureKey="learn.full_and_grandma"
            fallback={
              <div className="relative no-print">
                <div className="prose mt-8 max-w-none text-slate-900 h-[300px] overflow-hidden relative leading-relaxed">
                  {children}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white pointer-events-none"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-full flex justify-center pb-8 z-10">
                  <div className="text-center bg-white/90 p-6 rounded-xl border border-slate-200 shadow-lg backdrop-blur-sm max-w-md">
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{t('learn.upgrade_to_pro_to_unlock_the_full_advanced_dough_t')}</h3>
                    <p className="text-slate-700 text-sm mb-4">{t('learn.serious_bakers_choose_pro_for_deeper_knowledge')}</p>
                    <button
                      onClick={() => openPaywall('learn')}
                      className="bg-lime-500 text-white font-bold py-2 px-6 rounded-full hover:bg-lime-600 transition-colors flex items-center justify-center gap-2 mx-auto shadow-md"
                    >
                      <StarIcon className="h-4 w-4" />{t('learn.unlock_full_article')}</button>
                  </div>
                </div>
              </div>
            }
          >
            <div className="prose mt-8 max-w-none text-slate-900 leading-relaxed print:mt-4">
              {children}
            </div>
          </LockFeature>
        ) : (
          <div className="prose mt-8 max-w-none text-slate-900 leading-relaxed print:mt-4">
            {children}
          </div>
        )}

        {/* Soft Callout for Free Users on Free content */}
        {!isPro && (
          <div className="mt-12 p-6 bg-gradient-to-r from-slate-50 to-lime-50 rounded-xl border border-lime-100 flex flex-col sm:flex-row items-center justify-between gap-4 no-print">
            <div>
              <h4 className="font-bold text-slate-900">{t('learn.want_to_go_deeper')}</h4>
              <p className="text-sm text-slate-700">{t('learn.pro_unlocks_expertlevel_techniques_and_insights')}</p>
            </div>
            <button
              onClick={() => openPaywall('learn')}
              className="text-sm font-bold text-lime-600 hover:underline whitespace-nowrap"
            >
              Learn about Pro &rarr;
            </button>
          </div>
        )}

        {/* Contextual Shop Suggestion */}
        {suggestion && (
          <div className="mt-12 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-lime-200 bg-lime-50/50 p-6 no-print">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 rounded-full bg-white p-2 shadow-sm text-lime-600">
                <ShoppingBagIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                  {suggestion.title}
                </h3>
                <p className="text-sm text-slate-700 mt-1">{suggestion.description}</p>
              </div>
            </div>
            <a
              href={suggestion.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center gap-2 rounded-lg bg-white border border-lime-200 py-2.5 px-4 text-sm font-semibold text-lime-700 shadow-sm hover:bg-lime-50 transition-colors"
            >{t('learn.check_recommendation')}<ExternalLinkIcon className="h-4 w-4 text-lime-500" />
            </a>
          </div>
        )}

        {showReferencesSection && (
          <div className="mt-12 border-t border-slate-200 pt-8">
            <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
              <BookOpenIcon className="h-6 w-6 text-lime-500" />
              <span>{t('learn.technical_references_5')}</span>
            </h2>
            <p className="mt-4 text-sm text-slate-600 italic">
              The technical references on this page are based on verifiable sources (AVPN, King Arthur Baking, Serious Eats, scientific literature, etc.). No data is fabricated.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechnicalPageLayout;
