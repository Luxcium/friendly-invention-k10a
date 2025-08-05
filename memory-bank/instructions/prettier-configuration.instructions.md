---
description: "Instructions for configuring Prettier with plugins for TypeScript projects without initializing npm packages"
applyTo: "**/.prettierrc*,**/prettier.config.*,**/package.json"
---



# Prettier Configuration (Directives)

## Initialization (Run Once)

1. Generate `.prettierrc.json` in project root:
   - Plugins (in order, Tailwind last):
     - `prettier-plugin-packagejson`
     - `@ianvs/prettier-plugin-sort-imports`
     - `prettier-plugin-prisma`
     - `prettier-plugin-tailwindcss`
   - Add override for `package.json` to use the JSON parser.
2. Generate `.prettierignore` in project root (exclude build, deps, generated, VCS, IDE, logs, env, DB, Prisma migrations).
3. VS Code: Set `editor.defaultFormatter` to `esbenp.prettier-vscode` for all relevant languages in `.vscode/settings.json`.
4. VS Code: Add extension recommendations: `esbenp.prettier-vscode`, `Prisma.prisma-insider`, `bradlc.vscode-tailwindcss` in `.vscode/extensions.json`.
5. Do not install npm packages unless explicitly requested.

## Maintenance (Repeat as Needed)

- Update `.prettierrc.json` and `.prettierignore` if plugin list, rules, or ignore patterns change.
- Keep plugin order: Tailwind plugin must always be last.
- Validate config with `npx prettier --check .` and fix with `npx prettier --write .`.
- If new file types or tools are added, update VS Code settings and extension recommendations.
- Always validate JSON syntax after edits.

## Troubleshooting in VS Code

- **Formatter not working:**
  - Check that `esbenp.prettier-vscode` is installed and set as default formatter.
  - Reload VS Code window after config changes.
  - Ensure no conflicting formatters/extensions are enabled.
- **Plugin errors:**
  - Confirm plugin order in `.prettierrc.json` (Tailwind last).
  - Check for typos in plugin names and config.
  - If plugins are missing, install them as dev dependencies (when allowed):
    - `npm add -D prettier@latest prettier-plugin-tailwindcss@latest prettier-plugin-prisma@latest prettier-plugin-packagejson@latest @ianvs/prettier-plugin-sort-imports@latest`
- **Extension issues:**
  - Open Extensions panel, search for and install any missing recommended extensions.
  - Disable/Remove conflicting formatters.
- **Still broken?**
  - Run Prettier from CLI for error output: `npx prettier --check .`
  - Check VS Code Output panel for Prettier logs.
  - Restart VS Code.

## Related

- [instructions-files.instructions.md](./instructions-files.instructions.md)
- [memory-bank-core.instructions.md](./memory-bank-core.instructions.md)
- [settings.instructions.md](./settings.instructions.md)
- [../prompts/build-ts-project.prompt.md](../prompts/build-ts-project.prompt.md)
