import { motion } from 'framer-motion'

export default function TopMessage() {
  return (
    <section className="relative z-20 flex items-center justify-center px-6">
      {/* Immersive background behind the headline */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Ambient wash */}
        <div className="absolute left-1/2 top-1/2 h-[80vh] w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-[4rem] bg-[radial-gradient(60%_60%_at_50%_40%,rgba(56,189,248,0.18),transparent_60%)] blur-2xl" />

        {/* Beating, modern color object (sits right behind copy) */}
        <motion.div
          aria-hidden
          className="absolute left-1/2 top-[44%] h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0.9, scale: 1 }}
          animate={{
            opacity: 1,
            rotate: 360,
            scale: [1, 1.065, 1, 1.045, 1], // subtle heartbeat
            filter: [
              'saturate(115%) hue-rotate(0deg) blur(42px)',
              'saturate(130%) hue-rotate(8deg) blur(46px)',
              'saturate(115%) hue-rotate(0deg) blur(42px)',
              'saturate(125%) hue-rotate(-6deg) blur(44px)',
              'saturate(115%) hue-rotate(0deg) blur(42px)'
            ],
          }}
          transition={{
            rotate: { duration: 90, ease: 'linear', repeat: Infinity },
            scale: { duration: 2.6, times: [0, 0.28, 0.55, 0.78, 1], ease: ['easeInOut','easeOut','easeInOut','easeOut'], repeat: Infinity },
            filter: { duration: 2.6, repeat: Infinity, ease: 'easeInOut' },
            opacity: { duration: 0.8 },
          }}
          style={{ mixBlendMode: 'screen' }}
        >
          {/* SVG blob with premium gradient fill */}
          <motion.svg
            viewBox="0 0 600 600"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <radialGradient id="blobGlow" cx="50%" cy="45%" r="60%">
                <stop offset="0%" stopColor="rgba(99,102,241,0.28)" />
                <stop offset="35%" stopColor="rgba(56,189,248,0.25)" />
                <stop offset="68%" stopColor="rgba(16,185,129,0.22)" />
                <stop offset="100%" stopColor="rgba(236,72,153,0.20)" />
              </radialGradient>
              <linearGradient id="pulseStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(16,185,129,0.85)" />
                <stop offset="50%" stopColor="rgba(56,189,248,0.9)" />
                <stop offset="100%" stopColor="rgba(236,72,153,0.85)" />
              </linearGradient>
            </defs>

            {/* Core blob */}
            <g>
              <path
                d="M300,90 C380,90 470,140 510,210 C550,280 540,360 500,430 C460,500 390,540 300,540 C210,540 135,505 95,435 C55,365 60,275 105,205 C150,135 220,90 300,90 Z"
                fill="url(#blobGlow)"
              />
            </g>

            {/* Soft inner light */}
            <ellipse cx="300" cy="250" rx="150" ry="110" fill="rgba(255,255,255,0.09)" />

            {/* Pulsing ring for a heartbeat accent */}
            <motion.circle
              cx="300"
              cy="315"
              r="160"
              fill="none"
              stroke="url(#pulseStroke)"
              strokeWidth="3"
              initial={{ opacity: 0.35, scale: 0.98 }}
              animate={{ opacity: [0.35, 0.15, 0.35], scale: [0.98, 1.05, 0.98] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
              style={{ filter: 'blur(1px)' }}
            />
          </motion.svg>
        </motion.div>

        {/* Side glow that gently drifts for parallax depth */}
        <motion.div
          aria-hidden
          className="absolute left-[8%] top-[18%] h-[42vmin] w-[42vmin] rounded-full"
          initial={{ x: -10, y: 0, opacity: 0.55 }}
          animate={{ x: 18, y: 10, opacity: 0.75 }}
          transition={{ duration: 11, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(59,130,246,0.22), transparent 60%)',
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
