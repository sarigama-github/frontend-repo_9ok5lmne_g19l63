import SectionWrap from './SectionWrap'

export default function CalendlyEmbed() {
  return (
    <SectionWrap id="calendar" tone="emerald" title="Book a 15‑min Fit Call" subtitle="Pick a time that works for you">
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
