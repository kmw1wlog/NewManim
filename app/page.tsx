'use client';
import React, { useEffect } from 'react';
import ReactFlow, { Background } from 'reactflow';
import 'reactflow/dist/style.css';
import { useFlowStore } from '@/store/useFlowStore';
import { initialNodes, initialEdges } from '@/data/initialFlow';
import { PanelRight } from '@/components/panel-right';
import { VideoViewer } from '@/components/video-viewer';
import { Toolbar } from '@/components/toolbar';

export default function Home() {
  const { nodes, edges, setNodes, setEdges, select } = useFlowStore();

  useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [setNodes, setEdges]);

  return (
    <div className="flex h-full flex-col">
      <Toolbar />
      <div className="flex flex-1">
        <div className="flex-1">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodeClick={(_, node) => select(node.id)}
            fitView
          >
            <Background />
          </ReactFlow>
        </div>
        <PanelRight />
      </div>
      <VideoViewer />
    </div>
  );
}
