import { geoEqualEarth, geoPath, geoGraticule10 } from 'd3-geo';

export const MapChoropleth = ({ highlightLabel = 'VEN' }: { highlightLabel?: string }) => {
  const projection = geoEqualEarth().fitExtent(
    [
      [20, 20],
      [620, 340]
    ],
    { type: 'Sphere' }
  );
  const path = geoPath(projection);

  return (
    <svg viewBox="0 0 640 360" className="h-full w-full rounded-xl border border-slate-300 bg-blue-50">
      <path d={path({ type: 'Sphere' }) ?? ''} fill="#dbeafe" stroke="#1e293b" strokeWidth={1.2} />
      <path d={path(geoGraticule10()) ?? ''} fill="none" stroke="#93c5fd" strokeWidth={0.4} />
      <text x="40" y="50" className="fill-slate-900 text-[18px] font-semibold">
        Highlight: {highlightLabel}
      </text>
    </svg>
  );
};
