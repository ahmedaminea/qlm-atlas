import { NextResponse } from 'next/server';
import { listFixtureProjects } from '@/lib/data/fixtures';

export async function GET() {
  return NextResponse.json({ projects: listFixtureProjects() });
}
