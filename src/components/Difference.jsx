import { motion } from 'framer-motion'

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
    <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
      <h2 className="mb-6 text-center text-3xl font-bold text-white">The Difference Between Average & Excellence</h2>
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
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-bold text-slate-300">{r.left}</div>
              <ul className="mt-3 space-y-1 text-sm text-slate-300/80">
                {r.leftPoints.map(p => (
                  <li key={p} className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400"/> <span>{p}</span></li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-bold text-indigo-400">{r.right}</div>
              <ul className="mt-3 space-y-1 text-sm text-slate-300/80">
                {r.rightPoints.map(p => (
                  <li key={p} className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400"/> <span>{p}</span></li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
