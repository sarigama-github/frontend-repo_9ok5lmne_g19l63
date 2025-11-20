import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Cards from './components/Cards'
import Process from './components/Process'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Intro from './components/Intro'
import Features from './components/Features'
import Narrative from './components/Narrative'
import CaseStudies from './components/CaseStudies'
import Premium from './components/Premium'
import Who from './components/Who'
import Philosophy from './components/Philosophy'
import Difference from './components/Difference'
import Ready from './components/Ready'
import TopMessage from './components/TopMessage'
import QuickNav from './components/QuickNav'
import CalendlyEmbed from './components/CalendlyEmbed'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Top nav */}
      <header className="pointer-events-none fixed inset-x-0 top-0 z-30 flex items-center justify-center py-4">
        <div className="pointer-events-auto flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
          <img src="/flame-icon.svg" alt="Flames" className="h-6 w-6" />
          <span className="text-sm font-semibold">Funnel Studio</span>
        </div>
      </header>

      {/* Quick section jump nav at very top */}
      <div className="pt-20">{/* spacer under fixed header */}
        <QuickNav />
      </div>

      {/* Top message now shows the main design instead of video */}
      <TopMessage />

      {/* Hero now contains the embedded video + CTAs */}
      <Hero />

      {/* Go straight to trusted-by-brands section */}
      <Logos />

      {/* Content sections */}
      <main>
        <Features />
        <Narrative />
        <Cards />
        <Process />
        <CaseStudies />
        <Premium />
        <Who />
        <Philosophy />
        <Difference />
        <Pricing />
        <FAQ />
        {/* Calendly embed just before Contact */}
        <CalendlyEmbed />
        <Contact />

        {/* Footer */}
        <footer className="relative z-10 mx-auto max-w-6xl px-6 pb-12 text-center text-slate-400">
          © {new Date().getFullYear()} Funnel Studio. All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default App
