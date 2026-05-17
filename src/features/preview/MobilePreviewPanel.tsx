import { useEffect } from "react"
import { MarkdownPreview } from "./MarkdownPreview"
import { PreviewHeader } from "./PreviewHeader"

export function MobilePreviewPanel({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = "" }
  }, [])

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-surface">
      <div className="flex items-center justify-between px-4 h-12 border-b border-border/10 shrink-0">
        <span className="text-[25px] font-semibold text-on-background tracking-tight">anchor</span>
        <button type="button" onClick={onClose} className="text-on-surface-variant hover:text-primary cursor-pointer">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
      <PreviewHeader />
      <div className="flex-1 overflow-y-auto">
        <MarkdownPreview />
      </div>
    </div>
  )
}
