import { useCallback, useSyncExternalStore } from "react"

function getSnapshot() {
  return document.documentElement.classList.contains("dark") ? "dark" : "light"
}

function subscribe(callback: () => void) {
  const observer = new MutationObserver(() => callback())
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
  return () => observer.disconnect()
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, () => "dark")

  const toggleTheme = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark"
    document.documentElement.classList.toggle("dark", next === "dark")
    localStorage.setItem("anchor-theme", next)
  }, [theme])

  return { theme, toggleTheme, isDark: theme === "dark" }
}
