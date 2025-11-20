import { motion } from 'framer-motion'

const blocks = [
  {
    title: 'VSL & Offer Creation',
    lead: 'Turn cold strangers into convinced buyers. FAST.',
    body: [
      'I build offers and scripts that do the heavy lifting for you.',
      'They snap attention, break resistance, and make buying feel like the natural next step.',
      'Just messaging that converts cold traffic into consistent revenue.',
      'Your VSL becomes the silent salesperson that works even when you don’t.',
    ],
    founder: '“Finally…someone who can take my ideas, sharpen the angle, and make it sell without me rewriting it..”',
  },
  {
    title: 'Funnel Architecture',
    lead: 'Engineer a path that that removes friction and builds trust automatically.',
    body: [
      'From first touch → nurture → conversion..',
      'I design funnels that guide prospects like a GPS toward the purchase..',
      'Every page, every email, every step is engineered to reduce hesitation and move prospects without hand-holding',
    ],
    founder: '“No more guessing or duct-taped systems.”',
  },
  {
    title: 'AI Integration',
    lead: 'Plug AI directly into your revenue engine.',
    body: [
      'I merge your marketing with automation + intelligent systems so you sell faster, personalize deeper, and scale content without burning brain cells',
    ],
    founder: '“This is how we stop wasting time and start printing leverage"',
  },
  {
    title: 'Copywriting & Content Strategies',
    lead: 'Words that influence + strategy that multiplies.',
    body: [
      'I create content and copy that hits emotional triggers, positions you as the only choice, and moves people to take action immediately',
      'Whether it’s emails, scripts, or long-form…the message lands, carries weight, and converts quietly in the background',
    ],
    founder: '“Say less. Just write what makes us money.”',
  },
]

export default function Premium() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
      <h2 className="mb-6 text-center text-3xl font-bold text-white">Premium Service and Offer</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {blocks.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{opacity:0,y:12}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true, amount:0.2}}
            transition={{delay:i*0.05, duration:0.45}}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
          >
            <div className="text-sm font-bold text-indigo-400">{b.title}</div>
            <div className="mt-1 text-lg font-semibold text-white">{b.lead}</div>
            <ul className="mt-3 space-y-1 text-sm text-slate-300/80">
              {b.body.map(line => (
                <li key={line} className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400"/> <span>{line}</span></li>
              ))}
            </ul>
            <p className="mt-3 text-slate-200 italic">Founder translation: {b.founder}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
