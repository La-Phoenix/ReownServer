-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('BUY', 'SELL', 'BOTH');

-- CreateEnum
CREATE TYPE "SellerType" AS ENUM ('CASUAL', 'PRO');

-- CreateEnum
CREATE TYPE "VerificationTier" AS ENUM ('BASIC', 'VERIFIED', 'PRO');

-- CreateEnum
CREATE TYPE "ListingType" AS ENUM ('MARKETPLACE', 'AUCTION', 'GIVEAWAY');

-- CreateEnum
CREATE TYPE "ListingStatus" AS ENUM ('DRAFT', 'ACTIVE', 'SOLD', 'EXPIRED', 'FLAGGED');

-- CreateEnum
CREATE TYPE "ListingVisibility" AS ENUM ('PUBLIC', 'PRIVATE_LINK');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'ESCROWED', 'RELEASED', 'DISPUTED', 'REFUNDED');

-- CreateEnum
CREATE TYPE "GiveawayClaimMode" AS ENUM ('FCFS', 'GIVER_CHOOSES');

-- CreateEnum
CREATE TYPE "GiveawayStatus" AS ENUM ('ACTIVE', 'CLAIMED', 'EXPIRED');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "phone" TEXT,
    "date_of_birth" TIMESTAMP(3),
    "country" TEXT,
    "state" TEXT,
    "location_lat_lng" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'BOTH',
    "seller_type" "SellerType" NOT NULL DEFAULT 'CASUAL',
    "verification_tier" "VerificationTier" NOT NULL DEFAULT 'BASIC',
    "nin_verified" BOOLEAN NOT NULL DEFAULT false,
    "bvn_verified" BOOLEAN NOT NULL DEFAULT false,
    "bank_account_number" TEXT,
    "bank_name" TEXT,
    "bank_account_name" TEXT,
    "strike_count" INTEGER NOT NULL DEFAULT 0,
    "suspended_until" TIMESTAMP(3),
    "rating_avg" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "total_sales" INTEGER NOT NULL DEFAULT 0,
    "follower_count" INTEGER NOT NULL DEFAULT 0,
    "following_count" INTEGER NOT NULL DEFAULT 0,
    "terms_accepted_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "listings" (
    "id" TEXT NOT NULL,
    "seller_id" TEXT NOT NULL,
    "type" "ListingType" NOT NULL DEFAULT 'MARKETPLACE',
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "price" BIGINT NOT NULL,
    "status" "ListingStatus" NOT NULL DEFAULT 'DRAFT',
    "visibility" "ListingVisibility" NOT NULL DEFAULT 'PUBLIC',
    "share_token" TEXT,
    "location_area" TEXT NOT NULL,
    "location_full_address" TEXT,
    "media_urls" JSONB NOT NULL,
    "inspection_available" BOOLEAN NOT NULL DEFAULT false,
    "expires_at" TIMESTAMP(3),
    "boost_until" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "listings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" TEXT NOT NULL,
    "listing_id" TEXT NOT NULL,
    "buyer_id" TEXT NOT NULL,
    "seller_id" TEXT NOT NULL,
    "item_amount" BIGINT NOT NULL,
    "buyer_fee" BIGINT NOT NULL,
    "total_charged" BIGINT NOT NULL,
    "status" "OrderStatus" NOT NULL DEFAULT 'PENDING',
    "paystack_ref" TEXT,
    "escrow_sub_account" TEXT,
    "handoff_code" TEXT,
    "auto_release_at" TIMESTAMP(3),
    "buyer_confirmed_at" TIMESTAMP(3),
    "released_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auctions" (
    "id" TEXT NOT NULL,
    "listing_id" TEXT NOT NULL,
    "start_price" BIGINT NOT NULL,
    "reserve_price" BIGINT,
    "buy_it_now_price" BIGINT,
    "current_bid" BIGINT NOT NULL DEFAULT 0,
    "current_winner_id" TEXT,
    "ends_at" TIMESTAMP(3) NOT NULL,
    "soft_close_minutes" INTEGER NOT NULL DEFAULT 10,
    "bid_count" INTEGER NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "auctions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bids" (
    "id" TEXT NOT NULL,
    "auction_id" TEXT NOT NULL,
    "bidder_id" TEXT NOT NULL,
    "amount" BIGINT NOT NULL,
    "max_proxy_amount" BIGINT,
    "is_proxy_bid" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bids_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "giveaways" (
    "id" TEXT NOT NULL,
    "listing_id" TEXT NOT NULL,
    "claim_mode" "GiveawayClaimMode" NOT NULL DEFAULT 'FCFS',
    "pickup_deadline_hours" INTEGER NOT NULL DEFAULT 48,
    "winner_id" TEXT,
    "status" "GiveawayStatus" NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "giveaways_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "messages" (
    "id" TEXT NOT NULL,
    "order_id" TEXT,
    "sender_id" TEXT NOT NULL,
    "receiver_id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "is_flagged" BOOLEAN NOT NULL DEFAULT false,
    "flag_reason" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "watch_alerts" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "search_parameters" JSONB NOT NULL,
    "duration_days" INTEGER NOT NULL DEFAULT 7,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "watch_alerts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "follows" (
    "id" TEXT NOT NULL,
    "follower_id" TEXT NOT NULL,
    "following_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "follows_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "listings_share_token_key" ON "listings"("share_token");

-- CreateIndex
CREATE UNIQUE INDEX "auctions_listing_id_key" ON "auctions"("listing_id");

-- CreateIndex
CREATE UNIQUE INDEX "giveaways_listing_id_key" ON "giveaways"("listing_id");

-- CreateIndex
CREATE UNIQUE INDEX "follows_follower_id_following_id_key" ON "follows"("follower_id", "following_id");

-- AddForeignKey
ALTER TABLE "listings" ADD CONSTRAINT "listings_seller_id_fkey" FOREIGN KEY ("seller_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_listing_id_fkey" FOREIGN KEY ("listing_id") REFERENCES "listings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_buyer_id_fkey" FOREIGN KEY ("buyer_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_seller_id_fkey" FOREIGN KEY ("seller_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "auctions" ADD CONSTRAINT "auctions_listing_id_fkey" FOREIGN KEY ("listing_id") REFERENCES "listings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "auctions" ADD CONSTRAINT "auctions_current_winner_id_fkey" FOREIGN KEY ("current_winner_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bids" ADD CONSTRAINT "bids_auction_id_fkey" FOREIGN KEY ("auction_id") REFERENCES "auctions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bids" ADD CONSTRAINT "bids_bidder_id_fkey" FOREIGN KEY ("bidder_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "giveaways" ADD CONSTRAINT "giveaways_listing_id_fkey" FOREIGN KEY ("listing_id") REFERENCES "listings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "giveaways" ADD CONSTRAINT "giveaways_winner_id_fkey" FOREIGN KEY ("winner_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_receiver_id_fkey" FOREIGN KEY ("receiver_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "watch_alerts" ADD CONSTRAINT "watch_alerts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "follows" ADD CONSTRAINT "follows_follower_id_fkey" FOREIGN KEY ("follower_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "follows" ADD CONSTRAINT "follows_following_id_fkey" FOREIGN KEY ("following_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
