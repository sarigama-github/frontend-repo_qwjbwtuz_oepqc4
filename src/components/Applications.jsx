const apps = [
  {
    title: 'Retail & QSR',
    points: ['Footfall & conversion', 'Queue & dwell time', 'Heatmaps & product interaction']
  },
  {
    title: 'Smart Buildings',
    points: ['Occupancy & utilization', 'People counting', 'Anomaly detection']
  },
  {
    title: 'Security & Safety',
    points: ['Intrusion & loitering', 'PPE & zone rules', 'Vehicle & license plate']
  },
  {
    title: 'Transportation',
    points: ['Traffic flow & parking', 'Platform analytics', 'Crowd management']
  }
];

export default function Applications() {
  return (
    <section id="applications" className="py-20 bg-slate-950/95">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Applications</h2>
            <p className="mt-4 text-blue-200/80">Deploy across industries without changing your cameras or infrastructure.</p>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {apps.map(a => (
                <div key={a.title} className="rounded-2xl border border-white/10 p-6 bg-white/5">
                  <h3 className="text-white font-medium">{a.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-blue-200/80 list-disc list-inside">
                    {a.points.map(p => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 p-6 bg-gradient-to-br from-slate-900 to-slate-800">
            <div className="aspect-video w-full rounded-2xl bg-black/40 border border-white/10 grid place-items-center text-blue-200/70">
              <div className="text-center px-6">
                <p className="font-medium text-white">Local processing</p>
                <p className="text-sm mt-2">Bring your own cameras. Keep raw footage private. Stream only anonymized events to the cloud for aggregated reports.</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-2xl font-semibold text-white">0</p>
                <p className="text-xs text-blue-200/70">Required HW</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-2xl font-semibold text-white">100%</p>
                <p className="text-xs text-blue-200/70">On-prem</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-2xl font-semibold text-white">Anon</p>
                <p className="text-xs text-blue-200/70">Cloud data</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
