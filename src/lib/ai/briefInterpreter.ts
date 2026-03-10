import type { AiDraftRequest } from '@/types/models';

export const briefInterpreter = (input: AiDraftRequest) => {
  const normalized = input.prompt.toLowerCase();
  return {
    keywords: normalized.split(/\s+/).filter(Boolean),
    locale: input.locale,
    ratio: input.ratio
  };
};
