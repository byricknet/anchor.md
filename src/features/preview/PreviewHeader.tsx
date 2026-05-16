import { useCallback, useState } from "react"
import { useConfigStore } from "../../store/useConfigStore"
import { compileMarkdown } from "../compiler/generate"

export function PreviewHeader() {
  const { config } = useConfigStore()
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
    <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-[#30363d]">
      <div className="flex items-center gap-1">
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0d1117] rounded-t border-b-2 border-[#f0c674]">
          <svg className="w-3.5 h-3.5 text-[#f0c674]" viewBox="0 0 16 16" fill="currentColor">
            <path d="M2 1.75C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v12.5c0 .966-.784 1.75-1.75 1.75h-8.5A1.75 1.75 0 012 14.25V1.75zm1.75-.25a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5z"/>
            <path d="M6.5 10.75a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75z"/>
          </svg>
          <span className="text-xs text-gray-300 font-medium">CLAUDE.md</span>
        </div>
      </div>
      {hasContent && (
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-gray-300 bg-[#21262d] border border-[#30363d] hover:bg-[#30363d] transition-colors duration-200 cursor-pointer"
          >
            {copied ? (
              <>
                <svg className="w-3.5 h-3.5 text-green-500" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Copied
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                  <rect x="4" y="4" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 4V3a1 1 0 00-1-1H4a2 2 0 00-2 2v7a1 1 0 001 1h1" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                Copy
              </>
            )}
          </button>
          <button
            type="button"
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-white bg-[#238636] border border-[#2ea043] hover:bg-[#2ea043] transition-colors duration-200 cursor-pointer"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
              <path d="M8 1v9m0 0l-3-3m3 3l3-3m-6 6h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download
          </button>
        </div>
      )}
    </div>
  )
}
