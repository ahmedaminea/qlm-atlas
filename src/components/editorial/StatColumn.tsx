import type { FactStatItem } from '@/types/models';
import { MetricCard } from './MetricCard';

export const StatColumn = ({ stats }: { stats: FactStatItem[] }) => (
  <div className="grid gap-3">{stats.map((item) => <MetricCard key={item.label} label={item.label} value={item.value} />)}</div>
);
