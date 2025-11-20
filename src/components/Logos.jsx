export default function Logos() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
      <div className="mb-6 text-center text-slate-300/70">Trusted by teams who care about growth</div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6 opacity-80">
        {["Acme","North","Beta","Wave","Quantum","Nimbus"].map((l) => (
          <div key={l} className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 py-4 text-sm text-slate-300">
            {l}
          </div>
        ))}
      </div>
    </section>
  )
}
