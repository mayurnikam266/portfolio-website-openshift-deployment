'use client'

import { motion } from 'framer-motion'
import { Section } from './section'
import { Mail, Github, Linkedin, MessageSquare, ArrowRight } from 'lucide-react'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mayurnikam266@gmail.com',
    href: 'mailto:mayurnikam266@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/mayurnikam266',
    href: 'https://github.com/mayurnikam266',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/mayur-nikam266',
    href: 'https://linkedin.com/in/mayur-nikam266',
  },
]

export function Contact() {
  return (
    <Section id="contact" className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-7 tracking-tight">
          Let&apos;s Work Together
        </h2>

        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed font-body">
          I&apos;m always interested in hearing about new projects and opportunities. 
          Feel free to reach out if you&apos;d like to collaborate or chat about DevOps, cloud architecture, or anything tech-related.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-14"
        >
          <a
            href="mailto:mayurnikam266@gmail.com"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-200 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5"
          >
            <MessageSquare className="w-5 h-5" />
            Send me an email
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14"
        >
          {contactLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="p-7 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-200 group shadow-soft hover:shadow-soft-lg"
              >
                <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-50 mb-2 tracking-tight">{link.label}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 font-body">{link.value}</p>
              </motion.a>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="pt-12 border-t border-neutral-200 dark:border-neutral-800 text-center text-neutral-500 dark:text-neutral-500"
        >
          <p className="text-sm font-body">© 2026 Mayur Nikam. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </Section>
  )
}
