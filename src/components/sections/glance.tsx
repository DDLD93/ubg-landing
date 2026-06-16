import { glanceContent } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";

export function GlanceSection() {
  return (
    <section id="subsidiaries" className="bg-slate-50 py-20 text-slate-900 sm:py-24 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {glanceContent.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A diverse portfolio of specialized divisions working in synergy to build the infrastructure of tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {glanceContent.rows.map((row, index) => (
            <div
              key={row.subsidiary}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-900/5 transition-all hover:shadow-md hover:ring-slate-900/10 animate-fadeInUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div>
                <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-4">
                  {row.sector}
                </p>
                <h3 className="text-2xl font-bold text-slate-900">
                  {row.subsidiary}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {row.coreFocus}
                </p>
              </div>
              
              <div className="mt-8 flex items-center text-sm font-medium text-slate-900 opacity-0 transition-opacity group-hover:opacity-100">
                Explore division
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
