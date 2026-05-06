'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const differentiators = [
  {
    number: '1',
    title: 'I speak both languages fluently.',
    body: 'Most ERP consultants are either business analysts who can\'t read code, or developers who don\'t understand business process. I\'m both — and that eliminates entire categories of project risk.',
  },
  {
    number: '2',
    title: 'I\'ve led from day one.',
    body: 'Not as a support analyst following senior consultants\' lead — but as the primary implementor managing requirements workshops, stakeholder alignments, configuration decisions, and go-live accountability.',
  },
  {
    number: '3',
    title: 'I deliver, not just advise.',
    body: 'My background is hands-on. I write the HDL files, configure the approval workflows, build the Visual Builder extensions. When something needs to get done, I don\'t wait — I do it.',
  },
  {
    number: '4',
    title: 'I\'m built for the MENA market.',
    body: 'I understand the cultural dynamics, business practices, and regulatory considerations specific to Egypt, Qatar, and the broader Gulf region — reducing friction in stakeholder engagement from day one.',
  },
]

const languages = [
  { lang: 'Arabic', level: 'Native', width: '100%' },
  { lang: 'English', level: 'Professional', width: '88%' },
]

export default function WhyMe() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="why" ref={ref} className="py-28 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 60%, rgba(201,168,76,0.05) 0%, transparent 60%)',
        }}
      />
      {/* Corner accents */}
      <div className="absolute bottom-0 right-0 w-48 h-px bg-gradient-to-l from-[var(--gold)]/30 to-transparent" />
      <div className="absolute bottom-0 right-0 h-48 w-px bg-gradient-to-t from-[var(--gold)]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="section-label block mb-4">Differentiation</span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold">
            Why clients choose
            <br />
            <span className="text-[var(--gold)] italic">to work with me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {differentiators.map((d, i) => (
            <motion.div
              key={d.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group p-8 bg-[var(--surface-2)] border border-white/5 hover:border-[var(--gold)]/25 transition-all duration-500 rounded-sm relative overflow-hidden"
            >
              {/* Number watermark */}
              <div className="absolute top-4 right-6 font-display text-6xl font-bold text-white/3 select-none">
                {d.number}
              </div>

              <div className="relative">
                <h3 className="font-display text-xl sm:text-2xl font-semibold mb-4 leading-tight pr-8">
                  {d.title}
                </h3>
                <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed">
                  {d.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom metrics bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-sm overflow-hidden"
        >
          {[
            { metric: 'Oracle HCM Modules', value: '5+', sub: 'Configured in production' },
            { metric: 'Enterprise Projects', value: '4+', sub: 'Led end-to-end' },
            { metric: 'Methodologies', value: '2', sub: 'OUM & Agile' },
            { metric: 'MENA Markets', value: '3', sub: 'Egypt · Qatar · Saudi' },
          ].map((m) => (
            <div key={m.metric} className="bg-[var(--ink)] p-6 text-center">
              <div className="font-display text-3xl sm:text-4xl font-semibold text-[var(--gold)] mb-1">
                {m.value}
              </div>
              <div className="font-body text-xs font-medium text-[var(--text-primary)] mb-0.5">{m.metric}</div>
              <div className="font-mono text-[10px] text-[var(--text-muted)]">{m.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
