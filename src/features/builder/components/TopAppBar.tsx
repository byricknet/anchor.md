import { useTheme } from "../../../hooks/useTheme"
import { useTranslation } from "../../../i18n"

export function TopAppBar() {
  const { isDark, toggleTheme } = useTheme()
  const { t, locale, setLocale } = useTranslation()

  return (
    <header className="bg-background border-b border-border/10 flex justify-between items-center w-full px-container-padding h-16 shrink-0 z-10">
      <div className="text-[24px] font-semibold text-on-background tracking-tight leading-none">
        anchor
      </div>
      <div className="flex items-center gap-stack-md">
        <button
          type="button"
          onClick={() => setLocale(locale === "en" ? "es-MX" : "en")}
          className="text-[13px] font-mono text-on-surface-variant hover:text-primary transition-colors cursor-pointer px-2 py-1 rounded border border-border/10 hover:border-border/20"
          title={locale === "en" ? "Español (MX)" : "English"}
        >
          {locale === "en" ? "ES" : "EN"}
        </button>
        <button
          type="button"
          onClick={toggleTheme}
          className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
          title={isDark ? t.topbar.lightMode : t.topbar.darkMode}
        >
          <span className="material-symbols-outlined">
            {isDark ? "light_mode" : "dark_mode"}
          </span>
        </button>
        
      </div>
    </header>
  )
}
