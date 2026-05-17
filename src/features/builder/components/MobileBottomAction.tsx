import { useTranslation } from "../../../i18n"

interface Props {
  currentStep: number
  onBack?: () => void
  onNext?: () => void
  nextDisabled?: boolean
  nextLabel?: string
  variant?: "default" | "done"
}

export function MobileBottomAction({ currentStep, onBack, onNext, nextDisabled, nextLabel, variant = "default" }: Props) {
  const { t } = useTranslation()
  const isFirst = currentStep === 0
  const label = nextLabel ?? (currentStep < 3 ? t.domain.next : t.cicd.done)
  const isDone = variant === "done"

  return (
    <footer className="lg:hidden sticky bottom-0 bg-background/80 backdrop-blur-md border-t border-border/5 px-4 py-3 z-50">
      <div className="flex items-center gap-3">
        {!isFirst && onBack && (
          <button
            type="button"
            onClick={onBack}
            className="text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors px-4 py-3 cursor-pointer"
          >
            {t.domain.back}
          </button>
        )}
        {onNext && (
          <button
            type="button"
            disabled={nextDisabled}
            onClick={onNext}
            className={`flex-1 flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-wider py-3.5 rounded-lg transition-all active:scale-[0.98] disabled:opacity-40 cursor-pointer ${
              isDone
                ? "bg-transparent border border-border/20 text-on-surface-variant hover:border-border/40 hover:text-on-surface"
                : "bg-on-surface text-background"
            }`}
          >
            {label}
            {isDone ? (
              <span className="material-symbols-outlined text-lg">check_circle</span>
            ) : (
              <span className="material-symbols-outlined text-lg">chevron_right</span>
            )}
          </button>
        )}
      </div>
    </footer>
  )
}
