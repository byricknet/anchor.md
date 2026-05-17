import { useCallback, useState } from "react"
import { useConfigStore } from "../../store/useConfigStore"
import { compileMarkdown } from "../compiler/generate"
import { useTranslation } from "../../i18n"

export function PreviewHeader() {
  const { config } = useConfigStore()
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    const md = compileMarkdown(config)
    await navigator.clipboard.writeText(md)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }, [config])

  const handleDownload = useCallback(() => {
    const md = compileMarkdown(config)
    const blob = new Blob([md], { type: "text/markdown" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "CLAUDE.md"
    a.click()
    URL.revokeObjectURL(url)
  }, [config])

  const hasContent = config.projectName || config.stack.length > 0

  return (
    <div className="flex items-center justify-between px-6 h-16 border-b border-border/5 shrink-0 bg-surface/50 backdrop-blur-sm z-10">
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-on-surface-variant text-[18px]">description</span>
        <span className="text-[13px] font-mono text-on-surface-variant">{t.preview.label}</span>
      </div>
      {hasContent && (
        <div className="flex items-center gap-2 text-on-surface-variant">
          <button
            type="button"
            onClick={handleCopy}
            className="p-2 hover:bg-overlay/5 rounded hover:text-on-surface transition-colors cursor-pointer"
            title={t.preview.copy}
          >
            <span className="material-symbols-outlined text-[18px]">
              {copied ? "check" : "content_copy"}
            </span>
          </button>
          <button
            type="button"
            onClick={handleDownload}
            className="p-2 hover:bg-overlay/5 rounded hover:text-on-surface transition-colors cursor-pointer"
            title={t.preview.download}
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
          </button>
        </div>
      )}
    </div>
  )
}
