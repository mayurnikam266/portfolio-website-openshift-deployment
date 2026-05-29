'use client'

import { motion } from 'framer-motion'
import { Section } from './section'
import { Calendar, Building2 } from 'lucide-react'

interface ExperienceItem {
  id: string
  position: string
  company: string
  period: string
  location: string
  description: string
  achievements: string[]
}

const experiences: ExperienceItem[] = [
  {
    id: '1',
    position: 'Red Hat Academy Student Ambassador',
    company: 'MIT Aurangabad',
    period: 'Feb 2024 - December 2025',
    location: 'Aurangabad, Maharashtra',
    description: 'Representing Red Hat Academy as a campus ambassador promoting Linux and open-source learning culture.',
    achievements: [
      'Represented Red Hat Academy promoting Linux and open-source culture on campus',
      'Conducted workshops and guided peers in setting up Red Hat Enterprise Linux environments',
      'Provided hands-on guidance on containerization tools (Docker, Podman) and DevOps practices',
      'Collaborated with Red Hat Academy coordinators to organize technical sessions and awareness programs',
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

export function Experience() {
  return (
    <Section id="experience" className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-5 tracking-tight">
          Professional Experience
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-14 font-body">
          Building innovative cloud solutions throughout my career
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-7"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative p-7 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-200 shadow-soft hover:shadow-soft-lg"
            >
              {index !== experiences.length - 1 && (
                <div className="absolute left-[31px] top-[85px] w-0.5 h-[calc(100%+28px)] bg-neutral-200 dark:bg-neutral-800"></div>
              )}

              <div className="flex gap-5">
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-blue-600 dark:bg-blue-600 flex items-center justify-center text-white shadow-soft">
                    <Building2 className="w-6 h-6" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 tracking-tight">
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-500 text-sm font-body">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                    {exp.company} • {exp.location}
                  </p>

                  <p className="text-neutral-600 dark:text-neutral-400 mb-5 leading-relaxed font-body">
                    {exp.description}
                  </p>

                  <ul className="space-y-2.5">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-neutral-600 dark:text-neutral-400 leading-relaxed font-body">
                        <span className="text-blue-600 dark:text-blue-400 mr-3 mt-0.5 flex-shrink-0">→</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  )
}
