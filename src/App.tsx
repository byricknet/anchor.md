import { useState, useCallback } from "react"
import { useConfigStore } from "./store/useConfigStore"
import { TopAppBar } from "./features/builder/components/TopAppBar"
import { StepperSidebar } from "./features/builder/components/StepperSidebar"
import { MobileSidebarDrawer } from "./features/builder/components/MobileSidebarDrawer"
import { MobilePreviewPanel } from "./features/preview/MobilePreviewPanel"
import { MobileStepProgress } from "./features/builder/components/MobileStepProgress"
import { MobileBottomAction } from "./features/builder/components/MobileBottomAction"
import { StepFoundation } from "./features/builder/components/steps/StepFoundation"
import { StepDomain } from "./features/builder/components/steps/StepDomain"
import { StepEcosystem } from "./features/builder/components/steps/StepEcosystem"
import { StepCICD } from "./features/builder/components/steps/StepCICD"
import { MarkdownPreview } from "./features/preview/MarkdownPreview"
import { PreviewHeader } from "./features/preview/PreviewHeader"
import { DoneModal } from "./features/ui/DoneModal"
import { Toast } from "./features/ui/Toast"
import { compileMarkdown } from "./features/compiler/generate"
import { useTranslation } from "./i18n"

export default function App() {
  const { currentStep, config, nextStep, prevStep } = useConfigStore()
  const { t } = useTranslation()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [previewOpen, setPreviewOpen] = useState(false)
  const [showDoneModal, setShowDoneModal] = useState(false)
  const [toast, setToast] = useState<string | null>(null)

  const nextDisabled =
    (currentStep === 0 && !config.projectName) ||
    (currentStep === 2 && config.stack.length === 0)

  const handleNext = currentStep < 3 ? nextStep : () => setShowDoneModal(true)
  const handleBack = currentStep > 0 ? prevStep : undefined

  const markdown = compileMarkdown(config)

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(markdown).then(() => {
      setShowDoneModal(false)
      setToast(t.modal.copied)
    })
  }, [markdown, t.modal.copied])

  const handleDownload = useCallback(() => {
    const blob = new Blob([markdown], { type: "text/markdown" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "CLAUDE.md"
    a.click()
    URL.revokeObjectURL(url)
    setShowDoneModal(false)
    setToast(t.modal.downloaded)
  }, [markdown, t.modal.downloaded])

  return (
    <div className="h-dvh w-dvw flex items-center justify-center">
      <div className="w-full h-dvh lg:w-4/5 lg:h-[80dvh] flex flex-col overflow-hidden lg:rounded-2xl lg:border border-border/[0.08] bg-surface shadow-2xl">
        <TopAppBar onMenuClick={() => setSidebarOpen(true)} onPreviewClick={() => setPreviewOpen(true)} />

        <MobileStepProgress currentStep={currentStep} />

        <main className="flex flex-1 overflow-hidden mx-auto w-full relative">
          {/* Desktop sidebar */}
          <div className="hidden lg:flex shrink-0">
            <StepperSidebar />
          </div>

          {/* Mobile sidebar drawer */}
          {sidebarOpen && <MobileSidebarDrawer onClose={() => setSidebarOpen(false)} />}

          {/* Content area */}
          <div className="flex w-full lg:w-2/3 h-full border-0 lg:border-r border-border/10">
            <section className="flex-1 flex flex-col h-full bg-surface-dim overflow-y-auto pb-4 lg:pb-0">
              <div className="flex-1 p-4 lg:p-container-padding flex flex-col max-w-3xl">
                {currentStep === 0 && <StepFoundation />}
                {currentStep === 1 && <StepDomain />}
                {currentStep === 2 && <StepEcosystem />}
                {currentStep === 3 && <StepCICD onDone={() => setShowDoneModal(true)} />}
              </div>
            </section>
          </div>

          {/* Desktop preview */}
          <aside className="hidden lg:flex w-1/3 h-full bg-surface-container-low border-l border-border/10 flex-col shrink-0">
            <PreviewHeader />
            <MarkdownPreview />
          </aside>

          {/* Mobile preview overlay */}
          {previewOpen && <MobilePreviewPanel onClose={() => setPreviewOpen(false)} />}
        </main>

        {/* Mobile bottom action */}
        <MobileBottomAction
          currentStep={currentStep}
          onBack={handleBack}
          onNext={handleNext}
          nextDisabled={nextDisabled}
          variant={currentStep === 3 ? "done" : "default"}
        />
      </div>

      <DoneModal
        open={showDoneModal}
        onCopy={handleCopy}
        onDownload={handleDownload}
        onClose={() => setShowDoneModal(false)}
      />

      <Toast
        message={toast ?? ""}
        visible={toast !== null}
        onClose={() => setToast(null)}
      />
    </div>
  )
}
