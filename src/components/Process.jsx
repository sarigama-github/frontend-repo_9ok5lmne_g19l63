import { motion } from 'framer-motion'
import SectionWrap from './SectionWrap'

const steps = [
  { n: '01', title: 'Kickoff & audit', desc: 'We clarify goals, audience, and offers. Then audit assets and find quick wins.' },
  { n: '02', title: 'Strategy & wireframes', desc: 'We map your funnel, offers, and pages with messaging, structure, and proof.' },
  { n: '03', title: 'Build & launch', desc: 'We execute the stack—pages, automations, tracking—and ship fast.' },
  { n: '04', title: 'Test & scale', desc: 'We A/B test, iterate weekly, and scale the winners to grow revenue.' },
]

export default function Process() {
  return (
    <SectionWrap id="process" tone="amber" title="How we work" subtitle="Simple, fast, and focused on outcomes.">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.05, duration: 0.45 }}
            className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
          >
            <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-amber-300/20 to-fuchsia-400/20 blur-2xl" />
            <div className="text-sm font-bold text-amber-300">{s.n}</div>
            <h3 className="mt-1 text-xl font-semibold text-white leading-relaxed">{s.title}</h3>
            <p className="mt-2 text-slate-300/85 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrap>
  )
}
