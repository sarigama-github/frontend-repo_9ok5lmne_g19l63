import { motion } from 'framer-motion'
import SectionWrap from './SectionWrap'

const studies = [
  {
    title: 'CargoPro - B2B Logistics Startup',
    summary: 'Turned chaos into a revenue system (fast)',
    bullets: [
      'Tore down their dead funnel',
      'rebuilt the entire engine',
      'rewrote their sequences',
    ],
    result: 'Result: +20% lift in opens → meetings → revenue in 47 days',
    quote: '“Logistics shouldn’t move this fast… but ours suddenly did.”',
    color: 'from-indigo-400/15 to-sky-400/10',
    img: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Motion Creators - 300k+ Audience',
    summary: 'Revived a frozen list → booked 28 calls/month.',
    bullets: [
      'Cleaned the list',
      'rewrote messaging',
      'and engineered sequences with  purpose',
    ],
    result: 'Result: From dead list → 28 sales conversations/month.',
    quote: '“Didn’t know our own audience could hit this hard.”',
    color: 'from-fuchsia-400/15 to-rose-400/10',
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Dr. Vegan - 6M+ Followers on Social  Media',
    summary: 'Turned content influence into real revenue.',
    bullets: [
      'engineered a funnel + VSL flow.',
      'email system that stopped the leaks.',
      'The limited-time ebook promo alone pulled in over $12k.',
    ],
    result: 'Result: New profitable channel from the existing audience + $12K/m in digital sales.',
    quote: '“Same followers. Very different revenue.”',
    color: 'from-amber-400/15 to-emerald-400/10',
    img: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function CaseStudies() {
  return (
    <SectionWrap id="case-studies" tone="rose" title="Case Studies">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {studies.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{opacity:0,y:12}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true, amount:0.2}}
            transition={{delay:i*0.06, duration:0.45}}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-0 backdrop-blur-md`}
          >
            <div className={`pointer-events-none absolute -inset-12 -z-10 bg-gradient-to-tr ${s.color} blur-3xl`} />
            <div className="relative h-40 w-full overflow-hidden">
              <img src={s.img} alt="Case study visual" className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent"/>
            </div>
            <div className="p-6">
              <div className="text-sm font-bold text-indigo-300">{s.title}</div>
              <div className="mt-1 text-lg font-semibold text-white leading-relaxed">{s.summary}</div>
              <ul className="mt-3 space-y-1 text-sm text-slate-300/80">
                {s.bullets.map(b => (
                  <li key={b} className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400"/> <span>{b}</span></li>
                ))}
              </ul>
              <p className="mt-3 text-slate-300/80 text-sm leading-relaxed">{s.result}</p>
              <blockquote className="mt-3 text-slate-200 italic leading-relaxed">{s.quote}</blockquote>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrap>
  )
}
