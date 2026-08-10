# Reown Backend API 🚀

> **Reown** — Nigeria's Trust-Native P2P Circular Economy Marketplace.

Reown is a peer-to-peer marketplace with native escrow protection via Paystack, a Tinder-style swipe discovery feed, identity verification (NIN/BVN via Prembly), and a 4-digit physical handoff code system for safe payment releases.

---

## 🛠️ Tech Stack & Architecture

- **Framework:** NestJS + Node.js (TypeScript)
- **Database:** PostgreSQL via Prisma ORM (*All monetary values stored strictly as `bigint` in **kobo***)
- **Cache & Queues:** Redis (via BullMQ / Keyv)
- **Real-Time Gateway:** WebSockets (Socket.io) for Live Auctions & Chat
- **Search Engine:** Typesense / Elasticsearch
- **Payment & Escrow Gateway:** Paystack (Escrow Sub-Accounts, Transfers, Charges)
- **Identity Verification (KYC):** Prembly (NIN & BVN checks)
- **API Documentation:** Swagger / OpenAPI UI

### 🏛️ Clean Architecture (Ports & Adapters)

Each feature module under `api/src/` follows a strict 4-layer Clean Architecture layout:

```text
api/src/<module_name>/
├── domain/                      # Domain Entities, Value Objects (Pure Rules)
│   ├── entities/
│   └── value-objects/
├── application/                 # Use Cases, Ports (Interfaces), Domain Services
│   ├── ports/
│   ├── services/
│   └── use-cases/
├── infrastructure/              # Repositories (Prisma) & Third-Party Adapters
│   ├── adapters/
│   └── repositories/
└── presentation/                # Controllers, DTOs (Class-Validator), Gateways
    ├── controllers/
    ├── dtos/
    └── gateways/
```

---

## 📋 Strict Coding Standards

1. **NO `any` Types:** Use of `any` is strictly prohibited. All methods, variables, and parameters must be explicitly typed with TypeScript interfaces or Prisma types.
2. **Mandatory Swagger Documentation:** All REST endpoints must be decorated with `@ApiTags`, `@ApiOperation`, and `@ApiResponse`.
3. **Monetary Integrity:** All prices, fees, and transaction amounts are represented in **kobo** as integers (`bigint`), preventing floating-point arithmetic errors.

---

## 🚀 Getting Started

### 1. Prerequisites
- [Node.js v20+](https://nodejs.org)
- [Docker](https://www.docker.com/) (for local PostgreSQL & Redis)

### 2. Environment Setup
Copy the environment template and set your credentials:

```bash
cp api/.env.example api/.env
```

### 3. Spin Up Local Services (PostgreSQL & Redis)
Start the PostgreSQL database and Redis containers using Docker Compose:

```bash
docker-compose up -d
```

### 4. Install Dependencies & Generate Prisma Client
Navigate to the `api` directory and run:

```bash
cd api
npm install
npx prisma generate
```

### 5. Run Database Migrations
Apply database schema migrations to PostgreSQL:

```bash
npx prisma migrate dev --name init
```

### 6. Start the Development Server
Launch the NestJS application in watch mode:

```bash
npm run start:dev
```

The API will run on `http://localhost:3000`.

---

## 📚 API Documentation (Swagger)

Interactive Swagger UI documentation is automatically available when running the application:

🔗 **Swagger OpenAPI Docs:** `http://localhost:3000/api/docs`

---

## 📂 Project Documentation References

All full product and technical requirements are centralized in the [`docs/`](file:///Users/user/Desktop/Work/ReownBackend/docs) directory:

- 📄 [`docs/ReownPRD.md`](file:///Users/user/Desktop/Work/ReownBackend/docs/ReownPRD.md) — Full Product Requirements Document.
- 📄 [`docs/ReownBackendPRD.md`](file:///Users/user/Desktop/Work/ReownBackend/docs/ReownBackendPRD.md) — Backend Architecture & Database Schema Specification.
- 📄 [`docs/ARCHITECTURE.md`](file:///Users/user/Desktop/Work/ReownBackend/docs/ARCHITECTURE.md) — Clean Architecture & SOLID Development Guidelines.
