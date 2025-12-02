
import { Levain, LevainStatus, LevainFeedingLog } from '../types';
import { hoursBetween } from '../helpers';

export type LevainEmotion = 'happy' | 'hungry' | 'sad' | 'sleeping' | 'dead';

interface LevainStats {
  status: LevainStatus;
  emotion: LevainEmotion;
  healthScore: number; // 0-100
  level: number;
  nextFeedingDue: Date | null;
  daysSinceLastFed: number;
}

/**
 * Calculates the visual and gamified stats for a Levain
 */
export const calculateLevainStats = (levain: Levain): LevainStats => {
  const now = new Date();
  const lastFed = new Date(levain.lastFeeding);
  const hoursSince = Math.abs(now.getTime() - lastFed.getTime()) / 36e5;
  const daysSince = Math.floor(hoursSince / 24);
  const totalFeedings = levain.feedingHistory ? levain.feedingHistory.length : 0;

  // 1. Calculate Level (Simple progression based on consistency)
  // Level 1 starts at 0. Every 10 feedings = +1 Level. Cap at 50.
  const level = Math.min(50, Math.floor(totalFeedings / 10) + 1);

  // 2. Calculate Health Score (0-100)
  // Based on recency of feeding relative to the ideal interval
  const idealInterval = levain.idealFeedingIntervalHours || 24;
  let healthScore = 100;

  if (levain.status === 'arquivado') {
    healthScore = 0;
  } else if (levain.status === 'descanso') {
    // In fridge, health degrades slower
    if (hoursSince > 168) { // > 1 week
      const overdueHours = hoursSince - 168;
      healthScore = Math.max(0, 100 - (overdueHours / 24) * 5); // Lose 5% per day overdue
    }
  } else {
    // Active at room temp
    if (hoursSince > idealInterval) {
      const overdueHours = hoursSince - idealInterval;
      // Lose points aggressively if active and starving
      healthScore = Math.max(0, 100 - (overdueHours / 2) * 5);
    }
  }

  // 3. Determine Status & Emotion
  let status: LevainStatus = levain.status;
  let emotion: LevainEmotion = 'happy';

  if (status === 'arquivado') {
    emotion = 'dead';
  } else if (status === 'descanso') {
    emotion = 'sleeping';
  } else {
    // Auto-detect status based on time if currently marked 'active'
    if (hoursSince <= idealInterval * 1.2) {
      status = 'ativo';
      emotion = 'happy';
    } else if (hoursSince <= idealInterval * 2) {
      status = 'precisa_atencao';
      emotion = 'hungry';
    } else {
      status = 'precisa_atencao';
      emotion = 'sad';
    }
  }

  // Next feeding calculation
  let nextFeedingDue = null;
  if (status !== 'arquivado') {
    const interval = status === 'descanso' ? 168 : idealInterval; // 1 week if resting, else ideal
    nextFeedingDue = new Date(lastFed.getTime() + interval * 36e5);
  }

  return {
    status,
    emotion,
    healthScore,
    level,
    nextFeedingDue,
    daysSinceLastFed: daysSince
  };
};

export const getEmotionColor = (emotion: LevainEmotion): string => {
  switch (emotion) {
    case 'happy': return 'text-dlp-success bg-dlp-success/10';
    case 'hungry': return 'text-dlp-warning bg-dlp-warning/10';
    case 'sad': return 'text-dlp-error bg-dlp-error/10';
    case 'sleeping': return 'text-blue-500 bg-blue-50';
    case 'dead': return 'text-dlp-text-muted bg-dlp-bg-muted';
  }
};
