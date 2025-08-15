"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  const contactLinks = [
    {
      icon: <FaLinkedin size={32} />,
      title: "Connect with me on LinkedIn",
      subtitle: "Let's collaborate and grow our network.",
      link: "https://www.linkedin.com/in/gunavathi-mi-8a915b308", // change to your handle
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: <FaInstagram size={32} />,
      title: "Reach me on Instagram",
      subtitle: "Follow my journey and drop me a DM.",
      link: "https://www.instagram.com/gunaunfiltered?utm_source=qr&igsh=MXF2NG9xY3p5NmN5eQ%3D%3D", // your insta
      color: "text-pink-500 dark:text-pink-400",
    },
    {
      icon: <FaEnvelope size={32} />,
      title: "Email me directly",
      subtitle: "meda.gunavathi25@gmail.com", // your gmail
      link: "mailto:meda.gunavathi25@gmail.com",
      color: "text-red-500 dark:text-red-400",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-12">
      {/* Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Get in Touch
      </motion.h1>

      {/* Contact Cards */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contactLinks.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
          >
            <div className={`${item.color} mb-4`}>{item.icon}</div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white text-center">
              {item.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 text-center mt-1">
              {item.subtitle}
            </p>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
