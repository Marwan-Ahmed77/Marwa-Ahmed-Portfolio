'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const cases = [
  {
    id: 1,
    tag: 'Oracle Fusion HCM Implementation',
    client: 'Redcon Construction',
    location: 'Cairo, Egypt',
    period: '2025 – Present',
    headline: 'Full-Scale Oracle Fusion HCM Rollout for a Major Construction Enterprise',
    problem: 'Redcon Construction operated with fragmented HR processes across multiple projects and sites — manual workflows, siloed data, and no centralized visibility into workforce management. Employee lifecycle processes were inconsistent, approval chains were unclear, and reporting was nearly impossible.',
    solution: 'Led end-to-end Oracle Fusion HCM implementation spanning Core HR, Recruiting, Absence Management, and Performance Management. Designed organizational structures reflecting the company\'s complex project-based hierarchy, configured security roles for multi-level access, and built automated approval workflows that replaced manual sign-off chains.',
    impact: [
      'Centralized HR operations across all business units on a single Oracle Cloud platform',
      'Automated employee lifecycle processes from hire to exit, reducing HR admin overhead',
      'Configured custom Redwood Pages and Visual Builder extensions tailored to business needs',
      'Executed successful UAT cycles and data migration via HDL with zero critical defects at go-live',
      'Delivered comprehensive training, enabling 90%+ user adoption within first month',
    ],
    tools: ['Oracle Fusion HCM', 'Oracle Visual Builder', 'HDL / HSDL', 'Redwood UX', 'OUM Methodology', 'Oracle SQL'],
    color: '#C9A84C',
  },
  {
    id: 2,
    tag: 'Mobile Application & Project Management',
    client: 'Al-Shaheen (Qatari Institution)',
    location: 'Qatar / Remote',
    period: '2024 – 2025',
    headline: 'Enterprise Mobile Platform Delivery for Qatari Government-Linked Institution',
    problem: 'Al-Shaheen required a custom enterprise mobile application to streamline internal operations, but lacked a defined product vision, structured requirements, or a technical delivery framework. Communication between stakeholders and developers was breaking down, jeopardizing timelines.',
    solution: 'As Project Manager, System Analyst, and UX Lead at Finova, I led the full product lifecycle — from discovery workshops with Qatari stakeholders to wireframes, prototype approvals, and coordinating the engineering team through agile sprints. Served as the single point of accountability between client and delivery team.',
    impact: [
      'Delivered mobile app on schedule through structured agile delivery with bi-weekly stakeholder reviews',
      'Reduced requirement ambiguity by producing detailed BRDs and Figma prototypes before any code was written',
      'Maintained clear communication across remote teams spanning Cairo and Doha',
      'Achieved client sign-off on all major milestones without scope escalation',
    ],
    tools: ['Figma', 'Agile / Scrum', 'System Analysis', 'BRD Writing', 'Stakeholder Management', 'Cross-functional Coordination'],
    color: '#4a90d9',
  },
  {
    id: 3,
    tag: 'ERP & Web Delivery',
    client: 'Phonex / Water Holding Company',
    location: 'Canal Cities, Egypt',
    period: '2023 – 2024',
    headline: 'Administrative ERP System for Public Sector Water Authority',
    problem: 'The Water Holding Company in the Canal Cities lacked a structured administrative management system — internal processes were paper-based and inefficient, making governance and reporting nearly impossible for management.',
    solution: 'Acting as Techno-Functional Consultant and Project Manager, I assessed existing workflows, designed a fit-for-purpose administrative system, and managed the full delivery from requirements through deployment. Additionally delivered a corporate web platform for Bright Vision, a Saudi VR/AR company entering the market.',
    impact: [
      'Delivered a custom administrative system that digitized core operations for a public sector authority',
      'Managed project delivery across both technical and functional workstreams simultaneously',
      'Designed and launched Bright Vision\'s corporate web presence, enabling their Saudi market entry',
    ],
    tools: ['System Analysis', 'Project Management', 'Web Development', 'UI/UX Design', 'Stakeholder Coordination'],
    color: '#7c9e7a',
  },
]

export default function CaseStudies() {
  const [active, setActive] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const c = cases[active]

  return (
    <section id="work" ref={ref} className="py-28 relative">
      <div className="absolute right-0 top-1/4 w-px h-64 bg-gradient-to-b from-transparent via-[var(--gold)]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="section-label block mb-4">Case Studies</span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold">
            Engagements that
            <br />
            <span className="text-[var(--gold)] italic">delivered results</span>
          </h2>
        </motion.div>

        {/* Tab selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex flex-col sm:flex-row gap-2 mb-10"
        >
          {cases.map((cs, i) => (
            <button
              key={cs.id}
              onClick={() => setActive(i)}
              className={`flex-1 text-left px-5 py-4 border transition-all duration-300 rounded-sm ${
                active === i
                  ? 'border-[var(--gold)]/60 bg-[var(--gold)]/8'
                  : 'border-white/8 hover:border-white/20 bg-transparent'
              }`}
            >
              <div className="font-mono text-[10px] mb-1" style={{ color: active === i ? cs.color : 'var(--text-muted)' }}>
                {cs.tag}
              </div>
              <div className={`font-body text-sm font-medium ${active === i ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
                {cs.client}
              </div>
            </button>
          ))}
        </motion.div>

        {/* Case study detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-5 gap-8"
          >
            {/* Main content */}
            <div className="lg:col-span-3 space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="section-label">{c.location}</span>
                  <span className="section-label text-[var(--text-muted)]">·</span>
                  <span className="section-label text-[var(--text-muted)]">{c.period}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold leading-tight">
                  {c.headline}
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: c.color }}>
                    The Problem
                  </div>
                  <p className="font-body text-[var(--text-secondary)] leading-relaxed text-sm">{c.problem}</p>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: c.color }}>
                    The Solution
                  </div>
                  <p className="font-body text-[var(--text-secondary)] leading-relaxed text-sm">{c.solution}</p>
                </div>
              </div>

              {/* Tools */}
              <div className="flex flex-wrap gap-2">
                {c.tools.map((t) => (
                  <span key={t} className="px-3 py-1 bg-[var(--surface-2)] border border-white/8 font-mono text-[10px] text-[var(--text-secondary)] rounded-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact column */}
            <div className="lg:col-span-2">
              <div className="bg-[var(--surface-2)] border border-white/5 p-6 rounded-sm h-full">
                <div className="font-mono text-xs uppercase tracking-widest mb-5" style={{ color: c.color }}>
                  Business Impact
                </div>
                <ul className="space-y-4">
                  {c.impact.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 + 0.2 }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: c.color }} />
                      <span className="font-body text-sm text-[var(--text-secondary)] leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
