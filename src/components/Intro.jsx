import { motion } from 'framer-motion'

export default function Intro() {
  return (
    <section className="relative z-10 mx-auto max-w-4xl px-6 pb-12 text-center">
      <p className="text-sm text-slate-300/80">Systems used behind brands trusted by Mercedes, Porsche, and Lamborghini.</p>
      <h1 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">I build your revenue engine and turn your content into paying customers in 60 days.</h1>
      <p className="mt-3 text-slate-300/85">Not an agency. No retainer.</p>
      <p className="mt-1 text-slate-300/85">I install your systems (funnels + emails + automation) tied to outcomes.</p>
      <p className="mt-3 text-emerald-300">18 booked calls/week from cold traffic using this exact playbook</p>
      <p className="mt-3 text-slate-400">NOTE: If I can’t improve revenue in 60 days, you shouldn’t pay me.</p>
    </section>
  )
}
