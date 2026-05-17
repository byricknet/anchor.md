import { useConfigStore } from "../../../../store/useConfigStore"
import { useTranslation } from "../../../../i18n"
import type { Domain } from "../../../../types/schema"

const domainMeta: { value: Domain; icon: string; wide: boolean }[] = [
  { value: "frontend", icon: "web", wide: false },
  { value: "mobile", icon: "smartphone", wide: false },
  { value: "fullstack", icon: "layers", wide: true },
  { value: "backend", icon: "dns", wide: false },
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
    <div className="flex flex-col h-full">
      <header className="mb-stack-lg">
        <h1 className="text-[32px] font-semibold text-on-background mb-stack-sm tracking-tight">{t.domain.title}</h1>
        <p className="text-[16px] text-on-surface-variant">{t.domain.subtitle}</p>
      </header>

      <div className="grid grid-cols-2 gap-stack-md flex-1 content-start">
        {domains.map((d) => {
          const selected = config.domain === d.value
          const meta = domainMeta.find((m) => m.value === d.value)!
          return (
            <button
              key={d.value}
              type="button"
              onClick={() => setDomain(d.value)}
              className={`bg-surface-container-low rounded-xl p-6 flex flex-col cursor-pointer transition-all group relative overflow-hidden text-left ${
                meta.wide ? "col-span-2" : ""
              } ${
                selected
                  ? "border border-primary/50 ring-1 ring-primary/20"
                  : "border border-border/10 hover:bg-overlay/5 hover:border-border/20"
              }`}
            >
              {selected && <div className="absolute inset-0 bg-primary/5" />}
              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-12 h-12 flex items-center justify-center rounded-lg mb-stack-md border transition-colors ${
                  selected
                    ? "bg-surface border-primary/50"
                    : "bg-surface border-border/10 group-hover:border-border/30"
                }`}>
                  <span className={`material-symbols-outlined ${
                    selected ? "text-primary" : "text-on-surface-variant group-hover:text-on-background transition-colors"
                  }`}>{meta.icon}</span>
                </div>
                <h3 className="text-[18px] font-medium text-on-background mb-2">{d.label}</h3>
                <p className="text-[14px] text-on-surface-variant flex-1">{d.desc}</p>
                {selected && (
                  <div className="flex items-center gap-2 mt-auto pt-4">
                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                    <span className="text-[13px] font-mono text-primary">{t.domain.selected}</span>
                  </div>
                )}
              </div>
            </button>
          )
        })}
      </div>

      <div className="border-t border-border/5 pt-6 mt-8 flex justify-between items-center">
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
