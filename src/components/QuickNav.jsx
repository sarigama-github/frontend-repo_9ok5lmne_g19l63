import { motion } from 'framer-motion'

const links = [
  { id: 'work', label: 'What You Get' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'features', label: 'Features' },
  { id: 'process', label: 'Process' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
]

export default function QuickNav() {
  return (
    <div className="sticky top-16 z-30 mx-auto w-full max-w-6xl px-4 sm:px-6">
      <motion.nav
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative overflow-x-auto rounded-2xl border border-white/10 bg-[linear-gradient(90deg,rgba(56,189,248,0.12),rgba(244,114,182,0.12),rgba(251,191,36,0.12))] px-3 py-2 backdrop-blur-md"
      >
        <div className="flex items-center gap-2">
          {links.map((l, i) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="group relative inline-flex shrink-0 items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-400 via-fuchsia-400 to-amber-300" />
              {l.label}
              <span className="pointer-events-none absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-sky-500/0 via-fuchsia-500/10 to-amber-400/0 opacity-0 blur group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </motion.nav>
    </div>
  )
}
