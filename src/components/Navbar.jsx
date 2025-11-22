import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30" />
          <div className="leading-tight">
            <p className="text-white font-semibold tracking-tight">Camlytics AI</p>
            <p className="text-xs text-blue-200/70 -mt-0.5">Video intelligence for any camera</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-blue-100/80 hover:text-white transition">Features</a>
          <a href="#applications" className="text-blue-100/80 hover:text-white transition">Applications</a>
          <a href="#privacy" className="text-blue-100/80 hover:text-white transition">Privacy</a>
          <a href="#reports" className="text-blue-100/80 hover:text-white transition">Reports</a>
          <a href="#cta" className="px-4 py-2 rounded-full bg-white text-slate-900 font-medium hover:shadow-md transition">Request demo</a>
        </nav>
        <button className="md:hidden p-2 rounded-lg hover:bg-white/5 text-blue-100" aria-label="Open menu">
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}
