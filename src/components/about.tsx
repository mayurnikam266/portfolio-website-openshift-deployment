'use client'

import { motion } from 'framer-motion'
import { Section } from './section'

export function About() {
  return (
    <Section id="about" className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-16 text-center tracking-tight">
          About Me
        </h2>

        <div className="space-y-7 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-body" style={{ textAlign: 'justify' }}>
          <p>
            I&apos;m pursuing B.Tech in Artificial Intelligence and Data Science at Maharashtra Institute of Technology, Aurangabad 
            with a CGPA of 8.45/10. My passion lies in Cloud Computing, DevOps, and Automation, where I combine academic 
            knowledge with hands-on experience to build robust infrastructure solutions.
          </p>

          <p>
            With strong expertise in AWS (EC2, S3, CloudWatch, IAM, RDS), Kubernetes, Docker, and Ansible, I focus on deploying 
            secure, scalable, and monitored cloud environments. I&apos;m hands-on with TCP/IP, DNS, and SSL/TLS networking concepts, 
            ensuring comprehensive understanding of infrastructure at all layers.
          </p>

          <p>
            As a Red Hat Academy Student Ambassador at MIT Aurangabad, I actively promote Linux and open-source culture, 
            conduct technical workshops, and guide peers in setting up RHEL environments. I&apos;m Red Hat Certified (RHCSA & RHCE) 
            and committed to continuous learning in the DevOps ecosystem.
          </p>
        </div>

        <div className="mt-16 p-10 bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-soft">
          <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-8 text-center tracking-tight">Key Expertise</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-neutral-600 dark:text-neutral-400">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400 text-xl mt-0.5 flex-shrink-0">✓</span>
              <span>AWS Cloud Services (EC2, S3, RDS, IAM, EKS)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400 text-xl mt-0.5 flex-shrink-0">✓</span>
              <span>Container Technologies (Docker, Podman, Kubernetes)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400 text-xl mt-0.5 flex-shrink-0">✓</span>
              <span>Configuration Management (Ansible)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400 text-xl mt-0.5 flex-shrink-0">✓</span>
              <span>Linux System Administration (RHEL, Ubuntu)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400 text-xl mt-0.5 flex-shrink-0">✓</span>
              <span>Networking (TCP/IP, DNS, SSL/TLS)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400 text-xl mt-0.5 flex-shrink-0">✓</span>
              <span>Python & Bash Scripting</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </Section>
  )
}
