export function SocialProofSection() {
  const metrics = [
    { label: "Fiber Laid Globally", value: "10,000+ km" },
    { label: "Network Uptime", value: "99.999%" },
    { label: "Assets Managed", value: "$4.2B" },
    { label: "Corporate Partners", value: "500+" },
  ];

  return (
    <section className="border-y border-white/10 bg-slate-950 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium tracking-widest text-slate-500 uppercase mb-8">
          Trusted by enterprise leaders to scale operations
        </p>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 divide-x divide-white/10">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col items-center justify-center space-y-2 text-center animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
              <span className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {metric.value}
              </span>
              <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
