export const visualStyleSuggester = (keywords: string[]) => {
  if (keywords.includes('afrique')) return { styleId: 'qlm-afrique-editorial', paletteId: 'culture' };
  if (keywords.includes('trade')) return { styleId: 'neutral-documentary', paletteId: 'trade' };
  return { styleId: 'qlm-tn-editorial', paletteId: 'economy' };
};
