'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ExternalLink, X, Github } from 'lucide-react'

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  pdfFile: string
  githubUrl: string
  highlights: string[]
}

const projects: Project[] = [
  {
    id: 'ansible-vm-monitoring',
    title: 'Automated EC2 Virtual Machine Health Monitoring System using Ansible',
    description: 'Developed an automated Virtual Machine health monitoring system using Ansible Dynamic Inventory for EC2 instance discovery (Environment=dev).',
    technologies: ['Ansible', 'AWS EC2', 'Dynamic Inventory', 'YAML', 'Linux', 'Python'],
    pdfFile: 'Virtual Machine Health Monitoring with Ansible.pdf',
    githubUrl: 'https://github.com/mayurnikam266/Ansible-VM-Monitoring',
    highlights: [
      'Developed automated VM health monitoring using Ansible Dynamic Inventory for EC2',
      'Monitored CPU, RAM, and Disk usage with auto-formatted HTML health reports',
      'Implemented automated tagging, SSH key configuration, and zero-manual workflow',
      'Delivered fully automated end-to-end monitoring pipeline for cloud infrastructure',
    ],
  },
  {
    id: 'aws-multitier',
    title: 'AWS Secure Multi Tier Deployment With Bastion Host and NAT Gateway',
    description: 'Designed and deployed a secure AWS multi-tier architecture for WordPress using VPC with public and private subnets.',
    technologies: ['AWS EC2', 'VPC', 'IAM', 'NAT Gateway', 'Bastion Host', 'WordPress', 'MariaDB'],
    pdfFile: 'AWS Multitier Secure Wordpress Deployment.pdf',
    githubUrl: 'https://github.com/mayurnikam266/AWS-multi-tier-architecture-deployment-with-bastion-host-and-nat-gateway',
    highlights: [
      'Designed secure AWS multi-tier architecture with VPC, public/private subnets',
      'Implemented Bastion Host for secure SSH access and NAT Gateway for outbound traffic',
      'Deployed WordPress on EC2 (Apache, PHP) with MariaDB in isolated private subnet',
      'Configured security groups, route tables following AWS security best practices',
    ],
  },
]

interface PdfModalProps {
  project: Project | null
  onClose: () => void
}

function PdfModal({ project, onClose }: PdfModalProps) {
  if (!project) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl shadow-soft-lg w-full h-full max-w-[95vw] max-h-[95vh] overflow-hidden flex flex-col m-4"
      >
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800">
          <h2 className="text-sm sm:text-xl font-bold text-neutral-900 dark:text-neutral-50 line-clamp-1 tracking-tight">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-2.5 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-xl transition-colors flex-shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
        <div className="flex-1 overflow-hidden relative">
          <iframe
            src={`/${project.pdfFile}#toolbar=1&navpanes=1&scrollbar=1&view=FitH`}
            className="w-full h-full"
            title={project.title}
            style={{ border: 'none' }}
          />
          <a
            href={`/${project.pdfFile}`}
            download
            className="absolute bottom-4 right-4 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-soft-lg font-semibold transition-all duration-200 text-sm sm:text-base hover:-translate-y-0.5"
          >
            Download PDF
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-20 md:py-28 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-5 tracking-tight">
          Featured Projects
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-14 font-body">
          Showcasing key projects and accomplishments
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-7 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-200 shadow-soft hover:shadow-soft-lg"
            >
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4 tracking-tight">
                {project.title}
              </h3>

              <p className="text-neutral-600 dark:text-neutral-400 mb-5 line-clamp-3 leading-relaxed font-body">
                {project.description}
              </p>

              <div className="mb-5">
                <h4 className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 mb-3">
                  Key Highlights:
                </h4>
                <ul className="space-y-2">
                  {project.highlights.slice(0, 2).map((highlight, i) => (
                    <li key={i} className="text-sm text-neutral-600 dark:text-neutral-400 flex items-start leading-relaxed">
                      <span className="text-blue-600 dark:text-blue-400 mr-2.5 mt-0.5 flex-shrink-0">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-5">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-white dark:bg-neutral-800 text-xs font-medium text-neutral-700 dark:text-neutral-300 rounded-lg border border-neutral-200 dark:border-neutral-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5"
                >
                  <span>View PDF</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-5 py-3 bg-neutral-700 hover:bg-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-white rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <PdfModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
