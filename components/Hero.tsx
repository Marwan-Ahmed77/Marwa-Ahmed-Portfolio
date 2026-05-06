'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Radial gradient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)' }}
      />

      {/* Top left accent */}
      <div className="absolute top-0 left-0 w-px h-40 bg-gradient-to-b from-transparent via-[var(--gold)]/40 to-transparent" />
      <div className="absolute top-0 left-0 w-40 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex items-center gap-3 mb-8"
            >
              <span className="section-label">Oracle Fusion HCM Specialist</span>
              <div className="flex-1 h-px bg-gradient-to-r from-[var(--gold)]/30 to-transparent max-w-24" />
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-6"
            >
              ERP Consultant
              <br />
              <span className="text-[var(--gold)] italic">&amp; Transformation</span>
              <br />
              Leader
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-xl mb-10 font-body"
            >
              I bridge the gap between <span className="text-[var(--text-primary)]">business complexity</span> and <span className="text-[var(--text-primary)]">technical execution</span> — delivering Oracle Fusion HCM implementations that actually transform how organizations operate.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#work"
                className="group px-8 py-4 bg-[var(--gold)] text-[var(--ink)] font-body font-semibold text-sm tracking-widest uppercase hover:bg-[var(--gold-light)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                View My Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-white/15 text-[var(--text-primary)] font-body font-medium text-sm tracking-wider hover:border-[var(--gold)]/40 hover:bg-white/3 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Let's Work Together
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex gap-8 mt-14 pt-8 border-t border-white/5"
            >
              {[
                { value: '3+', label: 'Years ERP\nExperience' },
                { value: '5+', label: 'Oracle HCM\nModules' },
                { value: '4+', label: 'Enterprise\nDeliveries' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl font-semibold text-[var(--gold)]">{stat.value}</div>
                  <div className="font-body text-xs text-[var(--text-muted)] mt-1 whitespace-pre-line leading-relaxed">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — profile image + decorative frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-6 rounded-full border border-[var(--gold)]/10" />
              <div className="absolute -inset-12 rounded-full border border-[var(--gold)]/5" />
              <div className="absolute -inset-20 rounded-full border border-white/3" />

              {/* Image container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-[var(--gold)]/30">
                <img
                  src="/profile.png"
                  alt="Marwan Ahmed"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/20 to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -bottom-4 -right-4 bg-[var(--surface-2)] border border-[var(--gold)]/30 px-4 py-3 rounded-sm"
              >
                <div className="font-mono text-xs text-[var(--gold)] mb-0.5">Available for</div>
                <div className="font-body text-sm font-semibold text-[var(--text-primary)]">ERP Projects</div>
              </motion.div>

              {/* Location badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute -top-2 -left-8 bg-[var(--surface-2)] border border-white/10 px-3 py-2 rounded-sm flex items-center gap-2"
              >
                <span className="text-sm">🇪🇬</span>
                <span className="font-body text-xs text-[var(--text-secondary)]">Cairo, Egypt</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="section-label text-[0.6rem]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[var(--gold)]/50 to-transparent" />
      </motion.div>
    </section>
  )
}
