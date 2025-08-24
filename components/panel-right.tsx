'use client';
import { useFlowStore } from '@/store/useFlowStore';
import { Textarea } from '@/components/ui/textarea';

export function PanelRight() {
  const { selected, nodes, updatePayload } = useFlowStore();
  const node = nodes.find((n) => n.id === selected);
  if (!node) return <aside className="w-64 border-l" />;

  const payload: any = node.data.payload;
  const value =
    node.data.kind === 'ocr'
      ? payload.text
      : node.data.kind === 'storyboard'
      ? payload.scenes.join('\n')
      : node.data.kind === 'manim'
      ? payload.code
      : '';

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const v = e.target.value;
    if (node.data.kind === 'ocr') updatePayload(node.id, { text: v });
    if (node.data.kind === 'storyboard') updatePayload(node.id, { scenes: v.split('\n') });
    if (node.data.kind === 'manim') updatePayload(node.id, { code: v });
  };

  return (
    <aside className="w-64 border-l p-2">
      <Textarea className="h-full" value={value} onChange={handleChange} />
    </aside>
  );
}
