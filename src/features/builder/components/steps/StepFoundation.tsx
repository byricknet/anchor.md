import { useRef } from "react"
import { useConfigStore } from "../../../../store/useConfigStore"
import { useTranslation } from "../../../../i18n"

const vibeMeta = [
  { value: "speedrun" as const, icon: "bolt" },
  { value: "balanced" as const, icon: "balance" },
  { value: "strict-tdd" as const, icon: "shield" },
  { value: "architect" as const, icon: "domain" },
]

export function StepFoundation() {
  const { config, updateConfig, nextStep } = useConfigStore()
  const { t } = useTranslation()
  const inputRef = useRef<HTMLInputElement>(null)

  const vibeLabels = [
    { label: t.identity.vibes.speedrun, desc: t.identity.vibes.speedrunDesc },
    { label: t.identity.vibes.balanced, desc: t.identity.vibes.balancedDesc },
    { label: t.identity.vibes.strictTdd, desc: t.identity.vibes.strictTddDesc },
    { label: t.identity.vibes.enterprise, desc: t.identity.vibes.enterpriseDesc },
  ]

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-[24px] font-semibold text-on-background mb-8 tracking-tight">{t.identity.title}</h2>

      <div className="flex flex-col gap-2 mb-10">
        <label className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-widest">
          {t.identity.projectName}
        </label>
        <input
          ref={inputRef}
          type="text"
          placeholder={t.identity.projectNamePlaceholder}
          value={config.projectName}
          onChange={(e) => updateConfig({ projectName: e.target.value })}
          className="bg-transparent border-0 border-b border-border/10 focus:border-primary focus:ring-0 px-0 py-2 text-[16px] text-on-background placeholder:text-on-surface-variant/50 transition-colors outline-none"
        />
      </div>

      <div className="flex flex-col gap-4">
        <label className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-widest mb-1">
          {t.identity.selectVibe}
        </label>
        {vibeMeta.map((v, i) => {
          const selected = config.vibe === v.value
          const vl = vibeLabels[i]
          return (
            <button
              key={v.value}
              type="button"
              onClick={() => updateConfig({ vibe: v.value })}
              className={`flex flex-col text-left p-6 rounded-lg transition-all cursor-pointer relative overflow-hidden group ${
                selected
                  ? "bg-overlay/5 border border-primary ring-1 ring-primary/20"
                  : "bg-surface border border-border/10 hover:bg-overlay/5 hover:border-border/20"
              }`}
            >
              {selected && <div className="absolute inset-y-0 left-0 w-1 bg-primary" />}
              <div className="flex items-center gap-3 mb-2">
                <span className={`material-symbols-outlined ${selected ? "text-primary" : "text-on-surface-variant group-hover:text-on-background transition-colors"}`} style={{ fontVariationSettings: selected ? "'FILL' 1" : "" }}>{v.icon}</span>
                <span className={`text-[13px] font-mono ${selected ? "text-primary font-bold" : "text-on-background"}`}>
                  {vl.label}
                </span>
              </div>
              <p className="text-[14px] text-on-surface-variant">{vl.desc}</p>
            </button>
          )
        })}
      </div>

      <div className="mt-auto pt-6">
        <button
          type="button"
          disabled={!config.projectName}
          onClick={nextStep}
          className="bg-primary text-on-primary text-[11px] font-semibold uppercase px-8 py-3 rounded hover:bg-primary/90 transition-colors flex items-center gap-2 disabled:opacity-40 cursor-pointer"
        >
          {t.identity.nextStep}
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>
    </div>
  )
}
