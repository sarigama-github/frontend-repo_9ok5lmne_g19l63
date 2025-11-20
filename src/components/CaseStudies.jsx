import { motion } from 'framer-motion'

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
  },
]

export default function CaseStudies() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
      <h2 className="mb-6 text-center text-3xl font-bold text-white">Case Studies</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {studies.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{opacity:0,y:12}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true, amount:0.2}}
            transition={{delay:i*0.06, duration:0.45}}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
          >
            <div className="text-sm font-bold text-indigo-400">{s.title}</div>
            <div className="mt-1 text-lg font-semibold text-white">{s.summary}</div>
            <ul className="mt-3 space-y-1 text-slate-300/80 text-sm">
              {s.bullets.map(b => (
                <li key={b} className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400"/> <span>{b}</span></li>
              ))}
            </ul>
            <p className="mt-3 text-slate-300/80 text-sm">{s.result}</p>
            <blockquote className="mt-3 text-slate-200 italic">{s.quote}</blockquote>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
