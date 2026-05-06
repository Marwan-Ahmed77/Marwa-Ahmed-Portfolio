'use client'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="py-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded border border-[var(--gold)]/40 flex items-center justify-center">
            <span className="font-display text-xs font-semibold text-[var(--gold)]">M</span>
          </div>
          <span className="font-body text-sm text-[var(--text-muted)]">Marwan Ahmed · ERP Consultant</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="mailto:marwan.a.gaballah@gmail.com" className="font-mono text-xs text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors">
            Email
          </a>
          <a href="https://www.linkedin.com/in/marwan-ahmed-035472222/" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors">
            LinkedIn
          </a>
          <span className="font-mono text-xs text-[var(--text-muted)]">© {year}</span>
        </div>
      </div>
    </footer>
  )
}
