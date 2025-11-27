import { DoughConfig } from '@/types';

export const customPresets = [];
export const listCustomPresets = (): { name: string }[] => [];
export const saveCustomPreset = (_name: string, _config: DoughConfig): void => { };
export const loadCustomPreset = (_name: string): DoughConfig | null => null;
export const deleteCustomPreset = (_name: string): void => { };
