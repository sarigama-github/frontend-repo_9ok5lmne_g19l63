import { motion } from 'framer-motion'

const links = [
  { id: 'work', label: 'What You Get' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'features', label: 'Features' },
  // removed process link per request
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
]

export default function QuickNav() {
  return (
    <div className="sticky top-16 z-30 mx-auto w-full max-w-7xl px-4 sm:px-6">
      <motion.nav
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl"
      >
        {/* immersive ribbon background */}
        <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent_95%)]">
          <div className="absolute -top-10 left-1/2 h-40 w-[120%] -translate-x-1/2 rotate-2 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(56,189,248,0.18),transparent)] blur-xl" />
          <div className="absolute top-0 left-0 h-32 w-full bg-[linear-gradient(90deg,rgba(99,102,241,0.15),rgba(236,72,153,0.15),rgba(251,191,36,0.15))] blur" />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="relative inline-flex items-center gap-2 rounded-xl px-3 py-1.5 text-[0.95rem] font-semibold text-white/90 transition hover:text-white"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-400 via-fuchsia-400 to-amber-300" />
              {l.label}
              <span className="pointer-events-none absolute inset-x-2 -bottom-1 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 transition group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </motion.nav>
    </div>
  )
}
