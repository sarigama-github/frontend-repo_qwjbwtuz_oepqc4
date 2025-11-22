import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[86vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/40 to-slate-950/90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Turn any camera into an AI-powered analyst
          </h1>
          <p className="mt-6 text-lg md:text-xl text-blue-100/90">
            Camlytics processes video locally for privacy, transforming livestreams into actionable insights without special hardware.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#cta" className="px-6 py-3 rounded-lg bg-white text-slate-900 font-medium hover:shadow-lg transition">
              Get a demo
            </a>
            <a href="#features" className="px-6 py-3 rounded-lg bg-white/10 text-white backdrop-blur border border-white/10 hover:bg-white/15 transition">
              Explore features
            </a>
          </div>
          <div className="mt-6 flex gap-6 text-blue-200/80 text-sm">
            <span>Works with IP cams, webcams, NVRs, files</span>
            <span>On-prem compute • Cloud stats only</span>
          </div>
        </div>
      </div>
    </section>
  );
}
