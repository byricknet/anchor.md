import { useConfigStore } from "../../../../store/useConfigStore"
import { useTranslation } from "../../../../i18n"
import type { Domain } from "../../../../types/schema"

const domainMeta: { value: Domain; icon: string; tags: string[] }[] = [
  { value: "frontend", icon: "web", tags: ["React", "Next.js", "Vue"] },
  { value: "mobile", icon: "phone_iphone", tags: ["Expo", "Flutter"] },
  { value: "fullstack", icon: "layers", tags: ["Postgres", "Docker"] },
  { value: "backend", icon: "dns", tags: ["Node", "FastAPI", "Go"] },
]

export function StepDomain() {
  const { config, setDomain, nextStep, prevStep } = useConfigStore()
  const { t } = useTranslation()

  const domains: { value: Domain; label: string; desc: string }[] = [
    { value: "frontend", label: t.domain.frontend, desc: t.domain.frontendDesc },
    { value: "mobile", label: t.domain.mobile, desc: t.domain.mobileDesc },
    { value: "fullstack", label: t.domain.fullstack, desc: t.domain.fullstackDesc },
    { value: "backend", label: t.domain.backend, desc: t.domain.backendDesc },
  ]

  return (
    <div className="flex flex-col">
      {/* Mobile header */}
      <div className="lg:hidden mb-5">
        <p className="text-[11px] font-semibold text-primary uppercase tracking-[0.1em] mb-1">
          STEP {config.domain ? "2" : "1"} OF 4
        </p>
        <h1 className="text-[32px] font-semibold text-on-background tracking-tight">
          {t.domain.title}
        </h1>
      </div>

      {/* Desktop header */}
      <header className="hidden lg:block mb-stack-lg">
        <h1 className="text-[32px] font-semibold text-on-background mb-stack-sm tracking-tight">{t.domain.title}</h1>
        <p className="text-[16px] text-on-surface-variant">{t.domain.subtitle}</p>
      </header>

      {/* Cards: stacked on mobile, grid on desktop */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-3 lg:gap-stack-md">
        {domains.map((d) => {
          const selected = config.domain === d.value
          const meta = domainMeta.find((m) => m.value === d.value)!
          return (
            <button
              key={d.value}
              type="button"
              onClick={() => setDomain(d.value)}
              className={`relative text-left p-5 lg:p-6 transition-all cursor-pointer group ${
                selected
                  ? "bg-surface-container border-2 border-primary rounded-xl ring-1 ring-primary/50 ring-offset-2 ring-offset-surface-dim"
                  : "bg-surface-container-low border border-border/10 rounded-xl hover:bg-overlay/5 active:scale-[0.98] lg:active:scale-100"
              }`}
            >
              <div className="flex justify-between items-start mb-3 lg:mb-4">
                <div className={`p-2.5 lg:p-3 rounded-lg ${
                  selected
                    ? "bg-primary shadow-[0_0_20px_rgba(173,198,255,0.3)]"
                    : "bg-primary/10"
                }`}>
                  <span className={`material-symbols-outlined ${
                    selected ? "text-on-primary" : "text-primary"
                  }`}>{meta.icon}</span>
                </div>
                {selected ? (
                  <div className="flex items-center gap-1.5 px-2 py-1 bg-primary/20 rounded-full">
                    <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="text-[10px] font-semibold text-primary uppercase tracking-wider">{t.domain.selected}</span>
                  </div>
                ) : (
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block">
                    <span className="material-symbols-outlined text-on-surface-variant">arrow_forward</span>
                  </span>
                )}
              </div>
              <h3 className="text-[18px] font-medium text-on-surface mb-1">{d.label}</h3>
              <p className="text-[14px] text-on-surface-variant">{d.desc}</p>
              <div className="mt-3 lg:mt-4 flex gap-1.5 flex-wrap">
                {meta.tags.map((tag) => (
                  <span key={tag} className={`px-2 py-0.5 text-[10px] font-mono uppercase rounded ${
                    selected
                      ? "bg-overlay/5 border border-border/10 text-on-surface-variant"
                      : "bg-overlay/5 border border-border/5 text-on-surface-variant"
                  }`}>{tag}</span>
                ))}
              </div>
            </button>
          )
        })}
      </div>

      {/* Desktop footer */}
      <div className="hidden lg:flex border-t border-border/5 pt-6 mt-8 justify-between items-center">
        <button
          type="button"
          onClick={prevStep}
          className="text-[11px] font-semibold uppercase tracking-wider px-6 py-3 rounded text-on-surface-variant border border-border/10 hover:text-on-background hover:border-border/20 transition-all cursor-pointer"
        >
          {t.domain.back}
        </button>
        <button
          type="button"
          onClick={nextStep}
          className="text-[11px] font-semibold uppercase tracking-wider px-6 py-3 rounded bg-primary text-on-primary hover:bg-primary/90 transition-all flex items-center gap-2 cursor-pointer"
        >
          {t.domain.next}
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>
    </div>
  )
}
