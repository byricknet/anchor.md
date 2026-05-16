import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { ArchitectConfig } from "../types/schema"

interface ConfigState {
  config: ArchitectConfig
  updateConfig: (partial: Partial<ArchitectConfig>) => void
  reset: () => void
}

export const useConfigStore = create<ConfigState>()(
  persist(
    (set) => ({
      config: {
        projectName: "",
        vibe: "balanced",
        stack: [],
        enforceTypes: true,
        useComments: true,
      },
      updateConfig: (partial) =>
        set((state) => ({ config: { ...state.config, ...partial } })),
      reset: () =>
        set({
          config: {
            projectName: "",
            vibe: "balanced",
            stack: [],
            enforceTypes: true,
            useComments: true,
          },
        }),
    }),
    { name: "claude-architect-storage" },
  ),
)
