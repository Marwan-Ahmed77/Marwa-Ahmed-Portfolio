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
    headline: 'Enterprise HR Transformation & Employee Experience Innovation',
    problem: 'Redcon Construction operated with fragmented HR processes across multiple projects and sites — manual workflows, siloed data, and no centralized visibility into workforce management. Employee onboarding was chaotic, benefits communication was ineffective, and HR had no meaningful reporting to inform business decisions.',
    solution: 'As ERP Functional Consultant, I led the full Oracle Fusion HCM implementation while designing innovative employee experience solutions. Beyond core HR configuration, I architected and implemented an Onboarding System (from business analysis through full implementation) and created a Benefits Portal — a modern, user-friendly feature inside Oracle Me that allows HR to manage benefits content without technical intervention. Designed organizational structures reflecting the company\'s complex project-based hierarchy and built automated approval workflows that replaced manual processes.',
    impact: [
      'Centralized HR operations on a single Oracle Cloud platform with real-time visibility',
      'Launched Onboarding System: reduced time-to-productivity by 40% with structured, consistent new-hire experience',
      'Delivered Benefits Portal: HR can now manage benefits independently, reducing administrative overhead by 60%',
      'Automated employee lifecycle processes from hire to exit, eliminating manual sign-off chains',
      'Achieved 90%+ user adoption within first month with comprehensive change management',
    ],
    tools: ['Oracle Fusion HCM', 'Oracle Visual Builder', 'Benefits Portal Design', 'Onboarding System Architecture', 'OUM Methodology', 'HDL Data Migration'],
    color: '#C9A84C',
  },
  {
    id: 2,
    tag: 'Business-Driven Platform Delivery',
    client: 'Al-Shaheen (Qatari Institution)',
    location: 'Qatar / Remote',
    period: '2024 – 2025',
    headline: 'Enterprise Mobile Platform Delivery for Qatari Government-Linked Institution',
    problem: 'Al-Shaheen required a custom enterprise mobile application to streamline internal operations, but leadership lacked a clear product vision, requirements were undefined, and communication between business stakeholders and the development team was breaking down.',
    solution: 'Founded Nexlify and partnered with Finova to deliver this solution. As Project Manager, Business Analyst, and UX Lead, I led the complete product lifecycle — from stakeholder discovery workshops in Doha to detailed Business Requirements Documents, interactive Figma prototypes, and rigorous agile delivery. Served as the critical bridge between business expectations and technical execution, ensuring alignment at every milestone.',
    impact: [
      'Delivered mobile platform on schedule through structured agile delivery with bi-weekly stakeholder sign-offs',
      'Eliminated requirement ambiguity with comprehensive BRDs and interactive prototypes before development',
      'Maintained alignment across remote teams spanning Cairo and Doha with zero major escalations',
      'Achieved 100% stakeholder approval on all major deliverables without scope creep',
    ],
    tools: ['Agile / Scrum Leadership', 'Business Requirements Design', 'Figma Prototyping', 'Stakeholder Management', 'Cross-functional Coordination', 'Product Strategy'],
    color: '#4a90d9',
  },
  {
    id: 3,
    tag: 'Hospital Management System',
    client: 'Helwan University Hospital',
    location: 'Cairo, Egypt',
    period: '2023 (Graduation Project)',
    headline: 'Hospital Management System: From Analysis to Operational Implementation',
    problem: 'Helwan University Hospital faced significant operational inefficiencies — patient registration was manual and fragmented, staff workflows were uncoordinated, and there was no central system to manage the complete patient lifecycle. This resulted in patient wait times, administrative errors, and operational blind spots for hospital leadership.',
    solution: 'Designed and implemented a comprehensive Hospital Management System addressing the entire patient journey. Conducted thorough business analysis of hospital operations, designed role-based systems for different user groups (admins, doctors, departments), and built a full platform supporting patient registration (mobile + web), staff workflows, and complete lifecycle management. Implemented role-based access control and a reporting system enabling data-driven operational decisions.',
    impact: [
      'Built end-to-end hospital management system handling patient registration, staff workflows, and data management',
      'Implemented role-based access ensuring appropriate visibility and controls for different staff levels',
      'Created reporting system enabling hospital leadership to track operations and identify improvement areas',
      'Demonstrated system analysis and process automation capabilities across complex, mission-critical operations',
    ],
    tools: ['System Analysis & Design', 'Process Automation', 'Role-Based Access Control', 'Reporting System Architecture', 'Full-Stack Development', 'Database Design'],
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
