import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background and Spline */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),rgba(30,41,59,0.05)_60%,transparent_70%)] blur-2xl" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-slate-950/90 to-transparent" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[620px] w-[620px] max-w-[90vw] max-h-[60vh] sm:max-h-[70vh] md:max-h-[80vh]">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-24 sm:pt-36 sm:pb-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl bg-gradient-to-b from-white to-slate-300"
        >
          Turn clicks into customers
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mx-auto mt-4 max-w-2xl text-base text-slate-300/85 sm:text-lg"
        >
          Done-for-you funnels and conversion-first websites that launch fast, scale smoothly, and grow revenue.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.a
            href="#get-started"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center justify-center rounded-2xl px-8 py-4 text-lg font-black uppercase tracking-wider text-white shadow-[0_10px_40px_rgba(99,102,241,0.45)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
          >
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400" />
            <span className="absolute inset-0 rounded-2xl bg-[linear-gradient(to_bottom,rgba(255,255,255,0.25),rgba(255,255,255,0)_40%)]" />
            <span className="relative flex items-center gap-2 drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)]">
              Get My Free Funnel Strategy
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </span>
            <span className="pointer-events-none absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-indigo-500/40 via-fuchsia-500/40 to-amber-400/40 blur-2xl opacity-70" />
          </motion.a>

          <a href="#work" className="text-slate-300/85 hover:text-white/95 font-semibold">See how it works</a>
        </motion.div>
      </div>
    </section>
  )
}
