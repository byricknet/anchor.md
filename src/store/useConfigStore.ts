import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { ArchitectConfig, Domain } from "../types/schema"

interface ConfigState {
  currentStep: number
  config: ArchitectConfig
  setStep: (step: number) => void
  nextStep: () => void
  prevStep: () => void
  setDomain: (domain: Domain) => void
  updateConfig: (partial: Partial<ArchitectConfig>) => void
  reset: () => void
}

export const useConfigStore = create<ConfigState>()(
  persist(
    (set, get) => ({
      currentStep: 0,
      config: {
        projectName: "",
        vibe: "balanced",
        domain: "frontend",
        stack: [],
        enforceTypes: true,
        useComments: true,
      },
      setStep: (step) => set({ currentStep: step }),
      nextStep: () => set((s) => ({ currentStep: s.currentStep + 1 })),
      prevStep: () => set((s) => ({ currentStep: s.currentStep - 1 })),
      setDomain: (domain) => {
        const current = get().config
        const currentDomain = current.domain
        const domainTechsMap: Record<Domain, string[]> = {
          frontend: ["react", "nextjs", "vue", "sveltekit", "tailwind"],
          mobile: ["react-native", "expo", "flutter"],
          fullstack: ["react", "nextjs", "node", "nest", "supabase", "postgresql", "tailwind"],
          backend: ["node", "nest", "fastapi", "django", "go", "supabase", "postgresql", "mongodb", "firebase"],
        }
        const cicdTechs = ["docker", "github-actions", "jest"]
        const oldDomainTechs = domainTechsMap[currentDomain] ?? []
        const kept = current.stack.filter((t) => !oldDomainTechs.includes(t) || cicdTechs.includes(t))
        set({ config: { ...current, domain, stack: kept } })
      },
      updateConfig: (partial) =>
        set((state) => ({ config: { ...state.config, ...partial } })),
      reset: () =>
        set({
          currentStep: 0,
          config: {
            projectName: "",
            vibe: "balanced",
            domain: "frontend",
            stack: [],
            enforceTypes: true,
            useComments: true,
          },
        }),
    }),
    { name: "claude-architect-storage" },
  ),
)
