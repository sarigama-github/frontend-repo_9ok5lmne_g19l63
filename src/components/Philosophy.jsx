import { motion } from 'framer-motion'
import SectionWrap from './SectionWrap'

export default function Philosophy() {
  return (
    <SectionWrap id="philosophy" tone="violet" title="My Philosophy">
      <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300/85 backdrop-blur-md">
        <DecorDot />
        <p className="italic leading-relaxed">"You get what you give."</p>
        <p className="mt-4 leading-relaxed">If you’re just looking for another copywriter for captions and emails, then we may not be the perfect fit.</p>
        <p className="leading-relaxed">Cause your average “one-size copywriter" cannot set up immortal automation and webinars,</p>
        <p className="leading-relaxed">They cannot script your VSLs and create offers that make even the most skeptical fall for it.</p>
        <p className="leading-relaxed">They cannot create funnels that will sell your high-ticket services and make people buy with smiles on their faces.</p>
        <p className="leading-relaxed">They cannot help you make your brand Pop or help you anywhere with AI.</p>
      </div>
    </SectionWrap>
  )
}

function DecorDot() {
  return (
    <motion.span initial={{scale:0, opacity:0}} whileInView={{scale:1, opacity:1}} viewport={{once:true}} transition={{duration:0.4}} className="mb-4 inline-block h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-amber-300" />
  )
}
