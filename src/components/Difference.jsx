import { motion } from 'framer-motion'
import SectionWrap from './SectionWrap'

const rows = [
  {
    left: 'Average Copywriter',
    right: 'Full-Stack Marketing Maniac',
    leftPoints: ['One-size scripts', 'basic email', 'limited scope.'],
    rightPoints: ['Automation', 'VSLs', 'high-ticket funnels', 'AI integration', 'brand transformation'],
  },
  {
    left: 'Average Copywriter',
    right: 'Strategic Conversion Partner',
    leftPoints: ['One-size-fits-all approach', 'Writes captions and emails'],
    rightPoints: ['Creates VSLs, offers, funnels', 'Builds automation & webinars'],
  },
]

export default function Difference() {
  return (
    <SectionWrap id="difference" tone="sky" title="Why companies partner with me (and fire everyone else)">
      <div className="space-y-6 sm:space-y-8 md:space-y-10">
        {rows.map((r, i) => (
          <motion.div
            key={i}
            initial={{opacity:0,y:12}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true, amount:0.2}}
            transition={{delay:i*0.05, duration:0.45}}
            className="grid grid-cols-1 gap-5 md:grid-cols-2"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
              <div className="pointer-events-none absolute -inset-10 -z-10 bg-gradient-to-tr from-slate-400/10 to-transparent blur-3xl"/>
              <div className="text-sm font-bold text-slate-300">{r.left}</div>
              <ul className="mt-4 space-y-3 text-sm text-slate-300/85 leading-[1.9]">
                {r.leftPoints.map(p => (
                  <li key={p} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400"/> <span>{p}</span></li>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
              <div className="pointer-events-none absolute -inset-10 -z-10 bg-gradient-to-tr from-indigo-400/10 to-emerald-300/10 blur-3xl"/>
              <div className="text-sm font-bold text-indigo-300">{r.right}</div>
              <ul className="mt-4 space-y-3 text-sm text-slate-300/85 leading-[1.9]">
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
