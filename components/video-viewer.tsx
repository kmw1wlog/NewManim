'use client';
import { useFlowStore } from '@/store/useFlowStore';

export function VideoViewer() {
  const { videoUrl } = useFlowStore();
  if (!videoUrl) return null;
  return (
    <div className="border-t p-2">
      <video src={videoUrl} controls className="w-full" />
    </div>
  );
}
