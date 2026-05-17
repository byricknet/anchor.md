import { useConfigStore } from "../../../../store/useConfigStore"
import { cicdTechs, allStackLabels } from "../../../../types/schema"
import { useTranslation } from "../../../../i18n"
import type { TechStack } from "../../../../types/schema"
import { TechCard } from "../TechCard"

interface StepCICDProps {
  onDone?: () => void
}

export function StepCICD({ onDone }: StepCICDProps) {
  const { config, updateConfig, prevStep } = useConfigStore()
  const { t } = useTranslation()

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
        <h1 className="text-[32px] font-semibold text-on-background mb-stack-sm tracking-tight">{t.cicd.title}</h1>
        <p className="text-[16px] text-on-surface-variant">{t.cicd.subtitle}</p>
      </header>

      <div className="grid grid-cols-3 gap-3">
        {cicdTechs.map((tech) => (
          <TechCard
            key={tech}
            tech={tech}
            label={allStackLabels[tech]}
            selected={config.stack.includes(tech)}
            onToggle={() => toggle(tech)}
          />
        ))}
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <label className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-widest">
          {t.cicd.customInstructions}
        </label>
        <textarea
          placeholder={t.cicd.customInstructionsPlaceholder}
          value={config.customInstructions ?? ""}
          onChange={(e) => updateConfig({ customInstructions: e.target.value })}
          className="bg-transparent border border-border/10 focus:border-primary outline-none px-4 py-2.5 rounded text-[14px] text-on-background placeholder:text-on-surface-variant/50 transition-colors min-h-[80px] resize-y"
        />
      </div>

      <div className="hidden lg:flex border-t border-border/5 pt-6 mt-8 justify-between items-center">
        <button
          type="button"
          onClick={prevStep}
          className="text-[11px] font-semibold uppercase tracking-wider px-6 py-3 rounded text-on-surface-variant border border-border/10 hover:text-on-background hover:border-border/20 transition-all cursor-pointer"
        >
          {t.cicd.back}
        </button>
        <button
          type="button"
          onClick={() => onDone?.()}
          className="text-[11px] font-semibold uppercase tracking-wider px-6 py-3 rounded bg-primary text-on-primary hover:bg-primary/90 transition-all flex items-center gap-2 cursor-pointer"
        >
          {t.cicd.done}
        </button>
      </div>
    </div>
  )
}
