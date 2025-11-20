import { motion } from 'framer-motion'
import SectionWrap from './SectionWrap'

export default function Narrative() {
  return (
    <SectionWrap id="narrative" title="The Difference Between Average & Excellence" tone="violet">
      <div className="mx-auto max-w-3xl">
        <DecorBar />
        <div className="space-y-3 text-slate-200/95">
          <p>Most agencies will take any client they can get.</p>
          <p>I won’t.</p>
          <p>Here’s why:</p>
          <PullQuote>Ah, average, the sweet nectar of forgettable marketing and brand voice everywhere..</PullQuote>
          <p>with run-of-the-mill scripts that could only fall on deaf ears.</p>
          <p>Its siren call beckons to the middle manager and seduces even the most well-intentioned organization.</p>
          <p>It’s so attainable, so in grasp.</p>
          <p>Average marketing is everywhere.</p>
          <ul className="ml-5 list-disc space-y-2 text-slate-300/90">
            <li>Safe ideas…</li>
            <li>Recycled funnels…</li>
            <li>Forgettable messaging…</li>
            <li>And “good enough” copy that sounds like everyone else.</li>
          </ul>
          <p>If that’s what you want, you don’t need me.</p>
          <h3 className="mt-8 text-xl font-bold">what you actually need is:</h3>
          <p>Revenue engines…</p>
          <p>I combine:</p>
          <ul className="ml-5 list-disc space-y-2 text-slate-300/90">
            <li>Copywriting that drives decision</li>
            <li>Automation that keeps selling after everyone clocks out</li>
            <li>Funnels + VSLs that shorten buying cycles</li>
            <li>AI systems that removes manual labor</li>
          </ul>
          <p>Not deliverables.</p>
          <p>Systems that convert attention into revenue.</p>
          <p>Brands work with me because:</p>
          <ul className="ml-5 list-disc space-y-2 text-slate-300/90">
            <li>Their offer becomes clearer.</li>
            <li>Their messaging becomes sharper.</li>
            <li>Their customers take action.</li>
            <li>And most importantly…their business stops leaking money.</li>
          </ul>
          <p>That’s why I don't do average, and I am not even sorry about it.</p>
          <p>because you deserve more than average..</p>
          <p>If that aligns with what you want, we’ll work well together.</p>
          <p className="text-center font-semibold">Ready?</p>
        </div>
      </div>
    </SectionWrap>
  )
}

function DecorBar() {
  return (
    <motion.div initial={{width:0, opacity:0}} whileInView={{width:'100%', opacity:1}} viewport={{once:true}} transition={{duration:0.6}} className="mx-auto mb-6 h-1 rounded-full bg-gradient-to-r from-fuchsia-400 via-sky-400 to-amber-300" />
  )
}

function PullQuote({ children }) {
  return (
    <motion.blockquote initial={{opacity:0, x:-8}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration:0.45}} className="my-6 rounded-xl border border-white/10 bg-white/5 p-4 text-slate-200">
      {children}
    </motion.blockquote>
  )
}
