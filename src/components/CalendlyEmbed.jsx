import SectionWrap from './SectionWrap'

export default function CalendlyEmbed() {
  const subtitle = (
    <span className="block text-base sm:text-lg leading-relaxed">
      If you're a personal brand, business owner, or funded founder ready to turn offer chaos into revenue{' '}
      <span className="font-semibold text-emerald-300">Book a 17‑min “fit check” now.</span>
      <br className="hidden sm:block" />
      <span className="mt-2 inline-block">and We’ll map one test you can run in 7 days..</span>
      <br />
      <span className="mt-2 inline-block rounded-md bg-emerald-400/10 px-2 py-1 text-emerald-200">No upfront fee for pilot</span>
      <br />
      <span className="mt-2 inline-block text-sm text-slate-300/90">
        NOTE: <span className="font-medium text-white">Clients see 10–30% ROI in 7–14 days..</span>
      </span>
    </span>
  )

  return (
    <SectionWrap id="calendar" tone="emerald" title="Book a 15‑min Fit Call" subtitle={subtitle}>
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur">
          <div className="aspect-[5/3] w-full">
            <iframe
              title="Calendly Scheduling"
              src="https://calendly.com/heycallmeash/45min?month=2025-11"
              className="h-full w-full rounded-xl"
              frameBorder="0"
            />
          </div>
        </div>
      </div>
    </SectionWrap>
  )
}
