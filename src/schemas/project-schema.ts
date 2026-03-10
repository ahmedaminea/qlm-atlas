import { z } from 'zod';

export const paletteSchema = z.object({
  id: z.string(),
  label: z.string(),
  tokens: z.record(z.string())
});

export const stylePackageSchema = z.object({
  id: z.string(),
  label: z.string(),
  defaultPalette: z.string(),
  defaultIconSet: z.string(),
  defaultTypographyPack: z.string(),
  mapStyle: z.object({
    sea: z.literal('flat'),
    land: z.literal('flat'),
    borders: z.literal('sharp'),
    coastlineWidth: z.number(),
    internalBorderWidth: z.number(),
    highlightMode: z.enum(['fill', 'stroke']),
    allowTexture: z.boolean()
  }),
  motion: z.object({
    zoomStyle: z.literal('smooth'),
    labelFadeFrames: z.number(),
    statCardAnim: z.enum(['fade-up', 'fade']),
    flowAnim: z.literal('draw')
  })
});

export const sceneSchema = z.object({
  id: z.string(),
  type: z.enum([
    'intro_title',
    'world_highlight',
    'continent_highlight',
    'country_focus',
    'region_focus',
    'city_marker',
    'stats_overlay',
    'comparison_simple',
    'flow_arrows',
    'outro_sources'
  ]),
  durationInFrames: z.number().positive(),
  props: z.record(z.unknown())
});

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  brand: z.enum(['qlm-tn', 'qlm-afrique', 'custom']),
  locale: z.enum(['fr', 'ar', 'en']),
  ratio: z.enum(['16:9', '9:16']),
  targetDurationSec: z.number(),
  template: z.enum([
    'country_profile',
    'geopolitical_issue',
    'economic_territorial_explainer',
    'trade_flow_explainer'
  ]),
  styleId: z.string(),
  paletteId: z.string(),
  iconSetId: z.string(),
  typographyPackId: z.string(),
  editorialAngle: z.string(),
  geography: z.record(z.unknown()),
  facts: z.array(
    z.object({
      label: z.string(),
      value: z.string(),
      year: z.number().optional(),
      icon: z.string().optional()
    })
  ),
  sources: z.array(
    z.object({
      label: z.string(),
      year: z.number().optional(),
      url: z.string().optional()
    })
  ),
  scenes: z.array(sceneSchema)
});

export type ProjectSchema = z.infer<typeof projectSchema>;
