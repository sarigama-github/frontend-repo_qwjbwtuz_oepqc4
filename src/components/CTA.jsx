export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600 to-cyan-500 p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">See Camlytics in action</h3>
              <p className="mt-3 text-white/90">Get a guided walkthrough tailored to your cameras, use cases and KPIs.</p>
            </div>
            <form className="grid sm:grid-cols-3 gap-3">
              <input className="col-span-2 px-4 py-3 rounded-lg text-slate-900 placeholder:text-slate-500" placeholder="Work email" />
              <button type="button" className="px-4 py-3 rounded-lg bg-white text-slate-900 font-medium hover:opacity-90">Request demo</button>
            </form>
          </div>
        </div>
        <p className="mt-4 text-center text-blue-200/70 text-sm">No hardware lock-in. Works with your existing cameras.</p>
      </div>
    </section>
  );
}
