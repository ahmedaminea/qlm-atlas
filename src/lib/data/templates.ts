import type { NarrativeTemplateId, SceneType } from '@/types/models';

export const narrativeTemplates: Array<{
  id: NarrativeTemplateId;
  label: string;
  defaultScenePlan: SceneType[];
}> = [
  {
    id: 'country_profile',
    label: 'Country profile',
    defaultScenePlan: ['intro_title', 'world_highlight', 'country_focus', 'stats_overlay', 'outro_sources']
  },
  {
    id: 'geopolitical_issue',
    label: 'Geopolitical issue',
    defaultScenePlan: ['intro_title', 'continent_highlight', 'region_focus', 'comparison_simple', 'outro_sources']
  },
  {
    id: 'economic_territorial_explainer',
    label: 'Economic / territorial explainer',
    defaultScenePlan: ['intro_title', 'continent_highlight', 'country_focus', 'stats_overlay', 'outro_sources']
  },
  {
    id: 'trade_flow_explainer',
    label: 'Trade flow explainer',
    defaultScenePlan: ['intro_title', 'continent_highlight', 'flow_arrows', 'stats_overlay', 'outro_sources']
  }
];
