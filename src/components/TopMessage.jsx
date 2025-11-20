import { motion } from 'framer-motion'

export default function TopMessage() {
  return (
    <section className="relative z-20 flex min-h-screen items-center justify-center px-6">
      <div className="relative mx-auto w-full max-w-5xl text-center">
        {/* Video */}
        <div className="mx-auto mb-8 w-full max-w-3xl">
          <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
            <div className="pb-[56.25%]"></div>
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/34P2DIygsuU?si=gu4PJ37En9cYb4hC"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        {/* Headline block with varied font spacing and coloring per line */}
        <div className="space-y-5">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm font-medium tracking-[0.35em] text-sky-300/90"
          >
            See how it works
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="bg-gradient-to-r from-white via-sky-200 to-white bg-clip-text text-2xl font-semibold leading-tight tracking-wide text-transparent sm:text-3xl"
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

          {/* Guarantee / Note */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto max-w-3xl text-sm leading-relaxed tracking-wide text-slate-400"
          >
            NOTE: If I can’t improve revenue in 60 days, you shouldn’t pay me.
          </motion.p>
        </div>
      </div>

      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[60vh] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-3xl" />
      </div>
    </section>
  )
}
