---
description: "Instructions for configuring Prettier with plugins for TypeScript projects without initializing npm packages"
applyTo: "**/.prettierrc*,**/prettier.config.*,**/package.json"
---


# Prettier Configuration (Directives)

1. **Generate `.prettierrc.json`** in project root:
  - Use these plugins, in this order (Tailwind last):
    - `prettier-plugin-packagejson`
    - `@ianvs/prettier-plugin-sort-imports`
    - `prettier-plugin-prisma`
    - `prettier-plugin-tailwindcss`
  - Add override for `package.json` to use the JSON parser.
  - Do not install npm packages unless explicitly requested.

2. **Generate `.prettierignore`** in project root:
  - Exclude dependencies, build outputs, generated files, VCS, IDE, logs, coverage, cache, env, DB, Prisma migrations.

3. **VS Code Integration:**
  - Set `editor.defaultFormatter` to `esbenp.prettier-vscode` for all relevant languages in `.vscode/settings.json`.
  - Recommend extensions: `esbenp.prettier-vscode`, `Prisma.prisma-insider`, `bradlc.vscode-tailwindcss` in `.vscode/extensions.json`.

4. **MANDATORY:**
  - `prettier-plugin-tailwindcss` must be last in plugins array.
  - Always include the `package.json` override.
  - Do not install or initialize npm packages unless told.
  - Validate JSON syntax in all config files.

5. **Validation:**
  - Use `npx prettier --check .` and `npx prettier --write .` to check/format files.
  - Ensure plugin order and config compatibility before commit.

6. **Related:**
  - [instructions-files.instructions.md](./instructions-files.instructions.md)
  - [memory-bank-core.instructions.md](./memory-bank-core.instructions.md)
  - [settings.instructions.md](./settings.instructions.md)
  - [../prompts/build-ts-project.prompt.md](../prompts/build-ts-project.prompt.md)
