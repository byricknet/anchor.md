import type { ArchitectConfig, StackCategory } from "../../types/schema"
import { stackCategories } from "../../types/schema"
import { stackRules } from "./rules/stacks"
import { vibeRules } from "./rules/vibes"

const categoryHeadings: Record<StackCategory, string> = {
  frontend: "Frontend",
  mobile: "Mobile",
  backend: "Backend",
  database: "Database & Storage",
  tooling: "Tooling & Infrastructure",
}

export function compileMarkdown(config: ArchitectConfig): string {
  const stackLabels = config.stack
    .map((t) => {
      for (const cat of stackCategories) {
        const found = cat.items.find((i) => i.value === t)
        if (found) return found.label
      }
      return t
    })
    .join(", ")

  let md = `# ⚓ Project Architecture & AI Directives\n`
  md += `**Project:** ${config.projectName}\n`
  md += `**Governance Level:** ${vibeLabel(config.vibe)}\n`
  md += `**Primary Stack:** ${stackLabels}\n\n`

  md += `## 🤖 Agentic Behavior & CLI Operations\n`
  md += `* **Terminal Discipline:** Before proposing massive file rewrites, always run \`npm run lint\` (or the relevant project command) to verify the current state is not broken.\n`
  md += `* **Incremental Commits:** If a feature requires modifying more than 3 files, break the task down and ask the user to commit the intermediate steps.\n`
  md += `* **Destructive Actions:** NEVER run uninstall commands, drop database tables, delete configuration files, or modify CI/CD workflows without explicit user confirmation.\n`
  md += `* **Context Window Management:** If the conversation context exceeds 80% of the model's limit, summarize the current state into \`CONTEXT.md\` before continuing.\n\n`

  md += `## 🧠 Core Behavior & Vibe\n${vibeRules[config.vibe]}\n\n`

  md += `## 🏗️ Architectural Boundaries\n`

  for (const cat of stackCategories) {
    const selected = config.stack.filter((t) =>
      cat.items.some((i) => i.value === t),
    )
    if (selected.length === 0) continue

    md += `### ${categoryHeadings[cat.key]}\n`
    md += `<Stack: ${selected.map((s) => {
      for (const item of cat.items) {
        if (item.value === s) return item.label
      }
      return s
    }).join(", ")}>\n\n`

    selected.forEach((tech) => {
      md += `${stackRules[tech]}\n\n`
    })
  }

  if (config.enforceTypes) {
    md += `## 🛡️ Type Safety Boundaries\n`
    md += `* You MUST NOT use \`any\`, \`as unknown\`, \`// @ts-expect-error\`, or \`@ts-ignore\` under any circumstance.\n`
    md += `* All function signatures must have explicit return types. Type inference for locals is acceptable.\n`
    md += `* If you encounter an implicit \`any\` while modifying a file, halt, define the missing interface locally, and ask the user for approval before proceeding.\n`
    md += `* Use branded types (\`type UserId = string & { __brand: 'UserId' }\`) for domain primitives to prevent parameter confusion.\n\n`
  }

  md += `## 🧪 Testing & Validation\n`
  md += `* **Test-First:** When asked to create a new utility function, write the Jest test file (\`*.test.ts\`) before writing the implementation.\n`
  md += `* **Error Handling:** Never swallow errors with empty \`catch\` blocks. Surface actionable error messages to the user.\n`
  md += `* **Validation:** Every public API endpoint must validate input at the boundary. Use Zod (or equivalent) schemas, not ad-hoc checks.\n`
  md += `* **Coverage:** Run the test suite before every commit. If coverage drops below 80%, identify untested paths and add tests.\n\n`

  if (!config.useComments) {
    md += `## 📝 Comment Discipline\n`
    md += `* Do NOT add comments explaining what the code does — the code should be self-documenting.\n`
    md += `* ONLY comment on WHY a decision was made when the rationale is non-obvious (e.g., perf workaround, business rule, historical constraint).\n\n`
  }

  if (config.customInstructions) {
    md += `## 📋 Custom User Instructions\n${config.customInstructions}\n`
  }

  return md
}

function vibeLabel(vibe: ArchitectConfig["vibe"]): string {
  const labels: Record<string, string> = {
    speedrun: "Speedrun Mode",
    balanced: "Balanced",
    "strict-tdd": "Strict TDD",
    architect: "Architect Mode",
  }
  return labels[vibe] ?? vibe
}
