import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks! We will reach out shortly.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="relative z-10 mx-auto max-w-3xl px-6 pb-24">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Request your strategy</h2>
        <p className="mt-2 text-slate-300/80">Tell us about your goals. We’ll send a free funnel outline.</p>
      </div>
      <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input required placeholder="Full name" className="rounded-lg border border-white/10 bg-white/10 p-3 text-white placeholder-slate-300/60 outline-none focus:border-indigo-400" />
          <input required type="email" placeholder="Email" className="rounded-lg border border-white/10 bg-white/10 p-3 text-white placeholder-slate-300/60 outline-none focus:border-indigo-400" />
          <input placeholder="Website" className="rounded-lg border border-white/10 bg-white/10 p-3 text-white placeholder-slate-300/60 outline-none focus:border-indigo-400 sm:col-span-2" />
          <textarea required placeholder="What are you trying to achieve?" rows={4} className="rounded-lg border border-white/10 bg-white/10 p-3 text-white placeholder-slate-300/60 outline-none focus:border-indigo-400 sm:col-span-2" />
        </div>
        <button className="mt-4 w-full rounded-xl bg-white/10 px-4 py-3 font-semibold text-white hover:bg-white/20">Send</button>
        {status && <p className="mt-3 text-center text-sm text-emerald-300">{status}</p>}
      </form>
    </section>
  )
}
