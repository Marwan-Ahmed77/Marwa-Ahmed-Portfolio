'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experience = [
  {
    period: 'Feb 2025 – Present',
    role: 'ERP Consultant — Oracle Fusion HCM',
    company: 'Redcon Construction',
    type: 'Primary',
    highlights: [
      'Leading end-to-end Oracle Fusion HCM implementation (Core HR, Recruiting, Absence, Performance)',
      'Architecting organizational structures, security roles, and automated approval workflows',
      'Delivering custom UX solutions with Oracle Visual Builder and Redwood framework',
      'Managing full UAT lifecycle and HDL data migration for enterprise-scale rollout',
    ],
    badge: 'Oracle HCM',
  },
  {
    period: 'Nov 2024 – Feb 2025',
    role: 'Marketing & Growth Specialist',
    company: 'Elvado Group',
    type: 'Parallel',
    highlights: [
      'Led content strategy, SEO optimization, and performance marketing campaigns',
      'Directed video production, scriptwriting, and social media growth initiatives',
      'Managed lead generation pipelines and conversion funnel optimization',
    ],
    badge: 'Marketing',
  },
  {
    period: 'Sep 2024 – Present',
    role: 'Founder & Digital Transformation Lead',
    company: 'Nexlify',
    type: 'Primary',
    highlights: [
      'Founded Nexlify to deliver strategic digital transformation and business modernization solutions',
      'Partner with established firms to scale high-impact projects across EMEA region',
      'Led Al-Shaheen mobile platform delivery: managed full lifecycle from discovery to production',
      'Drive transformation across ERP implementations, system design, project management, and business analysis',
    ],
    badge: 'Founder',
  },
  {
    period: 'Jun 2023 – Feb 2024',
    role: 'ERP Techno-Functional Consultant & UI/UX Designer',
    company: 'Phonex',
    type: 'Primary',
    highlights: [
      'Managed administrative ERP system for Water Holding Company (Canal Cities)',
      'Designed and launched corporate web presence for Bright Vision (Saudi VR/AR company)',
      'Bridged functional requirements and technical delivery as sole consultant on both engagements',
    ],
    badge: 'ERP & Design',
  },
  {
    period: 'Jul 2023 – Dec 2023',
    role: 'Frontend Development Mentor',
    company: 'IT Sharks Academy',
    type: 'Supporting',
    highlights: [
      'Delivered structured training in HTML, CSS, JavaScript, and React.js',
      'Mentored junior developers through hands-on project-based learning',
    ],
    badge: 'Tech Education',
  },
]

const typeColor: Record<string, string> = {
  Primary: '#C9A84C',
  Parallel: '#7c9e7a',
  Supporting: '#4a90d9',
}

export default function Timeline() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="experience" ref={ref} className="py-28 relative bg-[var(--surface)]/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="section-label block mb-4">Experience</span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold">
            A career built
            <br />
            <span className="text-[var(--gold)] italic">at the intersection</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--gold)]/40 via-[var(--gold)]/20 to-transparent hidden sm:block" />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative sm:pl-16"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-4 top-6 w-4 h-4 rounded-full border-2 hidden sm:flex items-center justify-center -translate-x-1/2"
                  style={{ borderColor: typeColor[exp.type], background: 'var(--ink)' }}
                >
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: typeColor[exp.type] }} />
                </div>

                <div className="group p-6 sm:p-8 bg-[var(--surface-2)] border border-white/5 hover:border-white/10 transition-all duration-300 rounded-sm">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className="font-mono text-[10px] px-2 py-0.5 border rounded-sm"
                          style={{ color: typeColor[exp.type], borderColor: typeColor[exp.type] + '40' }}
                        >
                          {exp.badge}
                        </span>
                        <span className="font-mono text-xs text-[var(--text-muted)]">{exp.period}</span>
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl font-semibold text-[var(--text-primary)]">
                        {exp.role}
                      </h3>
                      <p className="font-body text-sm text-[var(--gold)] mt-0.5">{exp.company}</p>
                    </div>
                  </div>

                  <ul className="grid sm:grid-cols-2 gap-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="mt-2 w-1 h-1 rounded-full bg-[var(--gold)]/40 shrink-0" />
                        <span className="font-body text-sm text-[var(--text-secondary)] leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 p-8 border border-[var(--gold)]/20 bg-[var(--gold)]/3 rounded-sm"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="section-label block mb-2">Education</span>
              <h3 className="font-display text-2xl font-semibold">B.Sc. Information Systems</h3>
              <p className="font-body text-sm text-[var(--gold)] mt-1">Helwan University — Faculty of Computers & Artificial Intelligence</p>
              <p className="font-body text-xs text-[var(--text-muted)] mt-1">Minor: Computer Science · GPA 3.06 (Very Good) · 2024</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              {['ICPC Problem Solving', 'LINK FCIH — Social Media Head', 'Resala Volunteer'].map((act) => (
                <span key={act} className="px-3 py-1.5 border border-white/10 font-mono text-[10px] text-[var(--text-muted)] rounded-sm">
                  {act}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
