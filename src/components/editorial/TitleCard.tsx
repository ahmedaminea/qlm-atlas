import type { Ratio } from '@/types/models';

export const TitleCard = ({ title, subtitle, ratio }: { title: string; subtitle?: string; ratio: Ratio }) => (
  <div className="flex h-full w-full flex-col justify-center bg-slate-950 p-10 text-white">
    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-slate-300">QLM Atlas Studio</p>
    <h1 className={`font-semibold ${ratio === '9:16' ? 'text-5xl' : 'text-6xl'}`}>{title}</h1>
    {subtitle ? <p className="mt-4 max-w-3xl text-xl text-slate-200">{subtitle}</p> : null}
  </div>
);
