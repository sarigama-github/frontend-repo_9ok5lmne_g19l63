import { motion } from 'framer-motion'

export default function TopMessage() {
  return (
    <section className="relative z-20 flex items-center justify-center px-6">
      <div className="relative mx-auto w-full max-w-6xl py-12 sm:py-16">
        {/* Headline block (design comes first now) */}
        <div className="space-y-5 text-center">
          {/* removed: small label "See how it works" */}

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="bg-gradient-to-r from-white via-sky-200 to-white bg-clip-text text-3xl font-semibold leading-tight tracking-wide text-transparent sm:text-4xl"
          >
            Systems used behind brands trusted by Mercedes, Porsche, and Lamborghini.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg leading-relaxed tracking-wide text-slate-200 sm:text-xl"
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

          {/* Primary CTAs */}
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://www.linkedin.com/in/ash-yu-291761367/"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-bold text-white transition hover:scale-[1.02]"
            >
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400" />
              <span className="relative">Get my funnel strategy</span>
            </a>

            <a
              href="#calendar"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              Book a 15‑min fit call
            </a>
          </div>
        </div>
      </div>

      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[60vh] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-3xl" />
      </div>
    </section>
  )
}
