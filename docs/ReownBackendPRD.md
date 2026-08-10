# Backend Product Requirements Document (PRD) | Reown

**Project:** Reown - Nigeria's Trust-Native P2P Marketplace
**Domain:** Backend API, Real-Time Systems, and Escrow Management
**Document Status:** Pre-Build / Development Starting

---

## 1. Executive Summary
This document defines the backend architecture, database schema, required modules, APIs, and third-party integrations for Reown[cite: 1]. The backend is responsible for enforcing strict escrow rules, serving a location-aware Tinder-style swipe feed, managing real-time auction bidding, and maintaining absolute data consistency for financial transactions[cite: 1].

---

## 2. Technology Stack & Rationale
The backend will utilize a modular, strongly-typed Node.js environment to handle concurrent financial transactions and real-time state[cite: 1].

* **Core Framework:** NestJS + Node.js (TypeScript) - Chosen for structured, modular, and scalable enterprise architecture[cite: 1].
* **Database:** PostgreSQL (via Prisma ORM) - ACID compliance is mandatory for escrow money flows[cite: 1]. All currency is stored strictly in kobo (integer) to prevent floating-point errors[cite: 1].
* **Caching & Queues:** Redis (via BullMQ / Keyv) - Used for caching feed rankings, session rate limiting, background job queues (e.g., auto-releases, auction timeouts)[cite: 1].
* **Real-Time Data:** WebSockets (Socket.io) - Required for live auction bids, countdown sync, and masked in-app chat[cite: 1].
* **Search Engine:** Typesense (MVP) transitioning to Elasticsearch (V3) - Enables fast, location-aware search and feed filtering[cite: 1].
* **Infrastructure:** CI/CD via GitHub Actions; deployment on Railway (MVP backend auto-scaling)[cite: 1]. Error tracking via Sentry[cite: 1].

---

## 3. Database Entities (Core Schema)
All monetary values (prices, fees, bids) MUST be stored in **kobo (bigint)**[cite: 1].

### 3.1 `users`
* `id` (UUID, PK)
* `email` (Unique, NON-EDITABLE)[cite: 1]
* `password_hash` (Bcrypt)[cite: 1]
* `first_name`, `last_name`, `phone` (Masked in chat)[cite: 1]
* `date_of_birth`, `country`, `state`, `location_lat_lng`[cite: 1]
* `role` (Enum: BUY, SELL, BOTH)[cite: 1]
* `seller_type` (Enum: CASUAL, PRO)[cite: 1]
* `verification_tier` (Enum: BASIC, VERIFIED, PRO)[cite: 1]
* `nin_verified`, `bvn_verified` (Booleans)[cite: 1]
* `bank_account_number`, `bank_name`, `bank_account_name` (Encrypted at rest)[cite: 1]
* `strike_count`, `suspended_until`, `rating_avg`, `total_sales`[cite: 1]
* `follower_count`, `following_count`, `terms_accepted_at`, `created_at`[cite: 1]

### 3.2 `listings`
* `id` (UUID, PK)
* `seller_id` (FK -> users)[cite: 1]
* `type` (Enum: MARKETPLACE, AUCTION, GIVEAWAY)[cite: 1]
* `title`, `category`, `condition`, `price` (bigint kobo)[cite: 1]
* `status` (Enum: DRAFT, ACTIVE, SOLD, EXPIRED, FLAGGED)[cite: 1]
* `visibility` (Enum: PUBLIC, PRIVATE_LINK)[cite: 1]
* `share_token` (Unique string for shareable links)[cite: 1]
* `location_area` (Public), `location_full_address` (Private, encrypted)[cite: 1]
* `media_urls` (JSONB - max 8 photos or 1 video)[cite: 1]
* `inspection_available` (Boolean), `expires_at`, `boost_until`[cite: 1]

### 3.3 `orders` (Escrow Ledger)
* `id` (UUID, PK)
* `listing_id` (FK), `buyer_id` (FK), `seller_id` (FK)[cite: 1]
* `item_amount`, `buyer_fee`, `total_charged` (all kobo)[cite: 1]
* `status` (Enum: PENDING, ESCROWED, RELEASED, DISPUTED, REFUNDED)[cite: 1]
* `paystack_ref`, `escrow_sub_account`, `handoff_code` (4-digit string)[cite: 1]
* `auto_release_at`, `buyer_confirmed_at`, `released_at`[cite: 1]

### 3.4 `auctions` & `bids`
* **`auctions`:** `id`, `listing_id`, `start_price`, `reserve_price`, `buy_it_now_price`, `current_bid`, `current_winner_id`, `ends_at`, `soft_close_minutes` (Default 10), `bid_count`, `status`[cite: 1].
* **`bids`:** `id`, `auction_id`, `bidder_id`, `amount`, `max_proxy_amount`, `is_proxy_bid`, `created_at` (Append-only)[cite: 1].

### 3.5 `giveaways` (Pass It On)
* `id`, `listing_id`, `claim_mode` (FCFS, GIVER_CHOOSES), `pickup_deadline_hours`, `winner_id`, `status`[cite: 1].

### 3.6 Other Supporting Tables
* **`messages`:** `id`, `order_id`, `sender_id`, `receiver_id`, `content` (auto-masked), `is_flagged`, `flag_reason`[cite: 1].
* **`watch_alerts`:** `id`, `user_id`, `search_parameters`, `duration_days`, `expires_at`[cite: 1].
* **`follows`:** `id`, `follower_id`, `following_id` (Unique constraint on pair)[cite: 1].

---

## 4. Core Backend Modules & Workflows

### 4.1 Auth & KYC Module
* **Email OTP:** 6-digit code via email with 10-minute expiry[cite: 1]. Email addresses are completely non-editable post-creation[cite: 1].
* **Identity Verification:** Integrates with Prembly API. Verifies NIN or BVN[cite: 1]. Never stores raw ID data, only the verified boolean status[cite: 1].

### 4.2 Discovery & Feed Engine
* **Ranking Algorithm:** Served via Typesense/Redis. The feed score is calculated as: `(Recency * 0.3 + Proximity * 0.3 + Seller Trust * 0.2 + Media * 0.1 + Relevance * 0.1) * Boost Multiplier * Following Multiplier (10.0)`[cite: 1].
* Score is calculated server-side, cached in Redis, and refreshed every 15 minutes[cite: 1].
* Maximum of 2 boosted listings allowed per 10-card swipe stack[cite: 1].

### 4.3 Escrow & Payment Module (Paystack)
* **Tiered Fee Calculation:** Backend computes 6%, 5%, 3.5%, 2.5%, or 2% buyer protection fee based on item value[cite: 1].
* **Escrow Flow:** Payment is verified via Paystack Webhooks. Backend generates a 4-digit `handoff_code`[cite: 1].
* **Address Disclosure:** Full pickup address is decrypted and injected into the buyer's chat solely as a system message upon escrow confirmation[cite: 1].
* **Release:** Seller submits `handoff_code` via API. Backend triggers Paystack Transfer API to seller's verified bank account[cite: 1]. 
* **Auto-Release:** A background cron/queue releases funds 72 hours after handoff if the buyer takes no manual action[cite: 1].

### 4.4 Moderation & Chat System
* **Data Masking:** Regex pipeline sanitizes messages to detect/mask phone numbers and `wa.me` links[cite: 1].
* **Chat Tiers:** Free users are limited to 10 messages per listing prior to escrow. Subscribed/Pro users have unlimited text/audio[cite: 1].
* **Strikes System:** 3 confirmed strikes result in a 30-day suspension. Off-platform solicitation auto-flags accounts for manual ops review[cite: 1].

---

## 5. API Endpoints (REST)
*(A logical grouping of required controllers)*

* **`POST /auth/register`**, **`POST /auth/login`**, **`POST /auth/verify-otp`**[cite: 1]
* **`PATCH /users/profile`**, **`POST /users/verify-identity`** (Prembly bridge)[cite: 1]
* **`GET /feed/swipe`** (Returns paginated 10-card stack based on ranking alg + location)[cite: 1]
* **`POST /listings`** (Creates draft/active marketplace, auction, or giveaway listings)[cite: 1]
* **`POST /listings/:id/boost`** (Initiates Paystack charge for x8.0 multiplier logic)[cite: 1]
* **`POST /orders/checkout`** (Initializes Paystack transaction for escrow)[cite: 1]
* **`POST /orders/:id/release`** (Accepts `handoff_code`, triggers payout)[cite: 1]
* **`POST /orders/:id/dispute`** (Freezes escrow, alters status to DISPUTED)[cite: 1]
* **`POST /webhooks/paystack`** (Listens for `charge.success` to finalize escrow)[cite: 1]

## 6. WebSocket Events (Socket.io)
Primarily required for real-time Live Auctions and Chat[cite: 1].

* `auction:bid_placed` - New bid submitted by a user[cite: 1]
* `auction:bid_updated` - Proxy bid auto-incremented by the system[cite: 1]
* `auction:soft_close_extended` - Bid placed in final 10 mins; timer extends by 10 mins[cite: 1]
* `auction:ended` - Auction timer reaches zero[cite: 1]
* `auction:winner_confirmed` - Winner identified after close[cite: 1]
* `auction:payment_escrowed` - Winner funds escrow[cite: 1]
* `auction:second_chance_offered` - Non-payment by winner (24hr timeout); second bidder notified[cite: 1]
* `chat:message_sent`, `chat:message_delivered`, `chat:message_read`[cite: 1]

---

## 7. Third-Party Integrations
1. **Paystack:** Payment Gateway. Requires Escrow Sub-Accounts API, Transactions (Charge) API, and Transfers (Payout) API[cite: 1]. Bank Account Name lookup API is used during seller bank setup[cite: 1].
2. **Prembly:** KYC API for NIN and BVN checks[cite: 1].
3. **Cloudinary:** Media API. Backend generates signed upload URLs so mobile clients upload directly to CDN (max 60s video, 5MB compression limits)[cite: 1].
4. **Firebase Cloud Messaging (FCM):** Push notifications for Reown Watch matches, bid outbid alerts, and escrow releases[cite: 1].