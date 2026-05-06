'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  },
})

const values = [
  {
    icon: '⚡',
    title: 'Business-First Mindset',
    desc: 'I start every engagement by understanding the organization\'s goals, not the technology. ERP is a vehicle — business outcomes are the destination.',
  },
  {
    icon: '🔗',
    title: 'Bridge Between Worlds',
    desc: 'Fluent in both boardroom language and technical architecture. I translate between C-suite requirements and developer specifications without losing meaning.',
  },
  {
    icon: '📐',
    title: 'Structured Delivery',
    desc: 'Disciplined application of Oracle Unified Method (OUM) and Agile frameworks ensures predictable delivery, controlled risk, and measurable ROI.',
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="py-28 relative">
      {/* Side line accent */}
      <div className="absolute left-0 top-1/4 w-px h-48 bg-gradient-to-b from-transparent via-[var(--gold)]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <motion.div
              variants={fadeUp(0)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              <span className="section-label block mb-4">About</span>
              <h2 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-8">
                More than an
                <br />
                <span className="text-[var(--gold)] italic">ERP specialist —</span>
                <br />
                a business partner.
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp(0.15)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="space-y-5 text-[var(--text-secondary)] leading-relaxed font-body"
            >
              <p>
                With a background spanning Oracle Fusion HCM implementation, full-stack development, and product management, I've developed a rare ability to see the <span className="text-[var(--text-primary)]">full picture</span> — from executive business strategy to database schema.
              </p>
              <p>
                At Redcon Construction, I led end-to-end Oracle HCM implementations — handling requirements gathering, configuration of complex organizational hierarchies, approval workflows, and go-live support for a workforce spanning multiple locations. I don't just configure systems; I redesign <span className="text-[var(--text-primary)]">how people work</span>.
              </p>
              <p>
                My technical depth as a full-stack developer (React, Java, Oracle SQL, Python) gives me an uncommon edge: I can read code, challenge technical estimates, and architect integrations that other consultants must outsource. This saves clients time, budget, and risk.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp(0.3)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="mt-10 flex flex-wrap gap-3"
            >
              {['Oracle Fusion HCM', 'OUM Methodology', 'Agile PM', 'Oracle Visual Builder', 'HDL / Data Migration', 'Stakeholder Management'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 border border-[var(--gold)]/25 text-[var(--gold)] font-mono text-xs rounded-sm hover:bg-[var(--gold)]/5 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — value pillars */}
          <div className="space-y-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={fadeUp(0.1 + i * 0.12)}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                className="group p-6 bg-[var(--surface-2)] border border-white/5 hover:border-[var(--gold)]/25 transition-all duration-500 rounded-sm gradient-border"
              >
                <div className="flex gap-4 items-start">
                  <div className="text-2xl mt-0.5 shrink-0">{v.icon}</div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[var(--text-primary)] mb-2">
                      {v.title}
                    </h3>
                    <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quote block */}
            <motion.div
              variants={fadeUp(0.45)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="p-6 border-l-2 border-[var(--gold)] bg-[var(--gold)]/3"
            >
              <p className="font-display text-lg italic text-[var(--text-primary)] leading-relaxed">
                "Successful ERP implementation is 20% technology and 80% change management, communication, and trust."
              </p>
              <p className="font-mono text-xs text-[var(--gold)] mt-3">— My Implementation Philosophy</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
