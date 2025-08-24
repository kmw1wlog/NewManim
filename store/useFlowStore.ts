import { create } from 'zustand';
import { Node, Edge } from 'reactflow';
import { NodeKind, FlowNodeData } from '@/types/nodes';

interface FlowState {
  nodes: Node<FlowNodeData<NodeKind>>[];
  edges: Edge[];
  selected?: string;
  videoUrl?: string;
  setNodes: (nodes: Node<FlowNodeData<NodeKind>>[]) => void;
  setEdges: (edges: Edge[]) => void;
  select: (id?: string) => void;
  updatePayload: (id: string, payload: any) => void;
  setVideo: (url: string) => void;
}

export const useFlowStore = create<FlowState>((set) => ({
  nodes: [],
  edges: [],
  selected: undefined,
  videoUrl: undefined,
  setNodes: (nodes) => set({ nodes }),
  setEdges: (edges) => set({ edges }),
  select: (id) => set({ selected: id }),
  updatePayload: (id, payload) =>
    set((state) => ({
      nodes: state.nodes.map((n) =>
        n.id === id ? { ...n, data: { ...n.data, payload } } : n
      ),
    })),
  setVideo: (url) => set({ videoUrl: url }),
}));

const SNAP_KEY = 'flow-snapshots';
if (typeof window !== 'undefined') {
  useFlowStore.subscribe((state) => {
    const snaps = JSON.parse(localStorage.getItem(SNAP_KEY) || '[]');
    snaps.unshift({ nodes: state.nodes, edges: state.edges });
    localStorage.setItem(SNAP_KEY, JSON.stringify(snaps.slice(0, 5)));
  });
}
