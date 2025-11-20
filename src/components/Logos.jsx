import SectionWrap from './SectionWrap'

export default function Logos() {
  return (
    <SectionWrap id="logos" tone="sky">
      <div className="mb-6 text-center text-slate-300/80 leading-relaxed">Trusted by teams who care about growth</div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6 opacity-90">
        {["Acme","North","Beta","Wave","Quantum","Nimbus"].map((l) => (
          <div key={l} className="relative flex items-center justify-center rounded-xl border border-white/10 bg-white/5 py-4 text-sm text-slate-300">
            <div className="absolute -inset-6 -z-10 bg-gradient-to-tr from-white/5 to-transparent blur-3xl" />
            {l}
          </div>
        ))}
      </div>
    </SectionWrap>
  )
}
