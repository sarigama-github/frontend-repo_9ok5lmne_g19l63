import { motion } from 'framer-motion'
import SectionWrap from './SectionWrap'

const rows = [
  {
    left: 'Average Copywriter',
    right: 'Full-Stack Marketing Maniac',
    leftPoints: [
      'One-size scripts',
      'Basic email output',
      'Limited scope and zero systems',
    ],
    rightPoints: [
      'Automation that keeps selling after hours',
      'VSLs + high-ticket funnels that shorten buying cycles',
      'AI integration that removes manual labor',
      'Brand + offer transformation, end-to-end',
    ],
  },
  // second comparison removed per request
]

export default function Difference() {
  return (
    <SectionWrap id="difference" tone="sky" title="Why companies partner with me (and fire everyone else)">
      <div className="space-y-8 sm:space-y-10 md:space-y-12">
        {rows.map((r, i) => (
          <motion.div
            key={i}
            initial={{opacity:0,y:12}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true, amount:0.2}}
            transition={{delay:i*0.05, duration:0.45}}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
              <div className="pointer-events-none absolute -inset-10 -z-10 bg-gradient-to-tr from-slate-400/10 to-transparent blur-3xl"/>
              <div className="text-sm font-bold text-slate-300">{r.left}</div>
              <ul className="mt-5 space-y-4 text-sm leading-[1.95] text-slate-300/85">
                {r.leftPoints.map(p => (
                  <li key={p} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400"/> <span>{p}</span></li>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
              <div className="pointer-events-none absolute -inset-10 -z-10 bg-gradient-to-tr from-indigo-400/10 to-emerald-300/10 blur-3xl"/>
              <div className="text-sm font-bold text-indigo-300">{r.right}</div>
              <ul className="mt-5 space-y-4 text-sm leading-[1.95] text-slate-300/85">
                {r.rightPoints.map(p => (
                  <li key={p} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-400"/> <span>{p}</span></li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrap>
  )
}
