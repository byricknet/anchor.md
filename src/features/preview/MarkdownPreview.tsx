import { useMemo } from "react"
import ReactMarkdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import { useConfigStore } from "../../store/useConfigStore"
import { compileMarkdown } from "../compiler/generate"

export function MarkdownPreview() {
  const { config } = useConfigStore()

  const markdown = useMemo(() => compileMarkdown(config), [config])

  const hasContent = config.projectName || config.stack.length > 0

  if (!hasContent) {
    return (
      <div className="flex flex-1 items-center justify-center px-8">
        <div className="text-center max-w-sm">
          <p className="text-sm text-gray-400 font-mono">
            Configure your project on the left to generate a CLAUDE.md
          </p>
          <p className="text-xs text-gray-500 font-mono mt-2">
            The preview will update in real-time as you make changes.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 overflow-y-auto p-6 scrollbar-thin">
      <div className="font-mono text-sm leading-relaxed text-gray-300 [&_h1]:text-lg [&_h1]:font-semibold [&_h1]:text-gray-100 [&_h1]:mb-4 [&_h2]:text-base [&_h2]:font-medium [&_h2]:text-gray-200 [&_h2]:mt-6 [&_h2]:mb-2 [&_h3]:text-sm [&_h3]:font-medium [&_h3]:text-gray-300 [&_h3]:mt-4 [&_h3]:mb-1.5 [&_p]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_li]:mb-1 [&_code]:text-[13px] [&_code]:bg-[#161b22] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-[#f0c674]">
        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  )
}
