import type { NarrativeTemplateId } from '@/types/models';

export const templateSelector = (keywords: string[]): NarrativeTemplateId => {
  if (keywords.some((k) => ['trade', 'flux', 'échanges'].includes(k))) return 'trade_flow_explainer';
  if (keywords.some((k) => ['compar', 'séries', 'bar'].includes(k))) return 'geopolitical_issue';
  return 'country_profile';
};
