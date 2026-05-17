import { z } from "zod"

export const VibeEnum = z.enum(["speedrun", "balanced", "strict-tdd", "architect"])

export const DomainEnum = z.enum(["frontend", "mobile", "fullstack", "backend"])

export const TechStackEnum = z.enum([
  "react", "vue", "sveltekit", "nextjs",
  "flutter", "react-native", "expo",
  "node", "nest", "fastapi", "django", "go",
  "supabase", "postgresql", "mongodb", "firebase",
  "tailwind", "docker", "github-actions", "jest",
])

export type Domain = z.infer<typeof DomainEnum>

export const domainTechs: Record<Domain, TechStack[]> = {
  frontend: ["react", "nextjs", "vue", "sveltekit", "tailwind"],
  mobile: ["react-native", "expo", "flutter"],
  fullstack: ["react", "nextjs", "node", "nest", "supabase", "postgresql", "tailwind"],
  backend: ["node", "nest", "fastapi", "django", "go", "supabase", "postgresql", "mongodb", "firebase"],
}

export const cicdTechs: TechStack[] = ["docker", "github-actions", "jest"]

export const allStackLabels: Record<TechStack, string> = {
  react: "React",
  vue: "Vue",
  sveltekit: "SvelteKit",
  nextjs: "Next.js",
  flutter: "Flutter",
  "react-native": "React Native",
  expo: "Expo",
  node: "Node.js",
  nest: "NestJS",
  fastapi: "FastAPI",
  django: "Django",
  go: "Go",
  supabase: "Supabase",
  postgresql: "PostgreSQL",
  mongodb: "MongoDB",
  firebase: "Firebase",
  tailwind: "Tailwind CSS",
  docker: "Docker",
  "github-actions": "GitHub Actions",
  jest: "Jest / Cypress",
}

export const ArchitectConfigSchema = z.object({
  projectName: z.string().min(1, "Project name is required"),
  vibe: VibeEnum.default("balanced"),
  domain: DomainEnum.default("frontend"),
  stack: z.array(TechStackEnum).default([]),
  customInstructions: z.string().optional(),
  enforceTypes: z.boolean().default(true),
  useComments: z.boolean().default(true),
})

export type ArchitectConfig = z.infer<typeof ArchitectConfigSchema>
export type Vibe = z.infer<typeof VibeEnum>
export type TechStack = z.infer<typeof TechStackEnum>
