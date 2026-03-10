export const BarChartPanel = ({ title }: { title: string }) => (
  <div className="rounded-xl border border-slate-300 bg-white p-4">
    <h3 className="mb-3 text-sm font-medium text-slate-600">{title}</h3>
    <div className="space-y-2">
      {[65, 40, 82, 31].map((v, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <div className="h-2 rounded bg-blue-600" style={{ width: `${v}%` }} />
        </div>
      ))}
    </div>
  </div>
);
