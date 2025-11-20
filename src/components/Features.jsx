import { motion } from 'framer-motion'
import SectionWrap from './SectionWrap'

const features = [
  { title: 'Full-Stack Expertise', desc: 'Copywriting, automation, VSLs, and high-ticket funnels combined.' },
  { title: 'Results-Driven', desc: 'Turn offer chaos into revenue clarity for funded founders.' },
  { title: 'Brand Excellence', desc: 'Make your brand pop with visible and invisible funnels.' },
]

export default function Features() {
  return (
    <SectionWrap id="features" tone="emerald" title="Why it works" subtitle="A system, not a set of deliverables.">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{opacity:0,y:10}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true, amount:0.2}}
            transition={{delay:i*0.05, duration:0.45}}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-emerald-400/20 to-amber-300/20 blur-2xl" />
            <div className="text-sm font-bold text-emerald-300">{f.title}</div>
            <div className="mt-2 text-lg font-semibold text-white">{f.desc}</div>
            <motion.div initial={{scale:0.9, opacity:0}} whileInView={{scale:1, opacity:1}} viewport={{once:true}} transition={{delay:0.2}} className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-300 to-amber-300" />
          </motion.div>
        ))}
      </div>
    </SectionWrap>
  )
}
