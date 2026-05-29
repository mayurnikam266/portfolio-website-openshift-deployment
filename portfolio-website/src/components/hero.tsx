'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 pt-20">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl w-full text-center"
      >
        <motion.div variants={item} className="mb-8 sm:mb-10">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto mb-8 sm:mb-10">
            <Image
              src="/passport-photo.jpeg"
              alt="Mayur Nikam"
              fill
              className="rounded-full object-cover shadow-soft-lg ring-1 ring-neutral-200 dark:ring-neutral-800"
              priority
            />
          </div>
        </motion.div>

        {/* Name with tighter letter-spacing for premium feel */}
        <motion.h1
          variants={item}
          className="text-4xl sm:text-6xl md:text-7xl font-bold text-neutral-900 dark:text-neutral-50 mb-5 sm:mb-7 tracking-tight"
        >
          Mayur Nikam
        </motion.h1>

        {/* Subtitle with refined weight */}
        <motion.p
          variants={item}
          className="text-xl sm:text-2xl md:text-3xl text-neutral-600 dark:text-neutral-400 font-medium mb-6 sm:mb-8 px-2 tracking-tight"
        >
          B.Tech in AI & Data Science | Cloud & DevOps Enthusiast
        </motion.p>

        {/* Description with better line height */}
        <motion.p
          variants={item}
          className="text-base sm:text-lg text-neutral-500 dark:text-neutral-500 max-w-2xl mx-auto mb-10 sm:mb-14 leading-relaxed px-4"
        >
          Strong expertise in Cloud Computing, DevOps, and Automation. Skilled in AWS, Kubernetes, Docker, and Ansible, experienced in deploying secure, scalable, and monitored cloud environments.
        </motion.p>

        {/* Refined buttons with better hover states */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 sm:mb-14 px-4"
        >
          <Link
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-200 text-center shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5"
          >
            View Projects
          </Link>
          <a
            href="/resume.pdf"
            download="Mayur_Nikam_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 border-2 border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-900 rounded-xl font-semibold transition-all duration-200 text-center"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Social links with refined styling */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="https://github.com/mayurnikam266"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-200 hover:-translate-y-0.5"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/mayur-nikam266"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-200 hover:-translate-y-0.5"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:mayurnikam266@gmail.com"
            className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-200 hover:-translate-y-0.5"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
