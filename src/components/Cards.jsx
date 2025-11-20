import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Funnel Strategy',
    desc: 'Audit your offers and map the fastest path from click to customer with a conversion plan built for your business.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h18M5 8h14M7 12h10M9 16h6M11 20h2"/></svg>
    ),
  },
  {
    title: 'Landing Pages',
    desc: 'Launch high-converting landing pages tailored to your ICP with crisp copy, proof, and frictionless UX.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h10M4 18h6"/></svg>
    ),
  },
  {
    title: 'Email & SMS',
    desc: 'Automations that nurture, upsell, and recover lost revenue with segmented flows and irresistible offers.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7"/></svg>
    ),
  },
  {
    title: 'Ads that Convert',
    desc: 'Creative + targeting that compounds. Spark attention at the top and keep the momentum all the way to checkout.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A2 2 0 0122 9.528V14.5a2 2 0 01-1.447 1.914L15 18V10z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6h9M3 10h9M3 14h6M3 18h3"/></svg>
    ),
  },
  {
    title: 'CRO & A/B Tests',
    desc: 'Relentless iteration across pages and flows. We ship tests weekly and keep only the winners.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4h10M11 8h10M11 12h10M4 16h17M4 20h17M4 12h4"/></svg>
    ),
  },
  {
    title: 'Offer Design',
    desc: 'Positioning, guarantees, and irresistible bundles that lift AOV and lower CAC across your funnel.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3v9h6v-9c0-1.657-1.343-3-3-3z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11a7 7 0 0114 0v9H5v-9z"/></svg>
    ),
  },
  {
    title: 'Analytics Setup',
    desc: 'Track what matters, not vanity metrics. Clean dashboards that show how to grow faster.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 19h16M7 10v6M11 6v10M15 13v3M19 8v8"/></svg>
    ),
  },
  {
    title: 'Full Funnel Builds',
    desc: 'From ad to checkout to retention—launch an end‑to‑end system engineered for compounding growth.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4l2 4 4 .5-3 3 .8 4.5-3.8-2-3.8 2 .8-4.5-3-3 4-.5 2-4z"/></svg>
    ),
  },
]

export default function Cards() {
  return (
    <section id="work" className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">What you get</h2>
        <p className="mt-2 text-slate-300/80">Eight pieces that work together to convert more of the traffic you already have.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.03, duration: 0.45 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                {c.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{c.title}</h3>
            </div>
            <p className="mt-3 text-sm text-slate-300/80">{c.desc}</p>
            <div className="pointer-events-none absolute -inset-1 -z-10 scale-105 rounded-3xl bg-gradient-to-r from-indigo-500/10 via-fuchsia-500/10 to-amber-400/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
