import { describe, expect, it, vi } from 'vitest';
import { calculateDoughUniversal } from '@/logic/doughMath';
import { DEFAULT_CONFIG } from '@/constants';
import { AmbientTemperature } from '@/types';

describe('calculateDoughUniversal target_time mode', () => {
  it('increases yeast when target time is closer', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-04-08T10:00:00.000Z'));

    const farTargetConfig = {
      ...DEFAULT_CONFIG,
      targetTime: '2026-04-09T10:00:00.000Z',
      ambientTemperature: AmbientTemperature.MILD,
    };

    const nearTargetConfig = {
      ...DEFAULT_CONFIG,
      targetTime: '2026-04-08T14:00:00.000Z',
      ambientTemperature: AmbientTemperature.MILD,
    };

    const farResult = calculateDoughUniversal(farTargetConfig, 'wizard', 'target_time');
    const nearResult = calculateDoughUniversal(nearTargetConfig, 'wizard', 'target_time');

    expect(nearResult.totalYeast).toBeGreaterThan(farResult.totalYeast);

    vi.useRealTimers();
  });

  it('uses colder ambient as higher yeast demand for same target', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-04-08T10:00:00.000Z'));

    const base = {
      ...DEFAULT_CONFIG,
      targetTime: '2026-04-08T18:00:00.000Z',
    };

    const cold = calculateDoughUniversal(
      { ...base, ambientTemperature: AmbientTemperature.COLD },
      'basic',
      'target_time'
    );
    const hot = calculateDoughUniversal(
      { ...base, ambientTemperature: AmbientTemperature.HOT },
      'basic',
      'target_time'
    );

    expect(cold.totalYeast).toBeGreaterThan(hot.totalYeast);

    vi.useRealTimers();
  });
});

