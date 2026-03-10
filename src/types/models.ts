export type Brand = 'qlm-tn' | 'qlm-afrique' | 'custom';
export type Locale = 'fr' | 'ar' | 'en';
export type Ratio = '16:9' | '9:16';
export type NarrativeTemplateId =
  | 'country_profile'
  | 'geopolitical_issue'
  | 'economic_territorial_explainer'
  | 'trade_flow_explainer';

export type SceneType =
  | 'intro_title'
  | 'world_highlight'
  | 'continent_highlight'
  | 'country_focus'
  | 'region_focus'
  | 'city_marker'
  | 'stats_overlay'
  | 'comparison_simple'
  | 'flow_arrows'
  | 'outro_sources';

export interface Palette {
  id: string;
  label: string;
  tokens: Record<string, string>;
}

export interface TypographyPack {
  id: string;
  label: string;
  families: {
    latin: string;
    arabic: string;
  };
}

export interface IconSet {
  id: string;
  label: string;
  mode: 'qlm' | 'outline' | 'filled';
  icons: string[];
}

export interface StylePackage {
  id: string;
  label: string;
  defaultPalette: string;
  defaultIconSet: string;
  defaultTypographyPack: string;
  mapStyle: {
    sea: 'flat';
    land: 'flat';
    borders: 'sharp';
    coastlineWidth: number;
    internalBorderWidth: number;
    highlightMode: 'fill' | 'stroke';
    allowTexture: boolean;
  };
  motion: {
    zoomStyle: 'smooth';
    labelFadeFrames: number;
    statCardAnim: 'fade-up' | 'fade';
    flowAnim: 'draw';
  };
}

export interface FactStatItem {
  label: string;
  value: string;
  year?: number;
  icon?: string;
}

export interface MetricDefinition {
  id: string;
  label: string;
  type: 'bar_chart';
}

export interface FlowDefinition {
  from: string;
  to: string;
  value: number;
}

export interface Source {
  label: string;
  year?: number;
  url?: string;
}

export interface Scene {
  id: string;
  type: SceneType;
  durationInFrames: number;
  props: Record<string, unknown>;
}

export interface EditorialScript {
  meta: {
    title: string;
    template: NarrativeTemplateId;
    ratio: Ratio;
    locale: Locale;
  };
  editorial: {
    angle: string;
    keyMessage: string;
    sources: string[];
  };
  scenes: Array<{
    type: SceneType;
    screenText?: string;
    voiceover?: string;
    map?: Record<string, unknown>;
    stats?: FactStatItem[];
  }>;
}

export interface Project {
  id: string;
  title: string;
  brand: Brand;
  locale: Locale;
  ratio: Ratio;
  targetDurationSec: number;
  template: NarrativeTemplateId;
  styleId: string;
  paletteId: string;
  iconSetId: string;
  typographyPackId: string;
  editorialAngle: string;
  geography: Record<string, unknown>;
  facts: FactStatItem[];
  metrics?: MetricDefinition[];
  flows?: FlowDefinition[];
  sources: Source[];
  scenes: Scene[];
  script: EditorialScript;
}

export interface AiDraftRequest {
  prompt: string;
  locale: Locale;
  ratio: Ratio;
}
