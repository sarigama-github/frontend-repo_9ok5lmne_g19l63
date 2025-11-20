import { motion } from 'framer-motion'

const tiers = [
  { name: 'Starter', price: '$2,500', features: ['1 landing page', 'Core analytics', 'Email capture', '2 rounds of edits'] },
  { name: 'Growth', price: '$6,500', features: ['Funnel build', 'Email + SMS flows', 'Ad creatives', 'A/B testing for 30 days'] },
  { name: 'Scale', price: 'Custom', features: ['Full-funnel system', 'Ongoing CRO', 'Weekly tests', 'Dedicated support'] },
]

export default function Pricing() {
  return (
    <section id="get-started" className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Simple pricing</h2>
        <p className="mt-2 text-slate-300/80">Pick a plan to launch. Upgrade when you’re ready to scale.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.06, duration: 0.45 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 backdrop-blur-md"
          >
            <div className="text-sm font-bold text-indigo-400">{t.name}</div>
            <div className="mt-2 text-3xl font-extrabold text-white">{t.price}</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-300/80">
              {t.features.map(f => (<li key={f} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400"/><span>{f}</span></li>))}
            </ul>
            <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white/10 px-4 py-2 font-semibold text-white hover:bg-white/20">Get started</a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
