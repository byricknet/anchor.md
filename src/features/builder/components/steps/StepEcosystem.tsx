import { useConfigStore } from "../../../../store/useConfigStore"
import { domainTechs, allStackLabels } from "../../../../types/schema"
import { useTranslation } from "../../../../i18n"
import type { Domain, TechStack } from "../../../../types/schema"
import { TechCard } from "../TechCard"

const domainLabels: Record<Domain, string> = {
  frontend: "Frontend",
  mobile: "Mobile",
  fullstack: "Fullstack",
  backend: "Backend",
}

export function StepEcosystem() {
  const { config, updateConfig, nextStep, prevStep } = useConfigStore()
  const { t } = useTranslation()
  const domain = config.domain
  const available = domainTechs[domain]

  function toggle(tech: TechStack) {
    if (config.stack.includes(tech)) {
      updateConfig({ stack: config.stack.filter((t) => t !== tech) })
    } else {
      updateConfig({ stack: [...config.stack, tech] })
    }
  }

  return (
    <div className="flex flex-col h-full">
      <header className="mb-stack-lg">
        <h1 className="text-[32px] font-semibold text-on-background mb-stack-sm tracking-tight">{t.ecosystem.title}</h1>
        <p className="text-[16px] text-on-surface-variant">
          {t.ecosystem.subtitle} <span className="text-on-background font-medium">{domainLabels[domain]}</span>.
        </p>
      </header>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
        {available.map((tech) => (
          <TechCard
            key={tech}
            tech={tech}
            label={allStackLabels[tech]}
            selected={config.stack.includes(tech)}
            onToggle={() => toggle(tech)}
          />
        ))}
      </div>

      <div className="hidden lg:flex border-t border-border/5 pt-6 mt-8 justify-between items-center">
        <button
          type="button"
          onClick={prevStep}
          className="text-[11px] font-semibold uppercase tracking-wider px-6 py-3 rounded text-on-surface-variant border border-border/10 hover:text-on-background hover:border-border/20 transition-all cursor-pointer"
        >
          {t.ecosystem.back}
        </button>
        <button
          type="button"
          onClick={nextStep}
          className="text-[11px] font-semibold uppercase tracking-wider px-6 py-3 rounded bg-primary text-on-primary hover:bg-primary/90 transition-all flex items-center gap-2 cursor-pointer"
        >
          {t.ecosystem.next}
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>
    </div>
  )
}
