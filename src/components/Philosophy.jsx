import { motion } from 'framer-motion'
import SectionWrap from './SectionWrap'

export default function Philosophy() {
  return (
    <SectionWrap id="philosophy" tone="violet" title="My Philosophy">
      {/* Vibrant background accents for immersion */}
      <div className="relative mx-auto max-w-3xl">
        <div className="pointer-events-none absolute -inset-6 -z-10">
          <div className="absolute -top-6 left-1/2 h-60 w-[110%] -translate-x-1/2 rotate-2 rounded-[2rem] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(139,92,246,0.25),rgba(236,72,153,0.2),rgba(16,185,129,0.2),rgba(56,189,248,0.2))] blur-2xl" />
          <div className="absolute top-10 left-1/2 h-40 w-[80%] -translate-x-1/2 rounded-[2rem] bg-[radial-gradient(60%_60%_at_50%_50%,rgba(255,255,255,0.06),transparent_70%)]" />
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300/85 backdrop-blur-md">
          <DecorDot />
          <p className="italic leading-relaxed">"You get what you give."</p>
          <div className="space-y-4 pt-4">
            <p className="leading-relaxed">If you’re just looking for another copywriter for captions and emails, then we may not be the perfect fit.</p>
            <p className="leading-relaxed">Cause your average “one-size copywriter" cannot set up immortal automation and webinars,</p>
            <p className="leading-relaxed">They cannot script your VSLs and create offers that make even the most skeptical fall for it.</p>
            <p className="leading-relaxed">They cannot create funnels that will sell your high-ticket services and make people buy with smiles on their faces.</p>
            <p className="leading-relaxed">They cannot help you make your brand Pop or help you anywhere with AI.</p>
          </div>
        </div>
      </div>
    </SectionWrap>
  )
}

function DecorDot() {
  return (
    <motion.span initial={{scale:0, opacity:0}} whileInView={{scale:1, opacity:1}} viewport={{once:true}} transition={{duration:0.4}} className="mb-4 inline-block h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-amber-300" />
  )
}
