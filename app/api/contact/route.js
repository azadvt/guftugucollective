import { NextResponse } from 'next/server';

export async function POST(request) {
  const data = await request.json();
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK;

  if (!webhookUrl) {
    return NextResponse.json({ error: 'Webhook not configured' }, { status: 500 });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error('Webhook failed');
    return NextResponse.json({ status: 'success' });
  } catch {
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 });
  }
}
