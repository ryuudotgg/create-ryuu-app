# Development Guide

## Project Overview

Ryuu's Forge is a monorepo-based project structured using workspaces:

- `apps/*` - Applications
- `packages/*` - Shared Packages and Libraries
- `tooling/*` - Development and Build Tools

## Prerequisites

Ensure you have the following installed:

- Git
- [Node](https://nodejs.org)
  - Version: [.nvmrc](../.nvmrc)
- [PNPM](https://pnpm.io)
  - Version: [package.json#packageManager](../package.json#L4)

## Getting Started

1. Clone the repository:

```bash
git clone git@github.com:<YOUR_USERNAME>/forge.git
cd forge
```

2. Install dependencies:

```bash
pnpm install
```

3. Copy the environment variables:

```bash
cp .env.example .env
```

4. Start the development server:

```bash
pnpm dev
```

## Available Commands

- `pnpm build` - Build Apps and Packages
- `pnpm check` - Run Biome's Formatter and Linter
- `pnpm check:fix` - Auto-fix Issues with Biome
- `pnpm clean` - Clean Dependencies and Build Artifacts
- `pnpm clean:workspaces` - Clean **ALL** Dependencies and Build Artifacts
- `pnpm dev` - Start a Development Server
- `pnpm lint:ws` - Lint Workspace with Sherif
- `pnpm start` - Start Apps in Production
- `pnpm typecheck` - Run Type Checks

## Code Style

We use [Biome](https://biomejs.dev) for code formatting and linting, alongside strict TypeScript configurations.

### TypeScript

- Enable strict mode for all TypeScript code
- Proper type definitions for all variables, parameters, and return types
- No `any` types without explicit justification in comments
- Use TypeScript's utility types when appropriate

### React Components

- Use function declarations for components (not arrow functions unless very simple)
- Properly type all props and state
- Follow React 19 best practices
- Use proper React Hooks organization

#### Component Example

```typescript
export function MyComponent({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) {
  return <button onClick={onClick}>{title}</button>;
}
```

### File Structure

- One component per file
- Use index.ts files for exporting multiple components from a directory
- Keep related components together in a directory

## Testing

We use [Vitest](https://vitest.dev) for testing. To run tests:

```bash
pnpm test        # Run Tests
pnpm test:watch  # Run Tests in Watch Mode
```

When writing tests:

- Place test files in a directory outside `src`
- Use descriptive test names that explain the expected behavior
- Write both unit and integration tests where appropriate

## Debugging

For debugging applications:

1. Start the development server with `pnpm dev`
2. Use your browser's dev tools for frontend debugging
3. Add `console.log()` statements for quick debugging (remove before committing)

## Pull Requests

Before submitting a PR, please read our [Pull Request Guidelines](./PULL_REQUESTS.md) for detailed information about our PR process, including conventional commit formats and the review process.

## Need Help?

- Ask for help on [GitHub Discussions](https://github.com/ryuudotgg/forge/discussions)
- Check existing issues on [GitHub Issues](https://github.com/ryuudotgg/forge/issues)
- Review the [Documentation](https://forge.ryuu.gg/docs)
