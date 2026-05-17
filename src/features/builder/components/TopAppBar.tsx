import { useTheme } from "../../../hooks/useTheme"
import { useTranslation } from "../../../i18n"

interface Props {
  onMenuClick: () => void
  onPreviewClick: () => void
}

export function TopAppBar({ onMenuClick, onPreviewClick }: Props) {
  const { isDark, toggleTheme } = useTheme()
  const { t, locale, setLocale } = useTranslation()

  return (
    <header className="bg-background border-b border-border/[0.06] flex justify-between items-center w-full px-4 lg:px-container-padding h-12 lg:h-16 shrink-0 z-10">
      <div className="flex items-center gap-2">
        <div className="text-[25px] lg:text-[24px] font-semibold text-on-background tracking-tight leading-none">
          anchor
        </div>
      </div>
      <div className="flex items-center gap-1 lg:gap-stack-md">
        <button
          type="button"
          onClick={onPreviewClick}
          className="lg:hidden text-on-surface-variant/60 hover:text-on-surface transition-colors cursor-pointer p-1.5"
          aria-label="Toggle preview"
        >
          <span className="material-symbols-outlined text-lg">code</span>
        </button>
        <button
          type="button"
          onClick={toggleTheme}
          className="text-on-surface-variant/60 hover:text-on-surface transition-colors cursor-pointer p-1.5"
          title={isDark ? t.topbar.lightMode : t.topbar.darkMode}
        >
          <span className="material-symbols-outlined text-lg lg:text-[20px]">
            {isDark ? "light_mode" : "dark_mode"}
          </span>
        </button>
        <button
          type="button"
          onClick={() => setLocale(locale === "en" ? "es-MX" : "en")}
          className="text-[10px] lg:text-[13px] font-mono text-on-surface-variant/60 hover:text-on-surface transition-colors cursor-pointer px-1.5 lg:px-2 py-1"
          title={locale === "en" ? "Español (MX)" : "English"}
        >
          {locale === "en" ? "ES" : "EN"}
        </button>
       
      </div>
    </header>
  )
}
