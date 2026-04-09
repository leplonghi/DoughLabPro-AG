import React, { useEffect, useState } from 'react';
import { useNotificationAnalytics, NotificationEngagementMetrics, NotificationTypeMetrics } from '@/services/notificationAnalytics';
import { useUser } from '@/contexts/UserProvider';
import { BarChart3, TrendingUp, Bell, MousePointer, X, Clock, Zap } from 'lucide-react';
import AppSurface from '@/components/ui/AppSurface';

type TimeRange = 7 | 30 | 90;
type PerformancePoint = { date: string; sent: number; clicked: number; ctr: number };

const MetricCard: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string | number;
  accentClass: string;
}> = ({ icon, label, value, accentClass }) => (
  <AppSurface surface="glass" tone="neutral" density="compact" className="rounded-[1.15rem]">
    <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${accentClass}`}>
      {icon}
    </span>
    <div className="mt-4 text-[1.8rem] font-black leading-none tracking-tight text-slate-950">{value}</div>
    <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-dlp-text-muted">{label}</div>
  </AppSurface>
);

const StatCard: React.FC<{
  label: string;
  value: string | number;
  icon: React.ReactNode;
}> = ({ label, value, icon }) => (
  <AppSurface surface="glass" tone="neutral" density="compact" className="rounded-[1.1rem]">
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/82 shadow-sm">{icon}</span>
      <div className="min-w-0">
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-dlp-text-muted">{label}</div>
        <div className="mt-1 text-xl font-black tracking-tight text-slate-950">{value}</div>
      </div>
    </div>
  </AppSurface>
);

export const NotificationAnalyticsDashboard: React.FC = () => {
  const { user } = useUser();
  const analytics = useNotificationAnalytics(user?.uid || '');

  const [timeRange, setTimeRange] = useState<TimeRange>(30);
  const [metrics, setMetrics] = useState<NotificationEngagementMetrics | null>(null);
  const [typeMetrics, setTypeMetrics] = useState<NotificationTypeMetrics[]>([]);
  const [performance, setPerformance] = useState<PerformancePoint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAnalytics = async () => {
      setLoading(true);
      try {
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - timeRange);

        const [metricsData, typeData, perfData] = await Promise.all([
          analytics.getEngagementMetrics(startDate, endDate),
          analytics.getMetricsByType(startDate, endDate),
          analytics.getPerformanceOverTime(timeRange),
        ]);

        setMetrics(metricsData);
        setTypeMetrics(typeData);
        setPerformance(perfData);
      } catch (error) {
        console.error('Failed to load analytics:', error);
      } finally {
        setLoading(false);
      }
    };

    void loadAnalytics();
  }, [analytics, timeRange]);

  if (loading) {
    return (
      <AppSurface surface="glass" tone="neutral" density="compact" className="flex h-44 items-center justify-center rounded-[1.2rem]">
        <div className="flex items-center gap-3 text-sm font-semibold text-dlp-text-secondary">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-emerald-200 border-t-emerald-600" />
          Loading analytics
        </div>
      </AppSurface>
    );
  }

  if (!metrics) {
    return (
      <AppSurface surface="soft" tone="neutral" density="compact" className="rounded-[1.2rem] py-10 text-center">
        <Bell className="mx-auto mb-3 h-10 w-10 text-emerald-300" />
        <p className="text-sm font-semibold text-dlp-text-primary">No analytics data available yet</p>
        <p className="mt-1 text-sm text-dlp-text-secondary">As your notifications fire, this area will show engagement and timing trends.</p>
      </AppSurface>
    );
  }

  const maxSent = Math.max(...performance.map((point) => point.sent), 0);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-dlp-text-muted">Analytics</p>
          <h2 className="mt-1 text-lg font-black tracking-tight text-slate-950">Notification performance</h2>
          <p className="mt-1 text-sm text-dlp-text-secondary">See delivery, clicks, and which reminders actually bring bakers back.</p>
        </div>
        <div className="inline-flex rounded-full border border-emerald-100 bg-white/82 p-1 shadow-sm">
          {[7, 30, 90].map((days) => (
            <button
              key={days}
              onClick={() => setTimeRange(days as TimeRange)}
              className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
                timeRange === days
                  ? 'bg-emerald-600 text-white shadow-[0_12px_24px_-18px_rgba(47,139,73,0.65)]'
                  : 'text-dlp-text-secondary hover:bg-emerald-50 hover:text-dlp-text-primary'
              }`}
            >
              {days}d
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        <MetricCard icon={<Bell className="h-5 w-5 text-emerald-700" />} label="Total sent" value={metrics.totalSent} accentClass="bg-emerald-50 text-emerald-700" />
        <MetricCard icon={<MousePointer className="h-5 w-5 text-lime-700" />} label="Clicked" value={metrics.totalClicked} accentClass="bg-lime-50 text-lime-700" />
        <MetricCard icon={<TrendingUp className="h-5 w-5 text-sky-700" />} label="CTR" value={`${metrics.clickThroughRate.toFixed(1)}%`} accentClass="bg-sky-50 text-sky-700" />
        <MetricCard icon={<Zap className="h-5 w-5 text-amber-700" />} label="Engagement" value={`${metrics.engagementRate.toFixed(1)}%`} accentClass="bg-amber-50 text-amber-700" />
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <StatCard label="Dismissed" value={metrics.totalDismissed} icon={<X className="h-4.5 w-4.5 text-rose-600" />} />
        <StatCard label="Snoozed" value={metrics.totalSnoozed} icon={<Clock className="h-4.5 w-4.5 text-amber-600" />} />
        <StatCard
          label="Avg time to click"
          value={metrics.averageTimeToClick ? `${Math.round(metrics.averageTimeToClick)}s` : 'N/A'}
          icon={<Clock className="h-4.5 w-4.5 text-sky-600" />}
        />
      </div>

      {metrics.popularActions.length > 0 && (
        <AppSurface surface="glass" tone="neutral" density="compact" className="rounded-[1.2rem]">
          <h3 className="text-base font-black tracking-tight text-slate-950">Popular actions</h3>
          <div className="mt-4 space-y-3">
            {metrics.popularActions.map((action, index) => {
              const width = metrics.popularActions[0] ? (action.count / metrics.popularActions[0].count) * 100 : 0;
              return (
                <div key={`${action.action}-${index}`} className="grid grid-cols-[minmax(0,1fr)_72px] items-center gap-3">
                  <div>
                    <div className="flex items-center justify-between gap-3 text-sm font-semibold text-slate-950">
                      <span className="capitalize">{action.action}</span>
                      <span className="text-dlp-text-secondary">{action.count}</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-emerald-50">
                      <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-lime-500" style={{ width: `${width}%` }} />
                    </div>
                  </div>
                  <div className="text-right text-xs font-semibold uppercase tracking-[0.14em] text-dlp-text-muted">actions</div>
                </div>
              );
            })}
          </div>
        </AppSurface>
      )}

      {typeMetrics.length > 0 && (
        <AppSurface surface="glass" tone="neutral" density="compact" className="rounded-[1.2rem]">
          <h3 className="text-base font-black tracking-tight text-slate-950">Performance by type</h3>
          <div className="mt-4 space-y-3">
            {typeMetrics.slice(0, 8).map((type) => (
              <div key={type.type} className="rounded-[1rem] border border-emerald-100/80 bg-white/80 px-3 py-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold capitalize text-slate-950">{type.type.replace(/_/g, ' ')}</p>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                      type.ctr > 50
                        ? 'border border-emerald-200 bg-emerald-50 text-emerald-700'
                        : type.ctr > 25
                          ? 'border border-amber-200 bg-amber-50 text-amber-700'
                          : 'border border-rose-200 bg-rose-50 text-rose-700'
                    }`}
                  >
                    {type.ctr.toFixed(1)}% CTR
                  </span>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-xl bg-emerald-50/70 px-2 py-2">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-dlp-text-muted">Sent</div>
                    <div className="mt-1 text-base font-black text-slate-950">{type.sent}</div>
                  </div>
                  <div className="rounded-xl bg-lime-50/70 px-2 py-2">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-dlp-text-muted">Clicked</div>
                    <div className="mt-1 text-base font-black text-slate-950">{type.clicked}</div>
                  </div>
                  <div className="rounded-xl bg-slate-50 px-2 py-2">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-dlp-text-muted">Dismissed</div>
                    <div className="mt-1 text-base font-black text-slate-950">{type.dismissed}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AppSurface>
      )}

      {performance.length > 0 && (
        <AppSurface surface="glass" tone="neutral" density="compact" className="rounded-[1.2rem]">
          <h3 className="text-base font-black tracking-tight text-slate-950">Performance over time</h3>
          <div className="mt-4">
            <div className="flex h-44 items-end gap-2 rounded-[1rem] border border-emerald-100/80 bg-white/72 p-3">
              {performance.map((point) => {
                const barHeight = maxSent > 0 ? Math.max((point.sent / maxSent) * 100, point.sent > 0 ? 10 : 0) : 0;
                return (
                  <div key={point.date} className="flex min-w-0 flex-1 flex-col items-center gap-2">
                    <div className="flex h-full w-full items-end">
                      <div
                        className="w-full rounded-t-[10px] bg-gradient-to-t from-emerald-600 to-lime-400"
                        style={{ height: `${barHeight}%` }}
                        title={`Sent: ${point.sent}, Clicked: ${point.clicked}, CTR: ${point.ctr.toFixed(1)}%`}
                      />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-dlp-text-muted">
                      {new Date(point.date).getDate()}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </AppSurface>
      )}
    </div>
  );
};
