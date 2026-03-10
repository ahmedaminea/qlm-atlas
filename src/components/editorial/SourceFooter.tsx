import type { Source } from '@/types/models';

export const SourceFooter = ({ sources }: { sources: Source[] }) => (
  <div className="absolute bottom-0 w-full border-t border-slate-300 bg-white/90 px-6 py-3 text-xs text-slate-600">
    Sources: {sources.map((s) => s.label).join(' · ')}
  </div>
);
