import { glanceContent } from "@/lib/content";

export function GlanceSection() {
  return (
    <section id="subsidiaries" className="bg-white py-20 text-slate-900 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-2xl font-bold tracking-tight sm:text-3xl">
          {glanceContent.title}
        </h2>

        <div className="hidden md:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-divider">
                {glanceContent.columns.map((column) => (
                  <th
                    key={column}
                    className="pb-4 text-xs font-semibold tracking-wider text-slate-500 uppercase"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {glanceContent.rows.map((row) => (
                <tr key={row.subsidiary} className="border-b border-divider">
                  <td className="py-5 pr-4 font-semibold">{row.subsidiary}</td>
                  <td className="py-5 pr-4 text-slate-600">{row.sector}</td>
                  <td className="py-5 text-slate-700">{row.coreFocus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-4 md:hidden">
          {glanceContent.rows.map((row) => (
            <div
              key={row.subsidiary}
              className="border border-divider p-5"
            >
              <p className="font-semibold">{row.subsidiary}</p>
              <p className="mt-1 text-sm text-slate-600">{row.sector}</p>
              <p className="mt-3 text-sm text-slate-700">{row.coreFocus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
