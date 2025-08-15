import {
  SiExpress, SiNodedotjs, SiNextdotjs, SiReact, SiTypescript, SiJavascript,
  SiTailwindcss, SiFramer, SiGreensock, SiMongodb, SiRedux, SiSocketdotio,
  SiGithub, SiFirebase, SiClerk, SiVercel, SiDavinciresolve, SiCanva
} from "react-icons/si";
export default function SkillsSection() {
  const techStack = [
    { name: "Express", icon: <SiExpress /> },
    { name: "NodeJS", icon: <SiNodedotjs /> },
    { name: "NextJS", icon: <SiNextdotjs /> },
    { name: "React", icon: <SiReact /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TailwindCSS", icon: <SiTailwindcss /> },
    { name: "Framer Motion", icon: <SiFramer /> },
    { name: "GSAP", icon: <SiGreensock /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Zustand" },
    { name: "React Redux", icon: <SiRedux /> },
    { name: "Socket.io", icon: <SiSocketdotio /> },
  ];

  const tools = [
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Clerk", icon: <SiClerk /> },
    { name: "Vercel", icon: <SiVercel /> },
  ];

  const others = [
    { name: "DaVinci Resolve", icon: <SiDavinciresolve /> },
    { name: "Adobe Premiere Pro" },
    { name: "Canva", icon: <SiCanva /> },
  ];

  const Badge = ({ label, icon }) => (
    <span className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-[#0b132b] rounded-lg text-sm font-medium text-gray-800 dark:text-white hover:scale-105 transition-transform">
      {icon && <span className="text-lg">{icon}</span>} {label}
    </span>
  );

  return (
    <section className="bg-white dark:bg-background text-gray-900 dark:text-white py-12 sm:py-16 md:py-20 px-6 md:px-20 lg:px-28 transition-colors duration-300 mt-12">

      <div className="max-w-6xl mx-auto text-center">
        {/* Headings */}
        <p className="uppercase text-sm tracking-widest text-gray-500 dark:text-gray-400">
          Skills
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          The Secret{" "}
          <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
            Sauce
          </span>
        </h2>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {techStack.map((tech, idx) => (
            <Badge key={idx} label={tech.name} icon={tech.icon} />
          ))}
        </div>

        {/* Tools / Other */}
        <div className="flex flex-col md:flex-row md:divide-x divide-gray-300 dark:divide-gray-700">
          {/* Tools */}
          <div className="flex-1 px-6 py-4 flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-6">Tools</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, idx) => (
                <Badge key={idx} label={tool.name} icon={tool.icon} />
              ))}
            </div>
          </div>

          {/* Other */}
          <div className="flex-1 px-6 py-4 flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-6">Other</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {others.map((item, idx) => (
                <Badge key={idx} label={item.name} icon={item.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
