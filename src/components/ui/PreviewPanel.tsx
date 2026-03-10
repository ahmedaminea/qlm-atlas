'use client';

import { Player } from '@remotion/player';
import { ProjectScenes } from '@/lib/remotion/scene-renderer';
import type { Project } from '@/types/models';

export const PreviewPanel = ({ project }: { project: Project }) => {
  const durationInFrames = project.scenes.reduce((acc, scene) => acc + scene.durationInFrames, 0);
  const width = project.ratio === '16:9' ? 960 : 540;
  const height = project.ratio === '16:9' ? 540 : 960;

  return (
    <Player
      component={ProjectScenes}
      durationInFrames={durationInFrames}
      compositionWidth={width}
      compositionHeight={height}
      fps={30}
      controls
      inputProps={{ project }}
      style={{ width: '100%', maxWidth: 960 }}
    />
  );
};
