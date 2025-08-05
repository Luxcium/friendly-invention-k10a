# Prettier, ESLint, TypeScript ESLint, and ESLint Stylistic: 2025 Protocol

## Purpose
This prompt provides a comprehensive, codified guide for AI agents to manage Prettier, ESLint, TypeScript ESLint, and ESLint Stylistic in a modern TypeScript/Node.js project. It ensures all auto-fixable stylistic issues are set to "warn" (non-blocking), supports programmatic manipulation, and avoids obsolete methods. Use this as the authoritative reference for configuration, maintenance, and automation.

---

## Tool Overview
- **Prettier**: Opinionated code formatter for consistent style.
- **ESLint**: Linting tool for code quality in JS/TS.
- **TypeScript ESLint**: Extends ESLint for TypeScript-specific rules.
- **ESLint Stylistic**: Stylistic rules for JS/TS/JSX aesthetics.

---

## Core Principle
- All auto-fixable stylistic rules (indentation, quotes, etc.) must be set to `"warn"`.
- No build-blocking errors for style; only for code quality/type safety.
- Use flat config format for modular, programmatic updates.

---

## Step-by-Step Configuration

### 1. Install Dependencies
```bash
pnpm add -D eslint prettier eslint-config-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin @stylistic/eslint-plugin
```

### 2. ESLint Flat Config (`eslint.config.js`)
```js
import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import stylistic from '@stylistic/eslint-plugin';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: { parser: '@typescript-eslint/parser' },
    plugins: { '@typescript-eslint': ts },
    rules: ts.configs.recommendedTypeChecked.rules,
  },
  {
    plugins: { '@stylistic': stylistic },
    rules: stylistic.configs.recommended.rules,
  },
  prettier,
  {
    rules: {
      '@stylistic/indent': ['warn', 2],
      '@stylistic/quotes': ['warn', 'single'],
      '@typescript-eslint/indent': ['warn', 2],
      '@stylistic/semi': ['warn', 'always'],
      '@stylistic/comma-spacing': ['warn', { before: false, after: true }],
      // Add other auto-fixable rules as needed
    },
  },
];
```

### 3. Prettier Config (`.prettierrc`)
```json
{
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true
}
```

### 4. VS Code Integration (`.vscode/settings.json`)
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "eslint.format.enable": false,
  "[javascript]": {
    "editor.codeActionsOnSave": { "source.fixAll.eslint": true }
  },
  "[typescript]": {
    "editor.codeActionsOnSave": { "source.fixAll.eslint": true }
  }
}
```

### 5. Scripts in `package.json`
```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier --write ."
  }
}
```

---

## Programmatic Manipulation
- Add/modify rules by updating the last config object in `eslint.config.js`.
- Add plugins/configs by importing and extending the config array.
- Use scripts to update config files as needed.

---

## Obsolete Methods to Avoid
- Do not use `.eslintrc` format.
- Always include `eslint-config-prettier`.
- Prefer shared configs and type-checked rules.
- Set stylistic rules to "warn" (not "error").

---

## Documentation & Memory Bank
- Document all config changes and tool usage in `memory-bank/instructions/prettier-configuration.instructions.md` and related files.
- Update `techContext.md` and `progress.md` after each major change.

---

## Key Considerations
- Auto-fixable stylistic rules are always "warn".
- Flat config format is required for extensibility and automation.
- All changes must be documented in the Memory Bank for future AI agent context.

---

## References
- ESLint Flat Config Documentation
- TypeScript ESLint Configs
- ESLint Stylistic Rules
- Prettier Documentation

---

**Use this prompt as the definitive protocol for managing code style and linting in this project.**
