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
      <h2 className="text-[24px] font-semibold text-on-background mb-2 tracking-tight">{t.identity.title}</h2>
      <p className="text-[14px] text-on-surface-variant mb-6 lg:mb-8">{t.identity.selectVibe}</p>

      <div className="flex flex-col gap-2 mb-8 lg:mb-10">
        <label className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-widest">
          {t.identity.projectName}
        </label>
        <div className="relative group">
          <input
            ref={inputRef}
            type="text"
            placeholder={t.identity.projectNamePlaceholder}
            value={config.projectName}
            onChange={(e) => updateConfig({ projectName: e.target.value })}
            className="w-full bg-surface-container-low border border-border/10 px-4 py-3.5 lg:px-0 lg:py-2 lg:bg-transparent lg:border-0 lg:border-b text-[16px] text-on-background placeholder:text-on-surface-variant/30 focus:outline-none focus:border-border/20 transition-all outline-none lg:focus:border-primary"
          />
          <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary group-focus-within:w-full transition-all duration-300 hidden lg:block" />
        </div>
      </div>

      <div className="flex flex-col gap-3 lg:gap-4">
        <label className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-widest mb-1 hidden lg:block">
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
              className={`flex items-center text-left p-4 lg:p-6 transition-all cursor-pointer w-full ${
                selected
                  ? "bg-overlay/5 border-l-2 border-primary border-y lg:border-r border-border/10"
                  : "bg-surface-container-low lg:bg-surface border border-border/10 hover:bg-overlay/5 lg:rounded-lg"
              } ${selected ? "" : "lg:rounded-lg"}`}
            >
              <div className="flex flex-col flex-grow min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className={`material-symbols-outlined ${selected ? "text-primary" : "text-on-surface-variant"}`} style={{ fontVariationSettings: selected ? "'FILL' 1" : "" }}>{v.icon}</span>
                  <span className={`text-[16px] lg:text-[13px] font-mono ${selected ? "text-primary font-bold" : "text-on-surface"}`}>
                    {vl.label}
                  </span>
                </div>
                <p className="text-[13px] lg:text-[14px] text-on-surface-variant ml-8 lg:ml-0">{vl.desc}</p>
              </div>
              <span className={`material-symbols-outlined shrink-0 ${
                selected ? "text-primary" : "text-border/30"
              }`}>
                {selected ? "radio_button_checked" : "radio_button_unchecked"}
              </span>
            </button>
          )
        })}
      </div>

      <div className="hidden lg:flex mt-auto pt-6">
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
