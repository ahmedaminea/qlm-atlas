import { narrativeTemplates } from '@/lib/data/templates';
import type { NarrativeTemplateId } from '@/types/models';

export const scenePlanner = (template: NarrativeTemplateId) => {
  return narrativeTemplates.find((item) => item.id === template)?.defaultScenePlan ?? [];
};
