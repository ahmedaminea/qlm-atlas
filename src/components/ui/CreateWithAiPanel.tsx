'use client';

import { useState } from 'react';
import { briefInterpreter } from '@/lib/ai/briefInterpreter';
import { templateSelector } from '@/lib/ai/templateSelector';
import { scenePlanner } from '@/lib/ai/scenePlanner';
import { visualStyleSuggester } from '@/lib/ai/visualStyleSuggester';
import { labelWriter } from '@/lib/ai/labelWriter';

export const CreateWithAiPanel = () => {
  const [prompt, setPrompt] = useState('Comparer les échanges commerciaux entre la Chine et ses voisins.');
  const [draft, setDraft] = useState<Record<string, unknown> | null>(null);

  return (
    <div className="rounded-2xl border border-slate-200 p-4">
      <h3 className="text-lg font-semibold">Create with AI (structured draft)</h3>
      <textarea className="mt-2 w-full rounded border p-2" rows={3} value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      <button
        className="mt-2 rounded bg-slate-900 px-4 py-2 text-white"
        onClick={() => {
          const interpreted = briefInterpreter({ prompt, locale: 'fr', ratio: '16:9' });
          const template = templateSelector(interpreted.keywords);
          const style = visualStyleSuggester(interpreted.keywords);
          setDraft({
            title: labelWriter(prompt).title,
            template,
            style,
            scenes: scenePlanner(template),
            keyMessage: labelWriter(prompt).keyMessage
          });
        }}
      >
        Generate draft JSON
      </button>
      {draft ? <pre className="mt-3 overflow-auto rounded bg-slate-950 p-3 text-xs text-white">{JSON.stringify(draft, null, 2)}</pre> : null}
    </div>
  );
};
