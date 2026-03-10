import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({
    status: 'queued',
    message: 'Use `npm run remotion:render` for server-side MP4 generation in this MVP.'
  });
}
