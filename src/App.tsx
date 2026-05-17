import { useConfigStore } from "./store/useConfigStore"
import { TopAppBar } from "./features/builder/components/TopAppBar"
import { StepperSidebar } from "./features/builder/components/StepperSidebar"
import { StepFoundation } from "./features/builder/components/steps/StepFoundation"
import { StepDomain } from "./features/builder/components/steps/StepDomain"
import { StepEcosystem } from "./features/builder/components/steps/StepEcosystem"
import { StepCICD } from "./features/builder/components/steps/StepCICD"
import { MarkdownPreview } from "./features/preview/MarkdownPreview"
import { PreviewHeader } from "./features/preview/PreviewHeader"

const steps = [StepFoundation, StepDomain, StepEcosystem, StepCICD]

export default function App() {
  const currentStep = useConfigStore((s) => s.currentStep)
  const ActiveStep = steps[currentStep]

  return (
    <div className="h-dvh w-dvw flex items-center justify-center">
      <div className="w-4/5 h-[80dvh] flex flex-col overflow-hidden rounded-2xl border border-border/[0.08] bg-surface shadow-2xl">
        <TopAppBar />
        <main className="flex flex-1 overflow-hidden mx-auto w-full">
          <div className="flex w-2/3 h-full border-r border-border/10">
            <StepperSidebar />
            <section className="flex-1 flex flex-col h-full bg-surface-dim overflow-y-auto">
              <div className="flex-1 p-container-padding flex flex-col max-w-3xl">
                <ActiveStep />
              </div>
            </section>
          </div>
          <aside className="w-1/3 h-full bg-surface-container-low border-l border-border/10 flex flex-col">
            <PreviewHeader />
            <MarkdownPreview />
          </aside>
        </main>
      </div>
    </div>
  )
}
