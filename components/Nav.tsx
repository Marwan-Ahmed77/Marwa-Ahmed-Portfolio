'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 bg-[#0A0A0F]/90 backdrop-blur-xl border-b border-white/5' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded border border-[var(--gold)]/40 flex items-center justify-center group-hover:border-[var(--gold)] transition-colors">
            <span className="font-display text-sm font-semibold text-[var(--gold)]">M</span>
          </div>
          <span className="font-display text-lg font-medium tracking-wide hidden sm:block">
            Marwan Ahmed
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--gold)] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="px-5 py-2 text-sm border border-[var(--gold)]/50 text-[var(--gold)] hover:bg-[var(--gold)]/10 transition-all duration-300 rounded-sm font-body font-medium tracking-wide"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-px bg-[var(--text-primary)] transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-[var(--text-primary)] transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-[var(--text-primary)] transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0A0F]/95 backdrop-blur-xl border-t border-white/5"
          >
            <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-base text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="mt-2 px-5 py-2.5 text-sm border border-[var(--gold)]/50 text-[var(--gold)] text-center rounded-sm font-body font-medium">
                Let's Talk
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
