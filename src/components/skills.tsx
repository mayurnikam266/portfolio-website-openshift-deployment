'use client'

import { motion } from 'framer-motion'
import { Section } from './section'
import { Cloud, Container, Cog, Code, Monitor, Network } from 'lucide-react'

const skillCategories = [
  {
    category: 'Cloud Platforms',
    icon: Cloud,
    skills: ['AWS', 'EC2', 'S3', 'RDS', 'CloudWatch', 'CloudTrail', 'IAM', 'EKS', 'VPC'],
  },
  {
    category: 'Container & Orchestration',
    icon: Container,
    skills: ['Docker', 'Podman', 'Kubernetes'],
  },
  {
    category: 'DevOps & Automation',
    icon: Cog,
    skills: ['Ansible', 'Git', 'GitHub Actions', 'Jenkins Basics', 'CI/CD'],
  },
  {
    category: 'Programming & Scripting',
    icon: Code,
    skills: ['Python', 'Bash', 'SQL', 'YAML'],
  },
  {
    category: 'Operating Systems',
    icon: Monitor,
    skills: ['RHEL (Red Hat Certified)', 'Ubuntu', 'Linux', 'Windows'],
  },
  {
    category: 'Networking',
    icon: Network,
    skills: ['TCP/IP', 'DNS', 'SSL/TLS', 'VPC', 'Security Groups', 'NAT Gateway'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Skills() {
  return (
    <Section id="skills" className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-5 tracking-tight">
          Skills & Expertise
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-14 font-body">
          A comprehensive toolkit for modern DevOps and cloud infrastructure
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="p-7 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-200 shadow-soft hover:shadow-soft-lg"
              >
                <div className="flex items-center gap-3 mb-5">
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 tracking-tight">
                    {category.category}
                  </h3>
                </div>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-sm font-medium rounded-lg border border-neutral-200 dark:border-neutral-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </Section>
  )
}
