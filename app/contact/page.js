"use client";
import { motion } from "framer-motion";
import { Highlighter } from "@/components/magicui/highlighter";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-12 bg-white dark:bg-zinc-900">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mt-10 text-gray-900 dark:text-white">
        Let's connect! <br />
      </h1>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-lg bg-gray-50 dark:bg-zinc-800 p-8 rounded-2xl shadow-lg"
      >
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-zinc-900 dark:text-white"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-zinc-900 dark:text-white"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
            Message
          </label>
          <textarea
            rows="5"
            placeholder="Type your message..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-zinc-900 dark:text-white"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors duration-300"
        >
          Send Message
        </button>
      </motion.form>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex gap-6 mt-10"
      >
        <a
          href="https://instagram.com/your_insta"
          target="_blank"
          className="text-gray-700 dark:text-gray-300 hover:text-orange-500 text-2xl"
        >
          <FaInstagram />
        </a>
        <a
          href="https://linkedin.com/in/your_linkedin"
          target="_blank"
          className="text-gray-700 dark:text-gray-300 hover:text-orange-500 text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:your@email.com"
          className="text-gray-700 dark:text-gray-300 hover:text-orange-500 text-2xl"
        >
          <FaEnvelope />
        </a>
      </motion.div>
    </section>
  );
}
