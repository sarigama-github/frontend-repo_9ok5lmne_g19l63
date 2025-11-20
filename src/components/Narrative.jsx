import { motion } from 'framer-motion'

export default function Narrative() {
  return (
    <section className="relative z-10 mx-auto max-w-3xl px-6 pb-20">
      <div className="prose prose-invert prose-slate mx-auto">
        <motion.h2 initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.4}} className="mb-6 text-center text-3xl font-bold text-white">
          Why companies partner with me (and fire everyone else)
        </motion.h2>
        <p>Most agencies will take any client they can get.</p>
        <p>I won’t.</p>
        <p>Here’s why:</p>
        <p>Ah, average, the sweet nectar of forgettable marketing and brand voice everywhere..</p>
        <p>with run-of-the-mill scripts that could only fall on deaf ears.</p>
        <p>Its siren call beckons to the middle manager and seduces even the most well-intentioned organization.</p>
        <p>It’s so attainable, so in grasp.</p>
        <p>Average marketing is everywhere.</p>
        <ul>
          <li>Safe ideas…</li>
          <li>Recycled funnels…</li>
          <li>Forgettable messaging…</li>
          <li>And “good enough” copy that sounds like everyone else.</li>
        </ul>
        <p>If that’s what you want, you don’t need me.</p>
        <h3 className="mt-10 text-2xl font-bold">what you actually need is:</h3>
        <p>Revenue engines…</p>
        <p>I combine:</p>
        <ul>
          <li>Copywriting that drives decision</li>
          <li>Automation that keeps selling after everyone clocks out</li>
          <li>Funnels + VSLs that shorten buying cycles</li>
          <li>AI systems that removes manual labor</li>
        </ul>
        <p>Not deliverables.</p>
        <p>Systems that convert attention into revenue.</p>
        <p>Brands work with me because:</p>
        <ul>
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
    </section>
  )
}
