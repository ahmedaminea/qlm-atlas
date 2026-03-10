export const CityMarkerLayer = ({ city }: { city: string }) => (
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600 px-2 py-1 text-xs text-white">{city}</div>
);
