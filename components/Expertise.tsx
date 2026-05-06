'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const areas = [
  {
    number: '01',
    title: 'Business Analysis & Strategy',
    subtitle: 'Understanding Your Business First',
    skills: ['Requirements Gathering', 'Business Case Development', 'Stakeholder Workshops', 'Process Mapping (AS-IS/TO-BE)', 'Gap Analysis', 'Impact Assessment'],
    desc: 'Every successful project starts with deep business understanding. I conduct thorough analysis of your operations, identify pain points, and design solutions aligned with your strategic objectives.',
  },
  {
    number: '02',
    title: 'ERP Implementation',
    subtitle: 'End-to-End Program Delivery',
    skills: ['OUM Methodology', 'Solution Design', 'System Configuration', 'UAT Management', 'Go-Live Support', 'Change Management'],
    desc: 'Full lifecycle ERP delivery from discovery to post-go-live support. I manage every phase with precision, maintaining stakeholder alignment and controlling risk throughout implementation.',
  },
  {
    number: '03',
    title: 'Oracle Fusion HCM',
    subtitle: 'Deep Module Expertise',
    skills: ['Core HR & Workforce', 'Recruiting & Onboarding', 'Absence Management', 'Performance Management', 'Oracle Visual Builder', 'Redwood UX Design'],
    desc: 'Hands-on expertise across the full HCM suite. I design systems focused on user adoption and business outcomes — configuring security, automating workflows, and building custom experiences.',
  },
  {
    number: '04',
    title: 'Project & Program Management',
    subtitle: 'Leadership & Governance',
    skills: ['Agile & Hybrid Delivery', 'Resource Planning', 'Risk Management', 'Budget Governance', 'Executive Reporting', 'Team Leadership'],
    desc: 'Structured program management that keeps complex implementations on track. I establish clear governance, maintain executive visibility, and lead teams through successful delivery.',
  },
  {
    number: '05',
    title: 'Process Design & Transformation',
    subtitle: 'Optimization Through Systems',
    skills: ['Workflow Design', 'Process Automation', 'Training Program Design', 'KPI Definition & Tracking', 'Change Impact Assessment', 'Continuous Improvement'],
    desc: 'I don\'t just implement systems — I redesign how organizations work. By aligning processes with platform capabilities, I drive measurable business transformation.',
  },
  {
    number: '06',
    title: 'Technical Problem-Solving',
    subtitle: 'Supporting Skill for Consultants',
    skills: ['Oracle Visual Builder', 'System Integration Design', 'Data Migration Strategy', 'Oracle SQL & Reporting', 'Full-Stack Development', 'Technical Architecture'],
    desc: 'My development background enables me to evaluate technical approaches, collaborate effectively with engineering teams, and deliver custom solutions other consultants must outsource.',
  },
]

export default function Expertise() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="expertise" ref={ref} className="py-28 relative bg-[var(--surface)]/30">
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(201,168,76,0.03) 0%, transparent 50%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="section-label block mb-4">Core Expertise</span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="font-display text-4xl sm:text-5xl font-semibold">
              What I bring
              <br />
              <span className="text-[var(--gold)] italic">to the table</span>
            </h2>
            <p className="font-body text-[var(--text-secondary)] max-w-xs text-sm leading-relaxed">
              Six interconnected capabilities that cover every dimension of a successful ERP engagement.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {areas.map((area, i) => (
            <motion.div
              key={area.number}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group p-8 bg-[var(--ink)] hover:bg-[var(--surface-2)] transition-all duration-500 cursor-default"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-xs text-[var(--gold)]/50 group-hover:text-[var(--gold)] transition-colors">
                  {area.number}
                </span>
                <div className="w-5 h-px bg-[var(--gold)]/20 group-hover:bg-[var(--gold)]/60 group-hover:w-10 transition-all duration-500 mt-2.5" />
              </div>

              <h3 className="font-display text-2xl font-semibold mb-1">{area.title}</h3>
              <p className="font-mono text-xs text-[var(--gold)] mb-4">{area.subtitle}</p>
              <p className="font-body text-sm text-[var(--text-muted)] leading-relaxed mb-6">{area.desc}</p>

              <ul className="space-y-2">
                {area.skills.map((s) => (
                  <li key={s} className="flex items-center gap-2 font-body text-xs text-[var(--text-secondary)]">
                    <span className="w-1 h-1 rounded-full bg-[var(--gold)]/40 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
