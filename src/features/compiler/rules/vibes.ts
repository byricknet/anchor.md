import type { Vibe } from "../../../types/schema"

export const vibeRules: Record<Vibe, string> = {
  "speedrun": `**Governance Level:** Speedrun Mode
**Strategy:** Ship fast, iterate faster. Prioritize working software and rapid prototyping over architectural purity.
**Agentic Directives:**
- If a pragmatic shortcut reduces delivery time by more than 50%, take it and tag with \`TODO(speedrun): refactor\`.
- Skip exhaustive error handling on prototypes; add minimal logging at entry points only.
- Do NOT block progress waiting for perfect types — use \`as any\` with a comment explaining why, and move on.`,
  "balanced": `**Governance Level:** Balanced
**Strategy:** Standard engineering discipline. Write clean, maintainable code at a steady, predictable pace.
**Agentic Directives:**
- Default to the principle of least surprise. Prefer well-known patterns over novel abstractions.
- Before adding a new dependency, ask: "Could this be done with 50 lines of stdlib instead?"
- Keep functions under 40 lines. If one grows larger, extract helpers before adding more logic.`,
  "strict-tdd": `**Governance Level:** Strict TDD
**Strategy:** Red-Green-Refactor. Tests drive every implementation decision without exception.
**Agentic Directives:**
- You MUST write the failing test (\`*.test.ts\`) before writing the implementation. This is not optional.
- If a change would break an existing test, halt and notify. Do not modify tests to fit broken code.
- Maintain minimum 90% coverage. Run \`npx vitest --coverage\` before every commit to verify.`,
  "architect": `**Governance Level:** Architect
**Strategy:** Maximum rigor. Full type safety, comprehensive error handling, fully documented public APIs.
**Agentic Directives:**
- You MUST NOT use \`any\`, \`as unknown\`, \`// @ts-expect-error\`, or \`@ts-ignore\` under any circumstance.
- Every public function requires a JSDoc comment describing params, returns, and thrown errors.
- Before accepting a third-party dependency, verify: license compatibility, bundle size impact, and whether the API is stable.`,
}
