import { AbsoluteFill, Sequence } from 'remotion';
import { TitleCard } from '@/components/editorial/TitleCard';
import { StatColumn } from '@/components/editorial/StatColumn';
import { SourceFooter } from '@/components/editorial/SourceFooter';
import { MapChoropleth } from '@/components/map/MapChoropleth';
import { CountryFocusPanel } from '@/components/editorial/CountryFocusPanel';
import type { Project } from '@/types/models';

export const ProjectScenes = ({ project }: { project: Project }) => {
  let currentFrame = 0;

  return (
    <AbsoluteFill className="bg-slate-100">
      {project.scenes.map((scene) => {
        const start = currentFrame;
        currentFrame += scene.durationInFrames;
        return (
          <Sequence key={scene.id} from={start} durationInFrames={scene.durationInFrames}>
            <AbsoluteFill>
              {scene.type === 'intro_title' ? (
                <TitleCard title={project.title} subtitle={project.editorialAngle} ratio={project.ratio} />
              ) : null}
              {scene.type === 'world_highlight' || scene.type === 'country_focus' ? (
                <div className="grid h-full grid-cols-12 gap-4 p-8">
                  <div className="col-span-8 relative">
                    <MapChoropleth highlightLabel={String(project.geography.countryCode ?? 'WORLD')} />
                  </div>
                  <div className="col-span-4 space-y-3">
                    <CountryFocusPanel countryCode={String(project.geography.countryCode ?? 'N/A')} />
                    <StatColumn stats={project.facts.slice(0, 3)} />
                  </div>
                </div>
              ) : null}
              {scene.type === 'stats_overlay' ? (
                <div className="grid h-full grid-cols-2 gap-8 p-10">
                  <StatColumn stats={project.facts} />
                  <div className="rounded-xl border border-slate-300 bg-white p-6 text-2xl font-medium">{project.script.editorial.keyMessage}</div>
                </div>
              ) : null}
              {scene.type === 'outro_sources' ? <SourceFooter sources={project.sources} /> : null}
            </AbsoluteFill>
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
