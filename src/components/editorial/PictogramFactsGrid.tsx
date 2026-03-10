import type { FactStatItem } from '@/types/models';

export const PictogramFactsGrid = ({ facts }: { facts: FactStatItem[] }) => (
  <div className="grid grid-cols-3 gap-3">{facts.map((fact) => <div className="rounded-lg border p-3 text-center" key={fact.label}><p className="text-xs text-slate-500">{fact.icon ?? 'icon'}</p><p className="font-semibold">{fact.value}</p><p className="text-sm">{fact.label}</p></div>)}</div>
);
