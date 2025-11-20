import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      {/* Background gradients for depth */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),rgba(30,41,59,0.05)_60%,transparent_70%)] blur-2xl" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-slate-950/80 to-transparent" />
      </div>

      {/* Spline animated aura (center) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[620px] w-[620px] max-w-[90vw] max-h-[60vh] sm:max-h-[70vh] md:max-h-[80vh]">
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Soft ring highlight */}
          <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center justify-center">
            <img
              src="/flame-icon.svg"
              alt="Flames"
              className="h-20 w-20 drop-shadow-[0_0_35px_rgba(99,102,241,0.7)]"
            />
          </div>

          <h1 className="mx-auto max-w-3xl bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl bg-gradient-to-b from-white to-slate-300">
            Build apps by simply talking
          </h1>

          <p className="mx-auto max-w-2xl text-base text-slate-300/80 sm:text-lg">
            Describe what you want. Watch it come to life with an intelligent, interactive builder.
          </p>

          {/* CTA Row */}
          <div className="mt-4 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center justify-center rounded-2xl px-8 py-4 text-lg font-black uppercase tracking-wider text-white shadow-[0_10px_40px_rgba(99,102,241,0.45)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
            >
              {/* Button vibrant background */}
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400" />
              {/* Inner gloss and animated sheen */}
              <span className="absolute inset-0 rounded-2xl bg-[linear-gradient(to_bottom,rgba(255,255,255,0.25),rgba(255,255,255,0)_40%)]" />
              <span className="relative flex items-center gap-2 drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)]">
                Start Building
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              {/* Glow ring */}
              <span className="pointer-events-none absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-indigo-500/40 via-fuchsia-500/40 to-amber-400/40 blur-2xl opacity-70" />
            </motion.button>

            <motion.a
              href="#learn-more"
              whileHover={{ x: 2 }}
              className="text-slate-300/80 hover:text-white/90 font-semibold"
            >
              Learn more
            </motion.a>
          </div>
        </motion.div>

        {/* Quick steps card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-16 w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {["Describe your idea", "Watch it build", "Refine & iterate"].map((title, i) => (
              <div key={title} className="text-left">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500 text-white font-bold">
                  {i + 1}
                </div>
                <h3 className="mb-1 font-semibold text-white">{title}</h3>
                <p className="text-sm text-slate-300/70">
                  {i === 0 && 'Tell the AI what you want to create.'}
                  {i === 1 && 'See your product appear instantly here.'}
                  {i === 2 && 'Keep chatting to polish and add features.'}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <div id="learn-more" className="mt-10 text-sm text-slate-400">
          No coding required • Just describe what you want
        </div>
      </div>
    </div>
  )
}

export default App
