import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { z } from 'zod';

const schema = z.object({ image: z.string().optional() });

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  schema.parse(body);

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  // Placeholder using openai
  await Promise.resolve(openai); // avoid unused

  return NextResponse.json({ text: 'Recognized text' });
}
