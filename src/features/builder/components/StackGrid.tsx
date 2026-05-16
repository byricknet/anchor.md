import type { TechStack } from "../../../types/schema"
import { stackCategories } from "../../../types/schema"
import { cn } from "../../../lib/utils"

interface Props {
  selected: TechStack[]
  onChange: (stack: TechStack[]) => void
}

export function StackGrid({ selected, onChange }: Props) {
  function toggle(tech: TechStack) {
    if (selected.includes(tech)) {
      onChange(selected.filter((t) => t !== tech))
    } else {
      onChange([...selected, tech])
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-semibold tracking-wider text-gray-500 uppercase">Technology Stack</label>
      <div className="flex flex-col gap-4">
        {stackCategories.map((cat) => (
          <div key={cat.key}>
            <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider block mb-2">
              {cat.label}
            </span>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((tech) => {
                const isActive = selected.includes(tech.value)
                return (
                  <button
                    key={tech.value}
                    type="button"
                    onClick={() => toggle(tech.value)}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm cursor-pointer transition-all duration-200",
                      isActive
                        ? "bg-indigo-600 text-white shadow-sm border-transparent"
                        : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50",
                    )}
                  >
                    {tech.label}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
