# Reown Backend Architecture & Coding Rules

- Follow Clean / Hexagonal Architecture (Domain, Application, Infrastructure, Presentation).
- Apply SOLID principles strictly across all modules.
- **NEVER use `any` type** anywhere in TypeScript code. Enforce strict typing everywhere.
- **ALWAYS document all REST API endpoints and DTOs using `@nestjs/swagger`** (`@ApiTags`, `@ApiOperation`, `@ApiResponse`, `@ApiProperty`).
- Store all monetary values as `bigint` in **kobo** (1 Naira = 100 kobo).
- **NEVER use `npx prisma db push`**. Always use `npx prisma migrate dev --name <name>` to preserve database migration history.
- **ALWAYS run TypeScript type check** (`npx tsc --noEmit`) to ensure zero type errors or missing import declarations.
- **AVOID MAGIC STRINGS**: Never hardcode raw strings for status codes, roles, tiers, configuration defaults, or token durations. Always use TypeScript enums, Prisma generated enums, or centralized constants files.
