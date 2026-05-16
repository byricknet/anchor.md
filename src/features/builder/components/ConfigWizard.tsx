import { useRef } from "react"
import { useConfigStore } from "../../../store/useConfigStore"
import { StackGrid } from "./StackGrid"
import { VibeSlider } from "./VibeSlider"
import { AdvancedToggles } from "./AdvancedToggles"

export function ConfigWizard() {
  const { config, updateConfig, reset } = useConfigStore()
  const inputRef = useRef<HTMLInputElement>(null)

  const hasChanges =
    config.projectName || config.stack.length > 0 || config.customInstructions

  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-lg font-semibold text-gray-900">CLAUDE.md Architect</h1>
        <p className="text-sm text-gray-500 mt-1 leading-relaxed">
          Generate your project's CLAUDE.md configuration file
        </p>
      </header>

      <div className="flex flex-col gap-2">
        <label htmlFor="project-name" className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
          Project Name
        </label>
        <input
          ref={inputRef}
          id="project-name"
          type="text"
          placeholder="my-awesome-project"
          value={config.projectName}
          onChange={(e) => updateConfig({ projectName: e.target.value })}
          className="text-sm px-3.5 py-2.5 rounded-lg bg-gray-100 text-gray-900 border border-transparent focus:border-indigo-500 focus:bg-white outline-none transition-colors duration-200 placeholder:text-gray-400"
        />
      </div>

      <VibeSlider
        value={config.vibe}
        onChange={(vibe) => updateConfig({ vibe })}
      />

      <StackGrid
        selected={config.stack}
        onChange={(stack) => updateConfig({ stack })}
      />

      <div className="flex flex-col gap-2">
        <label htmlFor="custom-instructions" className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
          Custom Instructions
        </label>
        <textarea
          id="custom-instructions"
          placeholder="Any specific requirements or preferences..."
          value={config.customInstructions ?? ""}
          onChange={(e) => updateConfig({ customInstructions: e.target.value })}
          className="text-sm px-3.5 py-2.5 rounded-lg bg-gray-100 text-gray-900 border border-transparent focus:border-indigo-500 focus:bg-white outline-none transition-colors duration-200 min-h-[100px] resize-y placeholder:text-gray-400"
        />
      </div>

      <AdvancedToggles
        enforceTypes={config.enforceTypes}
        useComments={config.useComments}
        onEnforceTypesChange={(v) => updateConfig({ enforceTypes: v })}
        onUseCommentsChange={(v) => updateConfig({ useComments: v })}
      />

      {hasChanges && (
        <button
          type="button"
          onClick={reset}
          className="self-start text-xs font-semibold tracking-wider text-red-500 uppercase px-3 py-1.5 rounded-md hover:bg-red-50 transition-colors duration-200 cursor-pointer"
        >
          Reset all
        </button>
      )}
    </div>
  )
}
