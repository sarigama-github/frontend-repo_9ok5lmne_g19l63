import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),rgba(30,41,59,0.05)_60%,transparent_70%)] blur-2xl" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-slate-950/90 to-transparent" />
      </div>

      {/* Content with embedded video now */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-10 pb-16 text-center">
        <div className="mx-auto w-full max-w-4xl">
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

        {/* Note below the embedded video */}
        <div className="mx-auto mt-4 max-w-3xl text-slate-300">
          <p className="text-sm tracking-wide">NOTE: If I can’t improve revenue in 60 days, you shouldn’t pay me.</p>
        </div>

        {/* Post-video actions */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#calendar"
            className="group relative inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-bold text-white transition hover:scale-[1.02]"
          >
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-sky-500 to-amber-400" />
            <span className="relative">Check availability</span>
          </a>
          <a
            href="#calendar"
            className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Book a 15‑min fit call
          </a>
        </motion.div>
      </div>
    </section>
  )
}
