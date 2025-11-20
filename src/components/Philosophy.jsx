import { motion } from 'framer-motion'

export default function Philosophy() {
  return (
    <section className="relative z-10 mx-auto max-w-3xl px-6 pb-20">
      <h2 className="mb-4 text-center text-3xl font-bold text-white">My Philosophy</h2>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300/85 backdrop-blur-md">
        <p className="italic">"You get what you give."</p>
        <p className="mt-3">If you’re just looking for another copywriter for captions and emails, then we may not be the perfect fit.</p>
        <p>Cause your average “one-size copywriter" cannot set up immortal automation and webinars,</p>
        <p>They cannot script your VSLs and create offers that make even the most skeptical fall for it.</p>
        <p>They cannot create funnels that will sell your high-ticket services and make people buy with smiles on their faces.</p>
        <p>They cannot help you make your brand Pop or help you anywhere with AI.</p>
      </div>
    </section>
  )
}
