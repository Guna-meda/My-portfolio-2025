import {
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import ScrollVelocity from "./ui/ScrollVelocity";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    { icon: FaGithub, link: "https://github.com/Guna-meda" },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/gunaunfiltered?utm_source=qr&igsh=MXF2NG9xY3p5NmN5eQ%3D%3D",
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/gunavathi-mi-8a915b308",
    },
  ];

  return (
    <>
      <ScrollVelocity
        texts={["  Let's Connect", "  and build something crazy"]}
        className="custom-scroll-text text-black dark:text-white"
        parallaxClassName="bg-transparent"
        scrollerClassName=""
      />

      <footer className="relative bg-white dark:bg-background overflow-hidden text-black dark:text-white py-14 transition-colors duration-300">
        <div className="container mx-auto px-6 flex flex-col items-center justify-center min-h-[280px] space-y-6">
          {/* Text Content */}
          <div className="text-center max-w-2xl">
            <p className="uppercase tracking-wide mb-2 opacity-70">
              Get in touch
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let’s Work Together
            </h2>
            <p className="text-base md:text-lg leading-relaxed opacity-80">
              I’m open for new opportunities – especially ambitious or large
              projects. My inbox is always open. Whether you have a question or
              just want to say hi, I’ll try my best to get back to you!
            </p>

            <Link href="/contact">
              <button className="mt-6 border border-current px-6 py-2 rounded-md hover:bg-background hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300">
                Say Hello
              </button>
            </Link>
          </div>

          {/* Social Icons - Mobile */}
          <div className="flex md:hidden gap-5">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-200"
              >
                <item.icon size={24} />
              </a>
            ))}
          </div>

          {/* Email - Mobile */}
          <div className="md:hidden text-sm">
            <a
              href="mailto:meda.gunavathi25@gmail.com"
              className="hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-200"
            >
              meda.gunavathi25@gmail.com
            </a>
          </div>
        </div>

        {/* Social Icons - Desktop Left */}
        <div className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 flex-col items-center gap-4">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-200"
            >
              <item.icon size={20} />
            </a>
          ))}
        </div>

        {/* Email - Desktop Right */}
        <div className="hidden md:block absolute right-[-60px] top-1/2 -translate-y-1/2 rotate-90 origin-center">
          <a
            href="mailto:meda.gunavathi25@gmail.com"
            className="hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-200"
          >
            meda.gunavathi25@gmail.com
          </a>
        </div>
      </footer>
    </>
  );
}
