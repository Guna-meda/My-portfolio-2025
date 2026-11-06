import { FaGlobe, FaProductHunt, FaYoutube } from "react-icons/fa";
import MediaCarousel from "@/components/projects/MediaCarousel";
import LinkThumbCard from "@/components/media/LinkThumbCard";
import { BulletList, ProjectButton, TechChips, ACCENTS } from "@/components/projects/ui";
import { PRODUCT_HUNT_URL, REMORE_URL, VC_UNFILTERED_URL } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

const ACCENT = "emerald";
const VIDEO_ID = "ZJftpJ8695M";
const TITLE = "Remore — AI-Powered WhatsApp Assistant";
const INTRO =
  "An AI personal assistant that lives on WhatsApp. Set reminders, manage tasks, save notes and organize your day, all through a simple chat.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${TITLE} | Guna`,
  description: INTRO,
  openGraph: { title: TITLE, description: INTRO, images: [{ url: "/images/remore.png", width: 1280, height: 628, alt: "Remore homepage" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: INTRO, images: ["/images/remore.png"] },
};

const slides = [
  { type: "video", id: VIDEO_ID, title: "Remore explainer video" },
  { type: "image", src: "/images/remore.png", alt: "Remore landing page showing a WhatsApp chat with reminders and tasks" },
];

const bullets = [
  "Designed and shipped an end-to-end conversational assistant over WhatsApp, handling natural-language reminders, recurring schedules and long-term structured memory for real users.",
  "Built a Google Calendar integration, enabling users to create, update and manage calendar events directly from natural-language WhatsApp messages.",
  "Implemented an LLM tool-calling framework that dynamically invokes capabilities such as reminders, calendar management and memory retrieval from user conversations.",
];

export default function RemoreProjectPage() {
  const a = ACCENTS[ACCENT];
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col lg:flex-row items-stretch lg:items-start gap-10 p-4 sm:p-6 md:p-10 mt-20">
      {/* LEFT */}
      <div className="flex w-full lg:w-1/2 flex-col gap-5">
        <h1 className={`text-2xl sm:text-3xl font-bold ${a.title}`}>{TITLE}</h1>
        <p className="text-muted-foreground leading-relaxed">{INTRO}</p>

        <BulletList items={bullets} accent={ACCENT} />

        <div>
          <h2 className={`mb-3 text-xl font-semibold ${a.heading}`}>Tech Stack</h2>
          <TechChips accent={ACCENT} items={["Node.js", "Express", "MongoDB (Vector Search)", "OpenAI", "Twilio"]} />
        </div>

        <div className="mt-2 flex flex-wrap gap-3">
          <ProjectButton href={REMORE_URL} accent={ACCENT} icon={<FaGlobe aria-hidden="true" />}>Visit Website</ProjectButton>
          <ProjectButton href={PRODUCT_HUNT_URL} accent={ACCENT} variant="secondary" icon={<FaProductHunt aria-hidden="true" />}>View on Product Hunt</ProjectButton>
          <ProjectButton href={`https://youtu.be/${VIDEO_ID}`} accent={ACCENT} variant="secondary" icon={<FaYoutube aria-hidden="true" />}>Watch Explainer</ProjectButton>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex w-full lg:w-1/2 flex-col gap-8">
        <MediaCarousel slides={slides} />

        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">As featured in</h2>
          <div className="max-w-md">
            <LinkThumbCard
              href={VC_UNFILTERED_URL}
              title="VC Unfiltered — Founder Spotlight, Vol. 11"
              description="Featured by 1752vc for building under vertical and applied AI."
              image="/images/vc-unfiltered.jpg"
              badge="Featured"
              accent="blue"
              compact
            />
          </div>
        </div>
      </div>
    </div>
  );
}
