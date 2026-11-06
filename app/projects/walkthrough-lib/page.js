import { FaNpm, FaYoutube } from "react-icons/fa";
import MediaCarousel from "@/components/projects/MediaCarousel";
import FallbackChain from "@/components/projects/FallbackChain";
import CopyChip from "@/components/media/CopyChip";
import { BulletList, ProjectButton, TechChips, ACCENTS } from "@/components/projects/ui";
import { SITE_URL } from "@/lib/site";

const ACCENT = "indigo";
const VIDEO_ID = "cf1cxdfYcY4";
const NPM_URL = "https://www.npmjs.com/package/walkthrough-lib";
const TITLE = "Walkthrough-lib — NPM package";
const INTRO =
  "Guide users through your real interface instead of making them read docs. Capture a flow directly from your app's UI and turn it into an interactive walkthrough automatically.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${TITLE} | Guna`,
  description: INTRO,
  openGraph: { title: TITLE, description: INTRO, images: [{ url: "/images/walkthrough-lib.jpg", width: 1280, height: 720, alt: "Walkthrough-lib tutorial" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: INTRO, images: ["/images/walkthrough-lib.jpg"] },
};

const slides = [{ type: "video", id: VIDEO_ID, title: "Walkthrough-lib tutorial video" }];

const bullets = [
  "Designed and published a zero-dependency TypeScript library for interactive in-app walkthroughs, supporting real user-driven flows through a reusable TourPlayer and TourRecorder architecture.",
  "Built a deterministic self-healing selector system using ranked testId → ariaLabel → text → cssPath → fuzzy-text fallbacks, improving walkthrough resilience across minor UI changes and refactoring.",
  "Implemented multi-page flow persistence, accessibility support, React integration, completion/abandonment callbacks, and optional provider-agnostic AI-assisted step generation.",
];

export default function WalkthroughLibPage() {
  const a = ACCENTS[ACCENT];
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col lg:flex-row items-stretch lg:items-start gap-10 p-4 sm:p-6 md:p-10 mt-20">
      {/* LEFT */}
      <div className="flex w-full lg:w-1/2 flex-col gap-5">
        <h1 className={`text-2xl sm:text-3xl font-bold ${a.title}`}>{TITLE}</h1>
        <p className="text-muted-foreground leading-relaxed">{INTRO}</p>

        <CopyChip text="npm i walkthrough-lib" className="self-start" />

        <BulletList items={bullets} accent={ACCENT} />

        <div>
          <h2 className={`mb-3 text-xl font-semibold ${a.heading}`}>Tech Stack</h2>
          <TechChips accent={ACCENT} items={["TypeScript", "JavaScript", "DOM APIs", "ESM/CJS", "npm"]} />
        </div>

        <div className="mt-2 flex flex-wrap gap-3">
          <ProjectButton href={NPM_URL} accent={ACCENT} icon={<FaNpm aria-hidden="true" className="text-lg" />}>View on npm</ProjectButton>
          <ProjectButton href={`https://www.youtube.com/watch?v=${VIDEO_ID}`} accent={ACCENT} variant="secondary" icon={<FaYoutube aria-hidden="true" />}>Watch Tutorial</ProjectButton>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex w-full lg:w-1/2 flex-col gap-8">
        <MediaCarousel slides={slides} />
        <FallbackChain />
      </div>
    </div>
  );
}
