import { Node, Edge } from 'reactflow';
import { FlowNodeData } from '@/types/nodes';

export const initialNodes: Node<FlowNodeData>[] = [
  {
    id: 'ocr',
    type: 'default',
    position: { x: 0, y: 0 },
    data: { id: 'ocr', kind: 'ocr', payload: { text: '' } }
  },
  {
    id: 'storyboard',
    type: 'default',
    position: { x: 0, y: 150 },
    data: { id: 'storyboard', kind: 'storyboard', payload: { scenes: [] } }
  },
  {
    id: 'manim',
    type: 'default',
    position: { x: 0, y: 300 },
    data: { id: 'manim', kind: 'manim', payload: { code: '' } }
  },
  {
    id: 'render',
    type: 'default',
    position: { x: 300, y: 150 },
    style: { width: 300, height: 200 },
    data: { id: 'render', kind: 'render', payload: { videoUrl: '' } }
  }
];

export const initialEdges: Edge[] = [
  { id: 'e1', source: 'ocr', target: 'storyboard' },
  { id: 'e2', source: 'storyboard', target: 'manim' },
  { id: 'e3', source: 'manim', target: 'render' }
];
