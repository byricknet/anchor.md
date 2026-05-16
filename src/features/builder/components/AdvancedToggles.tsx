import { cn } from "../../../lib/utils"

interface Props {
  enforceTypes: boolean
  useComments: boolean
  onEnforceTypesChange: (v: boolean) => void
  onUseCommentsChange: (v: boolean) => void
}

function ToggleSwitch({ checked, onChange, label }: { checked: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <label className="flex items-center justify-between py-2.5 cursor-pointer group">
      <span className="text-sm text-gray-700">{label}</span>
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />
        <div
          className={cn(
            "w-[44px] h-6 rounded-full transition-colors duration-200",
            checked ? "bg-indigo-600" : "bg-gray-300",
          )}
        >
          <div
            className={cn(
              "w-5 h-5 rounded-full bg-white shadow transition-all duration-200 relative top-0.5",
              checked ? "translate-x-[22px]" : "translate-x-0.5",
            )}
          />
        </div>
      </div>
    </label>
  )
}

export function AdvancedToggles({ enforceTypes, useComments, onEnforceTypesChange, onUseCommentsChange }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-semibold tracking-wider text-gray-500 uppercase">Advanced Options</label>
      <div className="bg-white border border-gray-200 rounded-lg px-4">
        <ToggleSwitch
          checked={enforceTypes}
          onChange={onEnforceTypesChange}
          label="Enforce strict typing"
        />
        <div className="h-px bg-gray-100" />
        <ToggleSwitch
          checked={useComments}
          onChange={onUseCommentsChange}
          label="Generate comments"
        />
      </div>
    </div>
  )
}
