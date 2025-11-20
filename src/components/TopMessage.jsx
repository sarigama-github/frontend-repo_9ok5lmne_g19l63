import { motion } from 'framer-motion'

export default function TopMessage() {
  return (
    <section className="relative z-20 flex items-center justify-center px-6">
      {/* Immersive background behind the headline */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Existing soft gradients */}
        <div className="absolute left-1/2 top-1/2 h-[80vh] w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-[4rem] bg-[radial-gradient(60%_60%_at_50%_40%,rgba(56,189,248,0.20),transparent_60%)] blur-2xl" />
        <div className="absolute left-1/2 top-[30%] h-[70vh] w-[80vw] -translate-x-1/2 -rotate-6 rounded-[4rem] bg-[conic-gradient(from_120deg_at_50%_50%,rgba(99,102,241,0.15),rgba(236,72,153,0.2),rgba(251,191,36,0.15),rgba(56,189,248,0.15),rgba(99,102,241,0.15))] opacity-70 blur-2xl" />

        {/* New immersive moving object (transparent, no hard edges) */}
        <motion.div
          aria-hidden
          initial={{ scale: 0.98, opacity: 0.9 }}
          animate={{ rotate: 360, scale: 1, opacity: 1 }}
          transition={{ duration: 80, ease: 'linear', repeat: Infinity }}
          className="absolute left-1/2 top-[46%] h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{
            background:
              'conic-gradient(from 0deg, rgba(16,185,129,0.25), rgba(56,189,248,0.22), rgba(99,102,241,0.25), rgba(236,72,153,0.22), rgba(251,191,36,0.22), rgba(16,185,129,0.25))',
            WebkitMaskImage:
              'radial-gradient(closest-side, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.35) 65%, rgba(0,0,0,0) 100%)',
            maskImage:
              'radial-gradient(closest-side, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.35) 65%, rgba(0,0,0,0) 100%)',
            mixBlendMode: 'screen',
            filter: 'saturate(120%)',
          }}
        />

        {/* Subtle drifting glow to add depth */}
        <motion.div
          aria-hidden
          className="absolute left-[10%] top-[15%] h-[40vmin] w-[40vmin] rounded-full"
          initial={{ x: -10, y: 0, opacity: 0.6 }}
          animate={{ x: 15, y: 8, opacity: 0.8 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(59,130,246,0.25), transparent 60%)',
            filter: 'blur(40px)',
            mixBlendMode: 'screen',
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl py-12 sm:py-16">
        {/* Headline block (design comes first now) */}
        <div className="space-y-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-balance bg-gradient-to-r from-white via-sky-200 to-white bg-clip-text text-4xl font-black leading-tight tracking-tight text-transparent sm:text-5xl md:text-6xl"
          >
            Systems used behind brands trusted by Mercedes, Porsche, and Lamborghini.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-3xl text-lg leading-relaxed tracking-wide text-slate-200 sm:text-xl"
          >
            I build your revenue engine and turn your content into paying customers in 60 days.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base font-semibold tracking-widest text-emerald-300/90"
          >
            Not an agency. No retainer.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base leading-relaxed tracking-wide text-slate-300"
          >
            I install your systems (funnels + emails + automation) tied to outcomes.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-base tracking-[0.08em] text-amber-300"
          >
            18 booked calls/week from cold traffic using this exact playbook
          </motion.p>

          {/* Primary CTAs (updated per request) */}
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://www.linkedin.com/in/ash-yu-291761367/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-transparent px-6 py-3 text-base font-semibold text-white/90 backdrop-blur transition hover:bg-white/5"
            >
              view linkedIn
            </a>

            <a
              href="#calendar"
              className="group relative inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-bold text-white transition hover:scale-[1.02]"
            >
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-sky-500 to-amber-400" />
              <span className="relative">Book a 15‑min fit call</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
