import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import type { Translations } from "./types"
import { en } from "./locales/en"
import { esMX } from "./locales/es-MX"

type Locale = "en" | "es-MX"

const locales: Record<Locale, Translations> = { en, "es-MX": esMX }

interface I18nContextType {
  locale: Locale
  t: Translations
  setLocale: (locale: Locale) => void
}

const I18nContext = createContext<I18nContextType | null>(null)

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "es-MX"
  const saved = localStorage.getItem("anchor-locale") as Locale | null
  if (saved && (saved === "en" || saved === "es-MX")) return saved
  return "es-MX"
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    localStorage.setItem("anchor-locale", next)
  }, [])

  return (
    <I18nContext.Provider value={{ locale, t: locales[locale], setLocale }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useTranslation() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useTranslation must be used within I18nProvider")
  return ctx
}
