import { motion } from 'framer-motion'

const features = [
  { title: 'Full-Stack Expertise', desc: 'Copywriting, automation, VSLs, and high-ticket funnels combined.' },
  { title: 'Results-Driven', desc: 'Turn offer chaos into revenue clarity for funded founders.' },
  { title: 'Brand Excellence', desc: 'Make your brand pop with visible and invisible funnels.' },
]

export default function Features() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 pb-16">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{opacity:0,y:10}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true, amount:0.2}}
            transition={{delay:i*0.05, duration:0.45}}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
          >
            <div className="text-sm font-bold text-indigo-400">{f.title}</div>
            <div className="mt-2 text-lg font-semibold text-white">{f.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
