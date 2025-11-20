import { motion } from 'framer-motion'
import SectionWrap from './SectionWrap'

export default function Intro() {
  return (
    <SectionWrap tone="sky">
      <div className="mx-auto max-w-4xl text-center">
        <motion.p initial={{opacity:0,y:6}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-sm text-slate-300/90 tracking-wide">Systems used behind brands trusted by Mercedes, Porsche, and Lamborghini.</motion.p>
        <motion.h1 initial={{opacity:0,y:6}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.05}} className="mt-4 text-2xl sm:text-3xl font-semibold text-white leading-relaxed">I build your revenue engine and turn your content into paying customers in 60 days.</motion.h1>
        <motion.p initial={{opacity:0,y:6}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1}} className="mt-4 text-slate-200/90 leading-relaxed">Not an agency. No retainer.</motion.p>
        <motion.p initial={{opacity:0,y:6}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.12}} className="mt-2 text-slate-300/90 leading-relaxed">I install your systems (funnels + emails + automation) tied to outcomes.</motion.p>
        <motion.p initial={{opacity:0,y:6}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.14}} className="mt-4 text-emerald-300 leading-relaxed">18 booked calls/week from cold traffic using this exact playbook</motion.p>
        <motion.p initial={{opacity:0,y:6}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.16}} className="mt-4 text-slate-400 leading-relaxed">NOTE: If I can’t improve revenue in 60 days, you shouldn’t pay me.</motion.p>
      </div>
    </SectionWrap>
  )
}
