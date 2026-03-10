import fs from 'node:fs';
import path from 'node:path';
import type { Palette, StylePackage } from '@/types/models';

const stylesRoot = path.join(process.cwd(), 'styles');

export const listStylePackages = (): StylePackage[] => {
  const folders = fs.readdirSync(stylesRoot);
  return folders.map((id) => {
    const stylePath = path.join(stylesRoot, id, 'style.json');
    return JSON.parse(fs.readFileSync(stylePath, 'utf-8')) as StylePackage;
  });
};

export const listPalettes = (styleId: string): Palette[] => {
  const paletteDir = path.join(stylesRoot, styleId, 'palettes');
  return fs.readdirSync(paletteDir).map((file) => {
    const full = path.join(paletteDir, file);
    return JSON.parse(fs.readFileSync(full, 'utf-8')) as Palette;
  });
};
