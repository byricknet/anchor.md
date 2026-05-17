import { useTranslation } from "../../../i18n"

export function MobileStepProgress({ currentStep }: { currentStep: number }) {
  const { t } = useTranslation()
  const steps = [t.nav.identity, t.nav.environment, t.nav.infrastructure, t.nav.review]

  return (
    <div className="lg:hidden bg-surface-container-low border-b border-border/10 px-4 py-3">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[11px] font-semibold text-primary uppercase tracking-[0.1em]">
          {t.nav.subtitle}
        </span>
        <span className="text-[13px] font-mono text-on-surface-variant">
          Step {currentStep + 1}/4
        </span>
      </div>
      <div className="flex gap-1.5 w-full h-1">
        {steps.map((_, i) => (
          <div
            key={i}
            className={`h-full flex-1 rounded-full transition-all duration-500 ${
              i <= currentStep ? "bg-primary" : "bg-border/10"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
