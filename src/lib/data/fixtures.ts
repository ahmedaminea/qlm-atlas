import fs from 'node:fs';
import path from 'node:path';
import type { Project } from '@/types/models';

const fixtureRoot = path.join(process.cwd(), 'fixtures');

export const listFixtureProjects = (): Project[] => {
  return fs.readdirSync(fixtureRoot).map((file) => {
    const raw = fs.readFileSync(path.join(fixtureRoot, file), 'utf-8');
    return JSON.parse(raw) as Project;
  });
};
