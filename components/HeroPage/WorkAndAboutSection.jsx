"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutAndWorkSection() {
  const aboutText = `Hi, I'm Guna, in my 2nd year of CSE at PES University. 
I’m passionate about coding and building projects, not just crashing for fun. 
When I’m not battling bugs, you’ll find me editing videos or running social media accounts — basically mixing my love 
for tech with my knack for making things look cooler than they really are.`;

  const words = aboutText.split(" ");

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center bg-background px-6 py-24 md:py-32 text-center">
      {/* Animated Intro Text */}
      <h1
        className="text-white font-medium leading-relaxed tracking-wide max-w-3xl"
        style={{
          wordSpacing: "0.4rem", // more space between words
        }}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07, duration: 0.4 }} // slower for better readability
            viewport={{ once: true }}
            className="inline-block mr-2 text-xl sm:text-2xl md:text-3xl"
          >
            {word}
          </motion.span>
        ))}
      </h1>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: words.length * 0.07 + 0.3, duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-10"
      >
        <Link
          href="/work"
          className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white text-lg rounded-full transition-colors duration-300"
        >
          Check My Work →
        </Link>
      </motion.div>
    </section>
  );
}
