import type { TechStack } from "../../../types/schema"
import { cn } from "../../../lib/utils"
import { TechIcon } from "../../../lib/icons"

interface Props {
  tech: TechStack
  label: string
  selected: boolean
  onToggle: () => void
}

export function TechCard({ tech, label, selected, onToggle }: Props) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        "aspect-square flex flex-col items-center justify-center gap-3 rounded-xl border transition-all duration-200 cursor-pointer",
        selected
          ? "ring-1 ring-primary/20 border-primary/50 bg-primary/5"
          : "border-border/10 bg-surface-container-low hover:bg-overlay/5 hover:border-border/20",
      )}
    >
      <TechIcon tech={tech} className="w-8 h-8" />
      <span className={cn(
        "text-[13px] font-mono",
        selected ? "text-primary" : "text-on-surface-variant",
      )}>
        {label}
      </span>
    </button>
  )
}
