import { listFixtureProjects } from '@/lib/data/fixtures';
import { listStylePackages, listPalettes } from '@/lib/data/styles';
import { narrativeTemplates } from '@/lib/data/templates';
import { PreviewPanel } from '@/components/ui/PreviewPanel';
import { CreateWithAiPanel } from '@/components/ui/CreateWithAiPanel';

export default function HomePage() {
  const fixtures = listFixtureProjects();
  const styles = listStylePackages();
  const first = fixtures[0];

  return (
    <main className="mx-auto max-w-7xl space-y-8 p-6">
      <header className="rounded-2xl bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-semibold">QLM Atlas Studio</h1>
        <p className="mt-2 text-slate-600">Template-driven editorial cartography video generator (MVP scaffold).</p>
      </header>

      <section className="grid gap-4 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold">1) Concise technical plan</h2>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-700">
            <li>Use typed JSON project model as single source of truth.</li>
            <li>Render scenes through reusable editorial + map primitives.</li>
            <li>Preview via Remotion Player and export via Remotion render pipeline endpoint.</li>
            <li>Drive style packages from folder-based data under /styles.</li>
            <li>Provide guided UX blocks: projects, wizard, scene list, config, preview, export.</li>
          </ol>
        </div>
        <div>
          <h2 className="text-xl font-semibold">2) Final folder architecture</h2>
          <pre className="mt-2 overflow-auto rounded-lg bg-slate-950 p-3 text-xs text-slate-100">{`src/app, src/components, src/lib, src/remotion, src/types, src/schemas\nstyles/<style-id>/{style.json,palettes,icons,fonts,thumbnails}\nfixtures/*.json`}</pre>
        </div>
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">3) Types + schemas + templates</h2>
        <p className="mt-2 text-sm text-slate-700">Strongly typed models and zod schemas are implemented for Project, Scene, Style, Palette, Metrics, Flows, Sources, and EditorialScript. Templates: {narrativeTemplates.map((item) => item.id).join(', ')}.</p>
      </section>

      <section className="grid gap-4 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold">4) Component tree</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
            <li>Editorial: TitleCard, StatColumn, MetricCard, BarChartPanel, CountryFocusPanel, PictogramFactsGrid, SourceFooter.</li>
            <li>Map: MapChoropleth, FlowLinesLayer, MapLabelLayer, CityMarkerLayer.</li>
            <li>Orchestration: ProjectScenes + PreviewPanel.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">5) Render pipeline</h2>
          <p className="mt-2 text-sm text-slate-700">Brief/fixture → Project JSON → Scene list → Remotion Composition (QlmAtlasVideo) → in-app Player preview → server export route for MP4 + thumbnail.</p>
        </div>
      </section>

      <section className="grid gap-4 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-3">
        <div className="md:col-span-1">
          <h2 className="text-xl font-semibold">6) MVP scaffold status</h2>
          <p className="mt-2 text-sm text-slate-700">Dashboard and guided workflow sections are scaffolded with fixture-backed data.</p>
          <h3 className="mt-4 font-medium">Style packages</h3>
          <ul className="mt-1 list-disc pl-5 text-sm text-slate-700">
            {styles.map((style) => (
              <li key={style.id}>{style.label} ({listPalettes(style.id).length} palettes)</li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold">7) First complete vertical slice</h2>
          <p className="mt-2 text-sm text-slate-700">Country profile template + QLM TN style + economy palette + qlm-core icon set + Venezuela fixture + 16:9 preview + export architecture.</p>
          <div className="mt-4">
            <PreviewPanel project={first} />
          </div>
        </div>
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">AI assist layer</h2>
        <p className="mt-2 text-sm text-slate-700">Prompt → AI interpretation modules → structured draft JSON (reviewable + editable).</p>
        <div className="mt-4"><CreateWithAiPanel /></div>
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">8) Summary after major blocks</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
          <li>Added: full scaffold, typed models, schemas, styles, fixtures, remotion composition, AI interpretation modules.</li>
          <li>Remaining: deeper map topology, complete scene-level editing UX, production export worker hardening, richer Arabic typography tuning.</li>
          <li>Tradeoffs: prioritized working vertical slice + maintainable architecture over full visual fidelity in all scene types.</li>
        </ul>
      </section>
    </main>
  );
}
