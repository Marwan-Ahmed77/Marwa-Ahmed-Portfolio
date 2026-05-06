'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const areas = [
  {
    number: '01',
    title: 'ERP Implementation',
    subtitle: 'End-to-End Delivery',
    skills: ['Requirements Workshops', 'Solution Design', 'System Configuration', 'UAT Management', 'Go-Live Support', 'Post-Implementation Review'],
    desc: 'Full lifecycle ERP delivery using Oracle Unified Method (OUM). From discovery to hypercare, I manage every phase with precision and stakeholder accountability.',
  },
  {
    number: '02',
    title: 'Oracle Fusion HCM',
    subtitle: 'Deep Technical Expertise',
    skills: ['Core HR & Workforce', 'Recruiting & Onboarding', 'Absence Management', 'Performance & Goals', 'Oracle Visual Builder', 'Redwood UX & Journeys'],
    desc: 'Hands-on configuration across the full HCM suite. I design systems that people actually use — with security roles, approval flows, and custom extensions that fit the real business.',
  },
  {
    number: '03',
    title: 'Project Management',
    subtitle: 'Governance & Delivery',
    skills: ['Agile & Hybrid Delivery', 'Resource Planning', 'Risk & Issue Management', 'Budget Governance', 'Stakeholder Communication', 'Delivery Reporting'],
    desc: 'Structured program management that keeps implementations on track. I establish governance frameworks that give executives visibility and teams clarity.',
  },
  {
    number: '04',
    title: 'Business Process Analysis',
    subtitle: 'Optimization & Design',
    skills: ['Process Mapping (AS-IS / TO-BE)', 'Gap Analysis', 'Business Case Development', 'Change Management', 'Training Design', 'KPI Definition'],
    desc: 'I map existing workflows, identify inefficiencies, and design improved processes that leverage Oracle capabilities — not around them.',
  },
  {
    number: '05',
    title: 'Data & Integrations',
    subtitle: 'Migration & Connectivity',
    skills: ['HDL / HSDL Loading', 'Spreadsheet Data Loader', 'Data Cleansing Strategy', 'Oracle SQL / Reporting', 'API Integration Concepts', 'Data Validation Frameworks'],
    desc: 'Clean data is the foundation of any successful ERP launch. I lead data migration strategies that prevent post-go-live chaos.',
  },
  {
    number: '06',
    title: 'Technical Architecture',
    subtitle: 'Full-Stack Depth',
    skills: ['Oracle Visual Builder', 'React / JavaScript', 'Oracle SQL & MySQL', 'REST API Design', 'UI/UX Prototyping (Figma)', 'System Documentation'],
    desc: 'My development background means I can evaluate technical solutions, lead developer discussions, and deliver custom extensions other consultants would outsource.',
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
