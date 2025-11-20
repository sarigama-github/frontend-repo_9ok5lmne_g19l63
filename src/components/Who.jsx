import { motion } from 'framer-motion'
import SectionWrap from './SectionWrap'

const audiences = [
  {
    title: 'Ambitious Personal Brands & Entrepreneurs',
    body: [
      "You're ready to scale your impact and revenue, but find yourself overwhelmed by the demands of expert marketing strategy and compelling copywriting.",
      'Without a dedicated team or sufficient time, translating your vision into conversions is a constant challenge.',
      'I provide the full-stack expertise to build high-performing funnels and messaging, freeing you to focus on your core genius.',
    ],
    color: 'from-sky-400/15 to-emerald-300/10',
  },
  {
    title: 'High-Growth Funded Founders',
    body: [
      "You've secured funding and now face the critical task of rapid, sustainable growth.",
      "Your challenge isn't just marketing; it's transforming sophisticated offers into a predictable revenue machine.",
      'I deliver the strategic full-stack marketing systems needed to eliminate offer confusion, optimize conversions, and ensure consistent, scalable revenue streams that delight investors.',
    ],
    color: 'from-fuchsia-400/15 to-amber-300/10',
  },
]

export default function Who() {
  return (
    <SectionWrap id="who" tone="emerald" title="Who I Empower to Win">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {audiences.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{opacity:0,y:12}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true, amount:0.2}}
            transition={{delay:i*0.05, duration:0.45}}
            className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
          >
            <div className={`pointer-events-none absolute -inset-12 -z-10 bg-gradient-to-tr ${a.color} blur-3xl`} />
            <div className="text-sm font-bold text-emerald-300">{a.title}</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-300/85">
              {a.body.map(line => (
                <li key={line} className="flex gap-2 leading-relaxed"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300"/> <span>{line}</span></li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrap>
  )
}
