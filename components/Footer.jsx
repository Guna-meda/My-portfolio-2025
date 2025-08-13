import { FaGithub, FaYoutube, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import ScrollVelocity from './ui/ScrollVelocity';

export default function Footer() {
  return (
    <>
    <ScrollVelocity
  texts={["  Let's Connect", "  and build something crazy"]}
  className="custom-scroll-text text-black dark:text-white"
  parallaxClassName="bg-transparent"
  scrollerClassName=""
/>

    <footer className="relative bg-white dark:bg-background overflow-x-hidden text-black dark:text-white py-14  transition-colors duration-300">
      
      {/* Added mt-10 for spacing */}
      <div className="container mx-auto px-6 flex items-center justify-center min-h-[280px] mt-10">
        {/* Middle Content */}
        <div className="text-center max-w-2xl">
          <p className="uppercase tracking-wide mb-2 opacity-70">Get in touch</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Work Together</h2>
          <p className="text-base md:text-lg leading-relaxed opacity-80">
            I’m open for new opportunities – especially ambitious or large
            projects. My inbox is always open. Whether you have a question or
            just want to say hi, I’ll try my best to get back to you!
          </p>
          <button className="mt-6 border border-current px-6 py-2 rounded-md hover:bg-background hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300">
            Say Hello
          </button>
        </div>
      </div>

      {/* Social Icons - Left */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
        {[
          { icon: FaGithub, link: "#" },
          { icon: FaYoutube, link: "#" },
          { icon: FaInstagram, link: "#" },
          { icon: FaTwitter, link: "#" },
          { icon: FaLinkedin, link: "#" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-200"
          >
            <item.icon size={20} />
          </a>
        ))}
      </div>

      {/* Email - Right */}
      <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 rotate-90 origin-center">
        <a
          href="mailto:your@email.com"
          className="hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-200"
        >
          meda.gunavathi25@gmail.com
        </a>
      </div>
    </footer>
    </>
  );
}
