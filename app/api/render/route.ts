import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({ code: z.string() });

export async function POST(req: NextRequest) {
  const body = await req.json();
  schema.parse(body);

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return NextResponse.json({ videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' });
}
