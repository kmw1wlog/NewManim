'use client';
import { Button } from '@/components/ui/button';
import { useFlowStore } from '@/store/useFlowStore';

export function Toolbar() {
  const runAll = async () => {
    const state = useFlowStore.getState();
    const ocrRes = await fetch('/api/ocr', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({})
    });
    const ocr = await ocrRes.json();
    state.updatePayload('ocr', { text: ocr.text });

    const sbRes = await fetch('/api/storyboard', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: ocr.text })
    });
    const sb = await sbRes.json();
    state.updatePayload('storyboard', { scenes: sb.scenes });

    const mcRes = await fetch('/api/manim-code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ scenes: sb.scenes })
    });
    const mc = await mcRes.json();
    state.updatePayload('manim', { code: mc.code });

    const rRes = await fetch('/api/render', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: mc.code })
    });
    const r = await rRes.json();
    state.updatePayload('render', { videoUrl: r.videoUrl });
    state.setVideo(r.videoUrl);
  };

  return (
    <div className="border-b p-2">
      <Button onClick={runAll}>Run All</Button>
    </div>
  );
}
