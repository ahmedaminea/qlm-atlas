import type { FlowDefinition } from '@/types/models';

export const FlowLinesLayer = ({ flows }: { flows: FlowDefinition[] }) => (
  <svg viewBox="0 0 640 360" className="absolute inset-0 h-full w-full">
    {flows.map((flow, idx) => (
      <path
        key={`${flow.from}-${flow.to}`}
        d={`M ${120 + idx * 35} ${280 - idx * 12} C 300 ${160 - idx * 8}, 420 ${200 + idx * 2}, 540 90`}
        fill="none"
        stroke="#0f172a"
        strokeWidth={Math.max(1, flow.value / 80)}
        opacity={0.8}
      />
    ))}
  </svg>
);
