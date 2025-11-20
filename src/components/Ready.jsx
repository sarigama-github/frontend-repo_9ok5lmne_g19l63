import { motion } from 'framer-motion'
import SectionWrap from './SectionWrap'

export default function Ready() {
  return (
    <SectionWrap id="ready" tone="rose" title="Ready to Scale?">
      <div className="mx-auto max-w-3xl relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300/85 backdrop-blur-md">
        <div className="pointer-events-none absolute -inset-10 -z-10 bg-gradient-to-tr from-rose-400/15 to-amber-300/10 blur-3xl"/>
        <Chip />
        <p className="mb-3 leading-relaxed">But first…</p>
        <p className="leading-relaxed">Let me confess something with a straight face.</p>
        <p className="leading-relaxed">I’m not a wandering messiah…</p>
        <p className="leading-relaxed">I cannot help every single business I get in touch with.</p>
        <p className="leading-relaxed">I’m just a simple, lucky 18-year-old who has worked with 6-figure brands and is helplessly in love with making money head over heels since 14.</p>
        <p className="mt-3 leading-relaxed">Simply put, before you waste your time and your dime,</p>
        <p className="leading-relaxed"> here are 4 minimum conditions that must exist for it to make sense for you to consider me:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
          <li>You’re already selling something that works, but your back-end is dusty or non-existent</li>
          <li>You’ve already got money to finance, a first-class product, traffic sources.</li>
          <li>Your operation must already be somewhat profitable because potential is not enough. I cannot multiply zeros!</li>
          <li>And finally, you are serious about getting to $100k/m with digital products, coaching, SaaS, or content</li>
        </ul>
        <p className="mt-4 leading-relaxed">If you're a personal brand, business owner, or funded founder ready to turn offer chaos into revenue <a className="text-rose-300 underline" href="https://calendly.com/heycallmeash/45min" target="_blank" rel="noreferrer">Book a 17-min “fit check” now</a>.</p>
        <p className="leading-relaxed">and We’ll map one test you can run in 7 days..</p>
        <p className="mt-3 font-semibold leading-relaxed">No upfront fee for pilot</p>
        <p className="text-sm text-slate-400 leading-relaxed">NOTE: Clients see 10–30% ROI in 7–14 days..</p>
        <p className="mt-3 text-rose-300 leading-relaxed">WARNING: Only serious growth checks. If you book, expect an actionable 15-min plan.</p>
      </div>
    </SectionWrap>
  )
}

function Chip() {
  return (
    <motion.div initial={{opacity:0, x:-6}} whileInView={{opacity:1, x:0}} viewport={{once:true}} className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-rose-400 to-amber-300"/>
      Read this before booking
    </motion.div>
  )
}
