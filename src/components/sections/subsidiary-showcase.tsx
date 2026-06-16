import Image from "next/image";
import {
  subsidiaryDeepDives,
  type SubsidiaryDeepDive,
} from "@/lib/content";
import { cn } from "@/lib/utils";

const CustomCheckIcon = () => (
  <svg
    className="mt-1 h-5 w-5 shrink-0 text-slate-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="square"
      strokeLinejoin="miter"
      d="M5 13l4 4L19 7"
    />
  </svg>
);

function SubsidiaryBlock({
  subsidiary,
  index,
}: {
  subsidiary: SubsidiaryDeepDive;
  index: number;
}) {
  // Use a more unified high-contrast palette instead of the multiple random variants
  const isDark = index % 2 === 0;
  const imageFirst = index % 2 === 0;

  const sectionClass = isDark ? "bg-slate-950 text-white" : "bg-white text-slate-900";
  const labelClass = isDark ? "text-slate-400" : "text-slate-500";
  const bodyClass = isDark ? "text-slate-300" : "text-slate-600";
  const borderClass = isDark ? "border-white/10" : "border-slate-200";

  return (
    <section
      id={subsidiary.id}
      className={cn("border-t py-24 lg:py-32 overflow-hidden", sectionClass, borderClass)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          <div className={cn("relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl", !imageFirst && "lg:order-2", borderClass, "border")}>
            <Image
              src={`/${subsidiary.imageSlot}.png`}
              alt={`${subsidiary.name} - ${subsidiary.sector}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div
            className={cn(
              "space-y-8 animate-fadeIn",
              !imageFirst && "lg:order-1"
            )}
          >
            <div>
              <p
                className={cn(
                  "text-sm font-semibold tracking-[0.2em] uppercase mb-4",
                  labelClass
                )}
              >
                {subsidiary.name} <span className="opacity-50 mx-2">|</span> {subsidiary.sector}
              </p>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {subsidiary.headline}
              </h2>
            </div>
            
            <p className={cn("text-lg leading-relaxed", bodyClass)}>
              {subsidiary.body}
            </p>

            <ul className="space-y-4 pt-4">
              {subsidiary.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-4 text-base font-medium"
                >
                  <CustomCheckIcon />
                  <span className={cn(isDark ? "text-slate-200" : "text-slate-700")}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export function SubsidiaryShowcase() {
  return (
    <div className="w-full">
      {subsidiaryDeepDives.map((subsidiary, index) => (
        <SubsidiaryBlock
          key={subsidiary.id}
          subsidiary={subsidiary}
          index={index}
        />
      ))}
    </div>
  );
}
