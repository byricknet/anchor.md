import { z } from "zod"

export const VibeEnum = z.enum(["speedrun", "balanced", "strict-tdd", "architect"])

export const TechStackEnum = z.enum([
  "react", "vue", "sveltekit", "nextjs",
  "flutter", "react-native", "expo",
  "node", "nest", "fastapi", "django", "go",
  "supabase", "postgresql", "mongodb", "firebase",
  "tailwind", "docker", "github-actions", "jest",
])

export type StackCategory = "frontend" | "mobile" | "backend" | "database" | "tooling"

export const stackCategories: { label: string; key: StackCategory; items: { value: TechStack; label: string }[] }[] = [
  {
    label: "Frontend",
    key: "frontend",
    items: [
      { value: "react", label: "React" },
      { value: "nextjs", label: "Next.js" },
      { value: "vue", label: "Vue" },
      { value: "sveltekit", label: "SvelteKit" },
    ],
  },
  {
    label: "Mobile",
    key: "mobile",
    items: [
      { value: "flutter", label: "Flutter" },
      { value: "react-native", label: "React Native" },
      { value: "expo", label: "Expo" },
    ],
  },
  {
    label: "Backend",
    key: "backend",
    items: [
      { value: "node", label: "Node.js" },
      { value: "nest", label: "NestJS" },
      { value: "fastapi", label: "FastAPI" },
      { value: "django", label: "Django" },
      { value: "go", label: "Go" },
    ],
  },
  {
    label: "Database",
    key: "database",
    items: [
      { value: "supabase", label: "Supabase" },
      { value: "postgresql", label: "PostgreSQL" },
      { value: "mongodb", label: "MongoDB" },
      { value: "firebase", label: "Firebase" },
    ],
  },
  {
    label: "Tooling",
    key: "tooling",
    items: [
      { value: "tailwind", label: "Tailwind CSS" },
      { value: "docker", label: "Docker" },
      { value: "github-actions", label: "GitHub Actions" },
      { value: "jest", label: "Jest/Cypress" },
    ],
  },
]

export const ArchitectConfigSchema = z.object({
  projectName: z.string().min(1, "Project name is required"),
  vibe: VibeEnum.default("balanced"),
  stack: z.array(TechStackEnum).min(1, "Select at least one technology"),
  customInstructions: z.string().optional(),
  enforceTypes: z.boolean().default(true),
  useComments: z.boolean().default(true),
})

export type ArchitectConfig = z.infer<typeof ArchitectConfigSchema>
export type Vibe = z.infer<typeof VibeEnum>
export type TechStack = z.infer<typeof TechStackEnum>
