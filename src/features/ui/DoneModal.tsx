import { useTranslation } from "../../i18n"

interface Props {
  open: boolean
  onCopy: () => void
  onDownload: () => void
  onClose: () => void
}

export function DoneModal({ open, onCopy, onDownload, onClose }: Props) {
  const { t } = useTranslation()

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end lg:items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-surface border border-border/10 rounded-t-2xl lg:rounded-2xl w-full lg:w-auto max-w-sm p-6 lg:p-8 shadow-2xl animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-[18px] font-semibold text-on-background mb-1">{t.modal.title}</h3>
        <p className="text-[14px] text-on-surface-variant mb-6">{t.modal.subtitle}</p>

        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={onCopy}
            className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-low border border-border/10 hover:border-border/20 transition-all text-left cursor-pointer"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10">
              <span className="material-symbols-outlined text-primary">content_copy</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[14px] font-medium text-on-surface">{t.modal.copyTitle}</div>
              <div className="text-[12px] text-on-surface-variant">{t.modal.copyDesc}</div>
            </div>
          </button>

          <button
            type="button"
            onClick={onDownload}
            className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-low border border-border/10 hover:border-border/20 transition-all text-left cursor-pointer"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10">
              <span className="material-symbols-outlined text-primary">download</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[14px] font-medium text-on-surface">{t.modal.downloadTitle}</div>
              <div className="text-[12px] text-on-surface-variant">{t.modal.downloadDesc}</div>
            </div>
          </button>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="w-full mt-4 text-[11px] font-semibold uppercase tracking-wider py-3 text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
        >
          {t.modal.cancel}
        </button>
      </div>
    </div>
  )
}
