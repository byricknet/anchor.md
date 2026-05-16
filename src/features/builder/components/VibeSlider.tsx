import type { Vibe } from "../../../types/schema"
import { cn } from "../../../lib/utils"

const vibes: { value: Vibe; label: string; desc: string }[] = [
  { value: "speedrun", label: "Speedrun", desc: "Ship fast" },
  { value: "balanced", label: "Balanced", desc: "Standard rigor" },
  { value: "strict-tdd", label: "Strict TDD", desc: "Test-first" },
  { value: "architect", label: "Architect", desc: "Maximum rigor" },
]

interface Props {
  value: Vibe
  onChange: (vibe: Vibe) => void
}

export function VibeSlider({ value, onChange }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-semibold tracking-wider text-gray-500 uppercase">Engineering Vibe</label>
      <div className="grid grid-cols-4 gap-2">
        {vibes.map((v) => {
          const selected = value === v.value
          return (
            <button
              key={v.value}
              type="button"
              onClick={() => onChange(v.value)}
              className={cn(
                "flex flex-col items-center justify-center gap-1 px-3 py-4 rounded-lg transition-all duration-200 cursor-pointer",
                "border text-center",
                selected
                  ? "ring-2 ring-indigo-500 bg-indigo-500/10 border-indigo-500 text-indigo-700"
                  : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300",
              )}
            >
              <span className="text-sm font-medium">{v.label}</span>
              <span className="text-[11px] text-inherit opacity-60">{v.desc}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
