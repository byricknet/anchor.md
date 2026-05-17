import { useEffect } from "react"
import { useConfigStore } from "../../../store/useConfigStore"
import { useTranslation } from "../../../i18n"

const navIcons = ["fingerprint", "terminal", "cloud_queue", "verified"] as const

export function MobileSidebarDrawer({ onClose }: { onClose: () => void }) {
  const currentStep = useConfigStore((s) => s.currentStep)
  const setStep = useConfigStore((s) => s.setStep)
  const config = useConfigStore((s) => s.config)
  const { t } = useTranslation()

  const navLabels = [t.nav.identity, t.nav.environment, t.nav.infrastructure, t.nav.review]

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = "" }
  }, [])

  function isUnlocked(index: number) {
    if (index === 0) return true
    return !!config.projectName
  }

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <nav className="absolute left-0 top-0 bottom-0 w-[260px] bg-surface-container-low flex flex-col py-6 shadow-2xl animate-slide-in-left">
        <div className="px-6 mb-8 flex items-center justify-between">
          <div>
            <div className="text-[18px] font-semibold text-primary tracking-tight">{t.nav.subtitle}</div>
          </div>
          <button type="button" onClick={onClose} className="text-on-surface-variant hover:text-primary cursor-pointer">
            <span className="material-symbols-outlined">close</span>
          </button>
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
                onClick={() => { setStep(i); onClose() }}
                className={`flex items-center gap-3 px-6 py-3.5 transition-all duration-200 ease-in-out border-l-2 text-left cursor-pointer ${
                  active
                    ? "text-primary border-l-2 border-primary bg-overlay/5"
                    : "text-on-surface-variant border-l-2 border-transparent hover:bg-overlay/5"
                } ${!unlocked ? "opacity-40" : ""}`}
              >
                <span className="material-symbols-outlined text-[20px]">{navIcons[i]}</span>
                <span className="text-[13px] font-semibold tracking-wider uppercase">{label}</span>
              </button>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
