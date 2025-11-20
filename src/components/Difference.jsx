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
    <SectionWrap id="difference" tone="sky" title="The Difference Between Average & Excellence">
      <div className="space-y-4">
        {rows.map((r, i) => (
          <motion.div
            key={i}
            initial={{opacity:0,y:12}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true, amount:0.2}}
            transition={{delay:i*0.05, duration:0.45}}
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="pointer-events-none absolute -inset-10 -z-10 bg-gradient-to-tr from-slate-400/10 to-transparent blur-3xl"/>
              <div className="text-sm font-bold text-slate-300">{r.left}</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-300/85 leading-relaxed">
                {r.leftPoints.map(p => (
                  <li key={p} className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400"/> <span>{p}</span></li>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="pointer-events-none absolute -inset-10 -z-10 bg-gradient-to-tr from-indigo-400/10 to-emerald-300/10 blur-3xl"/>
              <div className="text-sm font-bold text-indigo-300">{r.right}</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-300/85 leading-relaxed">
                {r.rightPoints.map(p => (
                  <li key={p} className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400"/> <span>{p}</span></li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrap>
  )
}
