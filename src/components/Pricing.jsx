import { motion } from 'framer-motion'
import SectionWrap from './SectionWrap'

const tiers = [
  { name: 'Starter', price: '$2,500', features: ['1 landing page', 'Core analytics', 'Email capture', '2 rounds of edits'], color: 'from-sky-400/15 to-fuchsia-400/10' },
  { name: 'Growth', price: '$6,500', features: ['Funnel build', 'Email + SMS flows', 'Ad creatives', 'A/B testing for 30 days'], color: 'from-emerald-400/15 to-amber-300/10' },
  { name: 'Scale', price: 'Custom', features: ['Full-funnel system', 'Ongoing CRO', 'Weekly tests', 'Dedicated support'], color: 'from-indigo-400/15 to-rose-400/10' },
]

export default function Pricing() {
  return (
    <SectionWrap id="pricing" tone="amber" title="Simple pricing" subtitle="Pick a plan to launch. Upgrade when you’re ready to scale.">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.06, duration: 0.45 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
          >
            <div className={`pointer-events-none absolute -inset-12 -z-10 bg-gradient-to-tr ${t.color} blur-3xl`} />
            <div className="text-sm font-bold text-amber-300">{t.name}</div>
            <div className="mt-2 text-3xl font-extrabold text-white">{t.price}</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-300/85 leading-relaxed">
              {t.features.map(f => (<li key={f} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300"/><span>{f}</span></li>))}
            </ul>
            <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white/10 px-4 py-2 font-semibold text-white hover:bg-white/20">Get started</a>
          </motion.div>
        ))}
      </div>
    </SectionWrap>
  )
}
