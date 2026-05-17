import { useMemo } from "react"
import ReactMarkdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import { useConfigStore } from "../../store/useConfigStore"
import { compileMarkdown } from "../compiler/generate"
import { useTranslation } from "../../i18n"

export function MarkdownPreview() {
  const { config } = useConfigStore()
  const { t } = useTranslation()

  const markdown = useMemo(() => compileMarkdown(config), [config])

  const hasContent = config.projectName || config.stack.length > 0

  if (!hasContent) {
    return (
      <div className="flex flex-1 items-center justify-center px-8">
        <div className="text-center max-w-sm">
          <p className="text-sm text-on-surface-variant font-mono">
            {t.preview.emptyTitle}
          </p>
          <p className="text-xs text-on-surface-variant/50 font-mono mt-2">
            {t.preview.emptySubtitle}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="max-w-3xl font-mono text-[13px] leading-relaxed text-secondary">
        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  )
}
