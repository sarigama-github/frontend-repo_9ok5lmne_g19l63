import SectionWrap from './SectionWrap'

const faqs = [
  { q: 'How fast can we launch?', a: 'Most landing pages go live in 7–10 days. Full funnels typically 2–4 weeks depending on scope.' },
  { q: 'Do you handle copy + design?', a: 'Yes. We handle messaging, design, and implementation so you can focus on growth.' },
  { q: 'What tools do you use?', a: 'We work with your stack—Webflow/Framer, GA4, Meta/Google ads, Klaviyo/ActiveCampaign, and more.' },
  { q: 'Do you offer retainers?', a: 'Yes. Growth and Scale plans include ongoing optimization and A/B testing.' },
]

export default function FAQ() {
  return (
    <SectionWrap id="faq" tone="violet" title="FAQs" subtitle="Quick answers to common questions.">
      <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
        {faqs.map((f) => (
          <details key={f.q} className="group py-3 open:py-4">
            <summary className="cursor-pointer list-none font-semibold text-white marker:hidden">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400"/>
                {f.q}
              </span>
            </summary>
            <p className="mt-2 text-slate-300/85 leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </SectionWrap>
  )
}
