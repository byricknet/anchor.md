import type { TechStack } from "../../../types/schema"

export const stackRules: Record<TechStack, string> = {
  // ── Frontend ──────────────────────────────────────────
  "react": `### React
**Component Architecture:**
- Use functional components with hooks exclusively. No class components.
- Extract reusable business logic into custom hooks under \`src/hooks/\`.
- Keep components under 120 lines. If a component exceeds this, extract subcomponents or hooks.
**Agentic Directives:**
- When introducing a new state variable, first ask: "Can this be derived from existing state instead?"
- Never mutate state directly. Always use the setter from \`useState\` or dispatch from a reducer.`,
  "nextjs": `### Next.js
**Architecture:**
- Prefer Server Components by default. Keep \`'use client'\` at the leaves of the component tree.
- Use the App Router (\`app/\` directory). Do not create pages under \`pages/\`.
- All data fetching in Server Components; pass results as props to Client Components.
**Agentic Directives:**
- If a component needs interactivity, wrap the minimal interactive part in a Client Component shell.
- Use \`loading.tsx\` and \`error.tsx\` at every route segment that fetches data.`,
  "vue": `### Vue
**Component Architecture:**
- Use the Composition API (\`<script setup>\`) for all new components. Options API is legacy-only.
- Extract reactive logic into composables under \`src/composables/\`.
- Use \`defineProps\` and \`defineEmits\` with TypeScript generics for strict typing.
**Agentic Directives:**
- Prefer \`v-model\` over manual prop/emit pairs for form components.
- Avoid \`provide/inject\` for simple prop drilling — only use it for cross-cutting concerns like themes or auth.`,
  "sveltekit": `### SvelteKit
**Architecture:**
- Use the file-based routing in \`src/routes/\`. Each route directory gets \`+page.svelte\`, \`+layout.svelte\`, and \`+page.ts\` for load functions.
- Place reusable UI in \`src/lib/components/\`. Place utilities in \`src/lib/utils/\`.
**Agentic Directives:**
- Use \`load\` functions for server-side data fetching. Never fetch on the client unless required for dynamic updates.
- Leverage Svelte 5 runes (\`$state\`, \`$derived\`, \`$effect\`) instead of the older \`$:\` syntax.`,

  // ── Mobile ────────────────────────────────────────────
  "flutter": `### Flutter
**Architecture:**
- Use a layered architecture: UI → BLoC/Provider → Repository → Data Source.
- Keep widgets small and composable. Extract repeated widget patterns into reusable components.
**Agentic Directives:**
- Do NOT use \`BuildContext\` across async gaps. Capture it before the gap or use a navigation service.
- Prefer \`const\` constructors wherever possible to enable widget rebuilding optimizations.`,
  "react-native": `### React Native
**Architecture:**
- Separate business logic from UI. Use custom hooks in \`src/hooks/\` for state management.
- Use \`StyleSheet.create\` for static styles; avoid inline style objects in render paths.
**Agentic Directives:**
- Never access \`Dimensions\` directly in a component body — use a hook that listens to changes.
- All async storage, keychain, or file-system calls must be wrapped in try-catch with user-visible error states.`,
  "expo": `### Expo
**Architecture:**
- Use Expo Router for file-based navigation. Treat the \`app/\` directory strictly as a routing layer.
- Keep complex UI components in \`src/components/\`, not in route files.
**Agentic Directives:**
- Before adding a native module, check if Expo SDK already provides it via \`expo-*\` packages.
- Use \`expo-dev-client\` for custom native modules. Avoid ejecting to bare workflow.`,

  // ── Backend ───────────────────────────────────────────
  "node": `### Node.js
**Architecture:**
- Use ES modules (\`"type": "module"\` in package.json). No CommonJS in new code.
- Implement a clear middleware pipeline: auth → validation → handler → response → error.
**Agentic Directives:**
- Every route handler must return a structured JSON response: \`{ success, data?, error? }\`.
- Never swallow promise rejections. Every \`async\` handler must have a \`try/catch\` that calls \`next(error)\`.`,
  "nest": `### NestJS
**Architecture:**
- Follow the module-controller-service pattern. Each domain gets its own module directory.
- Use \`@nestjs/swagger\` decorators for OpenAPI documentation on every endpoint.
**Agentic Directives:**
- All database access must go through a service class. Controllers must not import repositories directly.
- Use validation pipes (\`class-validator\` + \`ValidationPipe\`) on every \`@Body()\` and \`@Query()\` parameter.`,
  "fastapi": `### FastAPI
**Architecture:**
- Use Pydantic v2 models for request/response schemas. Define them in \`src/schemas/\`.
- Group related endpoints into routers under \`src/routers/\`. Mount them in the main app.
**Agentic Directives:**
- Every endpoint must declare explicit response models using \`response_model=\`.
- Use dependency injection for shared concerns (auth, DB sessions). Do not use global variables.`,
  "django": `### Django
**Architecture:**
- Use Django REST Framework for APIs. Keep business logic in service classes, not views.
- Organize by app: each domain gets its own Django app with models, serializers, views, and tests.
**Agentic Directives:**
- All database queries must use the ORM. No raw SQL unless absolutely necessary, and never in views.
- Use \`select_related\` and \`prefetch_related\` to avoid N+1 queries in list endpoints.`,
  "go": `### Go
**Architecture:**
- Follow standard project layout: \`cmd/\`, \`internal/\`, \`pkg/\`, \`api/\`.
- Use interfaces for service boundaries. Define them where they are consumed, not where they are implemented.
**Agentic Directives:**
- Every public function must have a comment. Run \`golint\` before any commit.
- Use \`context.Context\` as the first parameter of every function that performs I/O.`,

  // ── Database ──────────────────────────────────────────
  "supabase": `### Supabase
**Architecture:**
- Isolate all Supabase calls inside a \`src/services/\` directory. Do not write \`supabase.from()\` inside UI components.
- Use the typed generated client from \`supabase gen types\`. Regenerate on every schema change.
**Agentic Directives:**
- Assume Row Level Security (RLS) is active. Every query must include the authenticated user's session.
- Before writing a migration, verify RLS policies exist for every table being modified.`,
  "postgresql": `### PostgreSQL
**Architecture:**
- Use migrations for all schema changes. Never alter the database manually.
- Name migrations descriptively: \`YYYYMMDD_description.sql\`.
**Agentic Directives:**
- Every table must have \`created_at\` and \`updated_at\` timestamps with defaults.
- Index columns used in WHERE, JOIN, and ORDER BY clauses. Use \`EXPLAIN ANALYZE\` to verify query plans.`,
  "mongodb": `### MongoDB
**Architecture:**
- Use Mongoose with strict schemas. Define indexes in the schema definition.
- Design documents to match query patterns, not relational normalization.
**Agentic Directives:**
- Never embed arrays that grow unboundedly. Use references for one-to-many relationships.
- Every query must have a corresponding index. Run \`explain()\` to verify.`,
  "firebase": `### Firebase
**Architecture:**
- Use Firestore with a flat collection structure. Avoid subcollections deeper than 2 levels.
- Write security rules that deny by default, then selectively allow based on auth and data validation.
**Agentic Directives:**
- Never expose Firebase Admin SDK credentials on the client. All admin operations go through Cloud Functions.
- Use batched writes for atomic multi-document updates. Keep batches under 500 operations.`,

  // ── Tooling ───────────────────────────────────────────
  "tailwind": `### Tailwind CSS
**Styling Rules:**
- Never use inline styles. Use Tailwind utility classes exclusively.
- Use \`cn()\` from \`tailwind-merge\` for conditional class merging.
**Agentic Directives:**
- Extract repeated utility patterns into reusable components with \`cn()\` accepting variant props.
- Use Tailwind design tokens from \`tailwind.config\` for colors and spacing. No magic values.`,
  "docker": `### Docker
**Architecture:**
- Use multi-stage builds. The first stage installs dev dependencies and builds; the final stage only has runtime deps.
- Keep images small: prefer \`-slim\` or \`-alpine\` base images.
**Agentic Directives:**
- Every service must have a health check endpoint and a corresponding \`HEALTHCHECK\` instruction.
- Use \`.dockerignore\` to exclude \`node_modules\`, \`.git\`, and build artifacts.`,
  "github-actions": `### GitHub Actions
**Architecture:**
- One workflow file per purpose: \`ci.yml\`, \`deploy.yml\`, \`lint.yml\`, \`release.yml\`.
- Pin action versions by commit SHA, not by semver tag.
**Agentic Directives:**
- Every workflow must run on \`pull_request\` to catch failures before merge.
- Cache dependencies with \`actions/cache\` for \`node_modules\` and build outputs.`,
  "jest": `### Jest / Cypress
**Testing Rules:**
- Place test files next to the module they test: \`button.tsx\` -> \`button.test.tsx\`.
- Use descriptive test names: \`describe('Button') + it('renders primary variant with custom className')\`.
**Agentic Directives:**
- When fixing a bug, first write a test that reproduces it, then fix the code.
- Mock at the module boundary, not inside the module. Use \`jest.mock()\` for external dependencies only.`,
}
