import { useConfigStore } from "../../../store/useConfigStore"
import { useTranslation } from "../../../i18n"

const navIcons = ["fingerprint", "terminal", "cloud_queue", "verified"] as const

export function StepperSidebar() {
  const currentStep = useConfigStore((s) => s.currentStep)
  const setStep = useConfigStore((s) => s.setStep)
  const config = useConfigStore((s) => s.config)
  const { t } = useTranslation()

  const navLabels = [t.nav.identity, t.nav.environment, t.nav.infrastructure, t.nav.review]

  function isUnlocked(index: number) {
    if (index === 0) return true
    if (index === 1) return !!config.projectName
    if (index === 2) return !!config.projectName
    if (index === 3) return !!config.projectName
    return false
  }

  return (
    <nav className="bg-surface-container-low border-r border-border/10 h-full w-[240px] flex flex-col py-stack-lg gap-stack-md shrink-0">
      <div className="px-container-padding mb-stack-lg">
        <div className="text-[18px] font-semibold text-primary mb-1 tracking-tight">{t.nav.subtitle}</div>
      </div>
      <div className="flex flex-col w-full">
        {navLabels.map((label, i) => {
          const active = i === currentStep
          const unlocked = isUnlocked(i)
          return (
            <button
              key={label}
              type="button"
              disabled={!unlocked}
              onClick={() => setStep(i)}
              className={`flex items-center gap-3 px-container-padding py-3 transition-all duration-200 ease-in-out border-l-2 text-left cursor-pointer ${
                active
                  ? "text-primary border-l-2 border-primary bg-overlay/5"
                  : "text-on-surface-variant border-l-2 border-transparent hover:bg-overlay/5"
              } ${!unlocked ? "opacity-40" : ""}`}
            >
              <span className="material-symbols-outlined text-[18px]">{navIcons[i]}</span>
              <span className="text-[11px] font-semibold tracking-wider uppercase">{label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
