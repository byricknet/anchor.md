import { ConfigWizard } from "./features/builder/components/ConfigWizard"
import { MarkdownPreview } from "./features/preview/MarkdownPreview"
import { PreviewHeader } from "./features/preview/PreviewHeader"

export default function App() {
  return (
    <main className="flex h-dvh w-dvw overflow-hidden bg-slate-50">
      <section className="w-1/2 h-full overflow-y-auto bg-white shadow-sm ring-1 ring-black/5 p-8 scrollbar-thin">
        <ConfigWizard />
      </section>
      <section className="w-1/2 h-full flex flex-col bg-[#0d1117]">
        <PreviewHeader />
        <MarkdownPreview />
      </section>
    </main>
  )
}
