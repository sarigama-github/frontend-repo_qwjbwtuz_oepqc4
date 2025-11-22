import { Shield, Cpu, Activity, Database } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'AI Video Analytics',
    desc: 'Machine learning and computer vision interpret scenes in real time, beyond basic recording.'
  },
  {
    icon: Activity,
    title: 'Works with Any Source',
    desc: 'Use IP cameras, webcams, NVRs or even files — no specialized hardware required.'
  },
  {
    icon: Shield,
    title: 'On-Prem Privacy',
    desc: 'Processing stays on your machines. Only anonymous, aggregated metadata reaches the cloud.'
  },
  {
    icon: Database,
    title: 'Custom Reports',
    desc: 'Flexible dashboards and exports for occupancy, dwell time, heatmaps and more.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(600px_circle_at_var(--x,20%)_var(--y,20%),theme(colors.blue.500),transparent_40%)]"/>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Key features</h2>
          <p className="mt-4 text-blue-200/80">Everything you need to turn cameras into business intelligence.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({icon:Icon, title, desc}) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/7 transition">
              <div className="h-10 w-10 rounded-lg grid place-items-center bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/30">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-white font-medium">{title}</h3>
              <p className="mt-2 text-sm text-blue-200/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
