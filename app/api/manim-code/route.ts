import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { z } from 'zod';

const schema = z.object({ scenes: z.array(z.string()) });

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { scenes } = schema.parse(body);

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  await Promise.resolve(openai);

  return NextResponse.json({ code: `# Manim code for ${scenes.join(', ')}` });
}
