import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Applications from './components/Applications'
import PrivacyReports from './components/PrivacyReports'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Features />
      <Applications />
      <PrivacyReports />
      <CTA />
      <footer className="py-10 border-t border-white/10 text-center text-blue-200/70 bg-slate-950">
        <p>© {new Date().getFullYear()} Camlytics AI</p>
      </footer>
    </div>
  )
}

export default App
