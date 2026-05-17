# ⚓ anchor.md

> **Ship smarter. Configure once.** A premium CLAUDE.md generator that translates your architectural intent into production-grade agentic directives for Claude Code.

---

## Overview

**anchor.md** replaces scattered documentation and guesswork with a structured configuration wizard. Define your project's identity, domain, tech stack, and engineering vibe — and receive a meticulously crafted `CLAUDE.md` that governs every aspect of how Claude Code operates within your codebase.

No more generic prompts. No more forgotten constraints. Every directive is opinionated, precise, and battle-tested.

---

## Features

| Capability | Detail |
|---|---|
| **🎯 Domain-Driven Stack Selection** | 21 technologies across Frontend, Mobile, Fullstack, and Backend ecosystems. Choose your domain and we filter the relevant stack automatically. |
| **🧠 Engineering Vibe System** | Speedrun (rapid prototyping), Balanced (standard discipline), Strict TDD (maximum stability), or Architect (enterprise-scale governance). Each mode generates a different flavor of agentic constraints. |
| **⚡ Agentic Directives** | Auto-generated rules for terminal discipline, incremental commits, destructive action guards, context window management, type safety enforcement, test-first workflows, error handling standards, and comment discipline. |
| **👁️ Live Preview** | A dual-pane IDE experience — configure on the left, see the rendered `CLAUDE.md` update in real-time on the right. |
| **🌐 Bilingual Interface** | Full English and Mexican Spanish (es-MX) support with instant toggling. |
| **🌗 Adaptive Theming** | Light and dark modes that respect your system preference, with a hand-crafted color system using Material 3-inspired tokens. |
| **📱 Responsive Architecture** | Desktop sidebar navigation, mobile bottom sheet actions, and a dedicated preview overlay — all optimized for every viewport. |
| **📋 Export Flexibility** | Copy to clipboard or download as `CLAUDE.md` with one click. |

---

## Architecture

```
src/
├── features/
│   ├── builder/          # Configuration wizard
│   │   ├── components/   # TopAppBar, StepperSidebar, step components
│   │   └── steps/        # StepFoundation, StepDomain, StepEcosystem, StepCICD
│   ├── compiler/         # Markdown generation engine
│   │   ├── generate.ts   # compileMarkdown() — the core compiler
│   │   └── rules/        # Stack-specific and vibe-specific directive templates
│   └── preview/          # MarkdownPreview with syntax highlighting
├── store/                # Zustand state management with localStorage persistence
├── i18n/                 # Typed internationalization (en, es-MX)
├── types/                # Zod schemas and TypeScript types for the config model
└── hooks/                # useTheme — system-preference-aware theme toggle
```

---

## Stack

- **React 19** with strict TypeScript
- **Vite** for instant HMR and production builds
- **Tailwind CSS v4** with a custom `@theme` token system supporting light/dark variants
- **Zustand** with `persist` middleware for zero-config state hydration
- **Zod** for runtime schema validation of the configuration model
- **react-markdown** + **rehype-highlight** for the live preview pane
- **Material Symbols** for a consistent, expressive icon language

---

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:5173` and the wizard greets you.

### Build for Production

```bash
npm run build
npm run preview
```

---

## The Compiler

The heart of anchor.md is `compileMarkdown()` in `src/features/compiler/generate.ts`. It assembles your configuration into a structured `CLAUDE.md` with six sections:

1. **Project Identity** — name, governance level, domain, primary stack
2. **Agentic Behavior & CLI Operations** — terminal discipline, incremental commits, destructive action guards, context window management
3. **Core Behavior & Vibe** — vibe-specific rules (speedrun shortcuts vs. enterprise ceremony)
4. **Architectural Boundaries** — per-technology rules (React patterns, Next.js conventions, Prisma workflows, etc.)
5. **Type Safety Boundaries** — branded types, explicit return types, `any` prohibition
6. **Testing & Validation** — test-first requirement, error handling standards, coverage gates

---

## Philosophy

Great agentic code generation doesn't come from a single prompt — it comes from **structured governance**. Every decision in anchor.md is designed to reduce friction between human intent and machine execution:

- **Explicit over implicit.** Every rule is a concrete directive, not a suggestion.
- **Context-aware.** The compiler knows what stack you picked and adjusts its output accordingly.
- **Opinionated but flexible.** The vibe system lets you dial strictness up or down without starting over.
- **Bilingual by default.** Language shouldn't be a barrier to great tooling.

---

<p align="center">
  <sub>Built with React, TypeScript, and unreasonable attention to detail.</sub>
</p>
