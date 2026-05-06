'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('marwan.a.gaballah@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" ref={ref} className="py-28 relative">
      {/* Top border */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label block mb-6">Get in Touch</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
              Let's build your next
              <br />
              <span className="text-[var(--gold)] italic">ERP success story</span>
            </h2>
            <p className="font-body text-[var(--text-secondary)] text-lg leading-relaxed mb-12 max-w-xl mx-auto">
              Whether you're planning a greenfield Oracle implementation, transforming your business processes, or need experienced leadership for a critical ERP project — let's discuss how I can help.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a
              href="mailto:marwan.a.gaballah@gmail.com"
              className="group px-8 py-4 bg-[var(--gold)] text-[var(--ink)] font-body font-semibold text-sm tracking-widest uppercase hover:bg-[var(--gold-light)] transition-all duration-300 flex items-center justify-center gap-2 rounded-sm"
            >
              Send Me an Email
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/marwan-ahmed-035472222/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/15 text-[var(--text-primary)] font-body font-medium text-sm tracking-wider hover:border-[var(--gold)]/40 hover:bg-white/3 transition-all duration-300 flex items-center justify-center gap-2 rounded-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </a>
          </motion.div>

          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid sm:grid-cols-3 gap-6"
          >
            {[
              {
                label: 'Location',
                value: 'New Cairo, Egypt',
                sub: 'Open to remote & travel',
                icon: '📍',
              },
              {
                label: 'Phone',
                value: '+20 102 896 1808',
                sub: 'WhatsApp available',
                icon: '📱',
              },
              {
                label: 'Focus',
                value: 'ERP Consulting',
                sub: 'Oracle Fusion HCM',
                icon: '🎯',
              },
            ].map((item) => (
              <div key={item.label} className="p-5 bg-[var(--surface-2)] border border-white/5 rounded-sm text-center">
                <div className="text-xl mb-2">{item.icon}</div>
                <div className="font-mono text-[10px] text-[var(--gold)] mb-1 uppercase tracking-widest">{item.label}</div>
                <div className="font-body text-sm font-medium text-[var(--text-primary)]">{item.value}</div>
                <div className="font-body text-xs text-[var(--text-muted)] mt-0.5">{item.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
