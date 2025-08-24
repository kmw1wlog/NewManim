import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { z } from 'zod';

const schema = z.object({ text: z.string() });

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { text } = schema.parse(body);

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  await Promise.resolve(openai);

  return NextResponse.json({ scenes: [`Scene from ${text}`] });
}
