import { motion } from 'framer-motion'

const steps = [
  { n: '01', title: 'Kickoff & audit', desc: 'We clarify goals, audience, and offers. Then audit assets and find quick wins.' },
  { n: '02', title: 'Strategy & wireframes', desc: 'We map your funnel, offers, and pages with messaging, structure, and proof.' },
  { n: '03', title: 'Build & launch', desc: 'We execute the stack—pages, automations, tracking—and ship fast.' },
  { n: '04', title: 'Test & scale', desc: 'We A/B test, iterate weekly, and scale the winners to grow revenue.' },
]

export default function Process() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">How we work</h2>
        <p className="mt-2 text-slate-300/80">Simple, fast, and focused on outcomes.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.05, duration: 0.45 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
          >
            <div className="text-sm font-bold text-indigo-400">{s.n}</div>
            <h3 className="mt-1 text-xl font-semibold text-white">{s.title}</h3>
            <p className="mt-2 text-slate-300/80">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
