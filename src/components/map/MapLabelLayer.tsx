export const MapLabelLayer = ({ labels }: { labels: string[] }) => (
  <div className="absolute left-4 top-4 rounded bg-white/90 px-3 py-2 text-sm text-slate-700">{labels.join(' · ')}</div>
);
