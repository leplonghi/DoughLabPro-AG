import React, { useMemo, ReactNode } from 'react';
import { Page, Batch, Levain } from '../../types';
import MyLabLayout from './MyLabLayout';
import { useUser } from '../../contexts/UserProvider';
import { useTranslation } from '../../i18n';
import { ClockIcon, BatchesIcon, BeakerIcon, PlusCircleIcon } from '@/components/ui/Icons';
import { LockFeature } from '@/components/auth/LockFeature';

interface TimelineEvent {
  id: string;
  type: 'BATCH' | 'LEVAIN_CREATED' | 'LEVAIN_FED';
  title: string;
  description: string;
  date: string;
  link: {
    page: Page;
    params?: string;
  };
  icon: ReactNode;
}

const TimelinePage: React.FC<{ onNavigate: (page: Page, params?: string) => void }> = ({ onNavigate }) => {
  const { batches, levains } = useUser();
  const { t } = useTranslation();

  const timelineEvents = useMemo(() => {
    const events: TimelineEvent[] = [];

    // Map batches to events
    batches.forEach(batch => {
      events.push({
        id: `batch-${batch.id}`,
        type: 'BATCH',
        title: batch.name,
        description: `${t(`form.${batch.doughConfig.recipeStyle.toLowerCase()}`, { defaultValue: batch.doughConfig.recipeStyle })} Recipe, ${batch.doughConfig.hydration}% hydration.`,
        date: batch.createdAt,
        link: { page: 'batch', params: batch.id },
        icon: <BatchesIcon className="h-5 w-5 text-white" />,
      });
    });

    // Map levains (creation and feedings)
    levains.forEach(levain => {
      events.push({
        id: `levain-created-${levain.id}`,
        type: 'LEVAIN_CREATED',
        title: `Levain created: ${levain.name}`,
        description: 'A new starter was added to your lab.',
        date: levain.createdAt,
        link: { page: 'mylab/levain/detail', params: levain.id },
        icon: <BeakerIcon className="h-5 w-5 text-white" />,
      });

      levain.feedingHistory.forEach(feeding => {
        events.push({
          id: `levain-fed-${feeding.id}`,
          type: 'LEVAIN_FED',
          title: `Levain fed: ${levain.name}`,
          description: `Fed with ${feeding.flourAmount}g flour and ${feeding.waterAmount}g water.`,
          date: feeding.date,
          link: { page: 'mylab/levain/detail', params: levain.id },
          icon: <PlusCircleIcon className="h-5 w-5 text-white" />,
        });
      });
    });

    // Sort all events by date, most recent first
    return events.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  }, [batches, levains, t]);

  const EventIcon: React.FC<{ type: TimelineEvent['type'], icon: ReactNode }> = ({ type, icon }) => {
    const bgColors = {
      'BATCH': 'bg-blue-500',
      'LEVAIN_CREATED': 'bg-lime-500',
      'LEVAIN_FED': 'bg-amber-500',
    };
    return (
      <span className={`absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full ${bgColors[type]} ring-8 ring-white `}>
        {icon}
      </span>
    );
  };

  return (
    <MyLabLayout activePage="mylab/timeline" onNavigate={onNavigate}>
      <div className="animate-fade-in">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 ">{t('mylab.timeline')}</h1>
          <p className="mt-2 text-slate-600 ">
            Track your baking evolution.
          </p>
        </div>

        <LockFeature
          featureKey="mylab.timeline"
          customMessage="Pro users track everything — hydration, fermentation, bake outcomes. See your entire baking journey in one place."
          className="min-h-[18.75rem] flex items-center justify-center rounded-2xl overflow-hidden"
        >
          {timelineEvents.length === 0 ? (
            <div className="flex h-64 items-center justify-center rounded-2xl border-2 border-dashed border-slate-300  bg-slate-50  p-6 text-center w-full">
              <p className="text-slate-600 ">
                Your journey is just beginning. Your next bakes will appear here.
              </p>
            </div>
          ) : (
            <ol className="relative border-l border-slate-200  ml-3">
              {timelineEvents.slice(0, 5).map(event => (
                <li key={event.id} className="mb-10 ml-6">
                  <EventIcon type={event.type} icon={event.icon} />
                  <div className="text-left w-full p-6 bg-white  border border-slate-200  rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer" onClick={() => onNavigate(event.link.page, event.link.params)}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-slate-900 ">{event.title}</h3>
                      <time className="text-xs font-medium text-slate-500 ">{new Date(event.date).toLocaleDateString()}</time>
                    </div>
                    <p className="text-sm text-slate-600 ">{event.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          )}
        </LockFeature>
      </div>
    </MyLabLayout>
  );
};

export default TimelinePage;
