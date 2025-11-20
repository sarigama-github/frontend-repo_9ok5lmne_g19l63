import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Cards from './components/Cards'
import Process from './components/Process'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

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

      {/* Hero */}
      <Hero />

      {/* Content sections */}
      <main>
        <Logos />
        <Cards />
        <Process />
        <Pricing />
        <FAQ />
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
