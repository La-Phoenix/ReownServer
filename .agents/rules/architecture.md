# Reown Backend Architecture & Coding Rules

- Follow Clean / Hexagonal Architecture (Domain, Application, Infrastructure, Presentation).
- Apply SOLID principles strictly across all modules.
- **NEVER use `any` type** anywhere in TypeScript code. Enforce strict typing everywhere.
- **ALWAYS document all REST API endpoints and DTOs using `@nestjs/swagger`** (`@ApiTags`, `@ApiOperation`, `@ApiResponse`, `@ApiProperty`).
- Store all monetary values as `bigint` in **kobo** (1 Naira = 100 kobo).
