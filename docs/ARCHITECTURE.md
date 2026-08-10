# Reown Backend Architecture & Development Guidelines

This document outlines the architectural patterns, design principles, and strict coding standards enforced across the **Reown** backend codebase.

---

## 🏛️ Architecture Overview: Clean / Hexagonal Architecture

The project follows **Clean / Hexagonal Architecture (Ports and Adapters)** integrated with NestJS to enforce strict separation of concerns, testability, and financial security.

### Layer Hierarchy

Each domain feature module (e.g., `auth`, `users`, `listings`, `orders`, `auctions`, `feed`) is structured into four distinct layers:

```text
api/src/<module_name>/
├── domain/                      # Pure Domain Logic & Core Business Rules
│   ├── entities/                # Domain Entities (No Framework Dependencies)
│   └── value-objects/           # Value Objects (e.g., HandoffCode, KoboAmount)
├── application/                 # Use Cases & Interfaces (Ports)
│   ├── ports/                   # Abstract Repository & Gateway Interfaces
│   ├── services/                # Specialized Calculation & Domain Services
│   └── use-cases/               # Orchestrated Application Use Cases
├── infrastructure/              # External Adapters & Data Access
│   ├── adapters/                # Paystack, Prembly, Cloudinary, Redis Adapters
│   └── repositories/            # Prisma ORM Database Implementations
└── presentation/                # Framework-Specific Controllers & DTOs
    ├── controllers/             # NestJS Controllers
    ├── dtos/                    # Request/Response Data Transfer Objects (Class-Validator)
    └── gateways/                # Socket.io WebSockets Gateways
```

---

## 🛡️ SOLID Principles Enforcement

1. **Single Responsibility Principle (SRP):**
   - Controllers handle HTTP routing, request validation, and OpenAPI documentation only.
   - Use Cases encapsulate single business actions (e.g., `CheckoutOrderUseCase`).
   - Adapters handle isolated external service communications (e.g., `PaystackAdapter`).

2. **Open/Closed Principle (OCP):**
   - Core domain logic relies on interfaces (`ports`), allowing third-party adapters (Paystack, Prembly) or calculation strategies (buyer protection fees) to be extended without modifying core use cases.

3. **Liskov Substitution Principle (LSP):**
   - All external adapters (e.g., notification providers, payment gateways) implement shared interface contracts and can be swapped seamlessly in tests or production.

4. **Interface Segregation Principle (ISP):**
   - Repositories and external service interfaces are kept granular (e.g., `IUserAuthRepository`, `IUserKycRepository`) so components depend only on the methods they consume.

5. **Dependency Inversion Principle (DIP):**
   - High-level application use cases depend on domain abstraction interfaces (`ports`), not concrete NestJS services or Prisma classes.

---

## 🚨 Strict Coding & Quality Rules

### Rule 1: NO `any` Type Allowed
* **Strict TypeScript:** The use of `any`, `unknown` without type-narrowing, or explicit type assertion bypasses (`as any`) is strictly forbidden.
* **Strict Typing:** All variables, function parameters, return types, DTO fields, and database queries MUST be explicitly typed using TypeScript interfaces, types, enums, or Prisma generated types.
* **DTO Validation:** Every incoming request body/query parameter must use `class-validator` and `class-transformer` annotations.

### Rule 2: ALWAYS Document APIs on Swagger (`@nestjs/swagger`)
* **OpenAPI Standard:** Every NestJS Controller and DTO MUST be fully decorated with `@nestjs/swagger` annotations.
* **Controller Level:** Every controller must include `@ApiTags('Feature Name')` and `@ApiBearerAuth()` (if protected).
* **Endpoint Level:** Every endpoint method must specify:
  - `@ApiOperation({ summary: 'Short description', description: 'Detailed specs' })`
  - `@ApiResponse({ status: 200, description: 'Success message', type: ResponseDto })`
  - Proper HTTP error status responses (`@ApiBadRequestResponse()`, `@ApiUnauthorizedResponse()`, `@ApiNotFoundResponse()`).
* **DTO Level:** Every property in a request/response DTO must be annotated with `@ApiProperty()` or `@ApiPropertyOptional()`, complete with example values and descriptions.

### Rule 3: Monetary Values Stored Strictly in Kobo
* All monetary values (prices, fees, bids, total charged) **MUST** be handled and stored as `bigint` / `BigInt` representing **kobo** (e.g., ₦1,000 = 100,000 kobo). Floating-point currency calculations are strictly banned to prevent rounding errors.

### Rule 4: Always Use `prisma migrate dev` (Never `prisma db push`)
* All database changes must be recorded as tracked migration SQL files using `npx prisma migrate dev --name <migration_name>`. **`npx prisma db push` is strictly banned** to prevent untracked schema mutations.

### Rule 5: Mandatory TypeScript Type Checks
* Always verify that all TypeScript code passes strict type checking (`npx tsc --noEmit`) with zero compilation or import type errors after making edits.

### Rule 6: Avoid Magic Strings & Raw Hardcoded Constants
* Never hardcode magic strings (e.g., `'VERIFIED'`, `'BOTH'`, `'CASUAL'`, token expiration strings `'7d'`, or raw error messages) inline. Always use Prisma generated Enums (`UserRole`, `SellerType`, `VerificationTier`), domain TypeScript enums, or centralized constants files under `api/src/common/constants`.

---

## 🧪 Testing Guidelines

* **Unit Tests (`*.spec.ts`):** Test Use Cases and Domain Entities in pure TypeScript using mock interfaces.
* **Integration/E2E Tests (`*.e2e-spec.ts`):** Test presentation controllers and database adapters using Supertest and test database containers.
