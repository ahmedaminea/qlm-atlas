import { Composition } from 'remotion';
import type { Project } from '@/types/models';
import { ProjectScenes } from '@/lib/remotion/scene-renderer';
import fixture from '../../fixtures/fixture_venezuela_gdp_oil.json';

const project = fixture as Project;

export const RemotionRoot = () => {
  const fps = 30;
  const durationInFrames = project.scenes.reduce((acc, scene) => acc + scene.durationInFrames, 0);

  return (
    <Composition
      id="QlmAtlasVideo"
      component={ProjectScenes}
      durationInFrames={durationInFrames}
      fps={fps}
      width={project.ratio === '16:9' ? 1920 : 1080}
      height={project.ratio === '16:9' ? 1080 : 1920}
      defaultProps={{ project }}
    />
  );
};
