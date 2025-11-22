export default function PrivacyReports() {
  return (
    <section id="privacy" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="rounded-3xl p-8 border border-white/10 bg-white/5">
            <h3 className="text-2xl font-semibold text-white">On-premises processing & privacy</h3>
            <p className="mt-3 text-blue-200/80">Analytics run locally on your machine. Private recordings never leave your network. Only anonymous text metadata is sent to the cloud for aggregated statistics.</p>
            <ul className="mt-6 space-y-3 text-blue-100/80 text-sm list-disc list-inside">
              <li>Keep raw streams private by default</li>
              <li>Fine-grained event filtering and retention</li>
              <li>Compliant with internal security policies</li>
            </ul>
          </div>

          <div id="reports" className="rounded-3xl p-8 border border-white/10 bg-white/5">
            <h3 className="text-2xl font-semibold text-white">Customizable statistics & reports</h3>
            <p className="mt-3 text-blue-200/80">Build dashboards for people counting, occupancy, dwell time, zones, heatmaps and exports. Share scheduled reports or pull via API.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {['Occupancy', 'Queues', 'Heatmaps', 'Events'].map(card => (
                <div key={card} className="rounded-xl p-4 border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800">
                  <p className="text-white font-medium">{card}</p>
                  <p className="text-xs text-blue-200/70 mt-1">Configurable widgets</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
