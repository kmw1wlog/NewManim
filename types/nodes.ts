export type NodeKind = 'ocr' | 'storyboard' | 'manim' | 'render';

export interface NodePayloads {
  ocr: { text: string };
  storyboard: { scenes: string[] };
  manim: { code: string };
  render: { videoUrl?: string };
}

export interface FlowNodeData<K extends NodeKind = NodeKind> {
  id: string;
  kind: K;
  payload: NodePayloads[K];
}
