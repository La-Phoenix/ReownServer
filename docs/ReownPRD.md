# reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
usereown.com usereown.ng[cite: 2]
ROGOWMNTS DOCUMENT[cite: 2]
FULL VERSION[cite: 2]
Nigeria's Trust-Native P2P Marketplace[cite: 2]
The complete product vision, architecture, feature specifications, release roadmap, and trust framework for Reown peer-to-peer circular economy marketplace.[cite: 2]
Africa's first escrow-protected[cite: 2]

| | |
| :--- | :--- |
| **Product Name** | Reown[cite: 2] |
| **Document Type** | Product Requirements Document (PRD) Full Version[cite: 2] |
| **Status** | v2.0 Pre-Build Design Complete, Development Starting[cite: 2] |
| **Domain** | usereown.com usereown.ng[cite: 2] |
| **Platform** | iOS and Android Mobile App + Marketing Website[cite: 2] |
| **Market** | Nigeria Lagos First Rollout[cite: 2] |
| **Brand Red** | #E8472A[cite: 2] |
| **Version** | v2.0[cite: 2] |
| **Date** | May 2026[cite: 2] |
| **Classification** | Internal Use Only CONFIDENTIAL[cite: 2] |

This document is a living artifact. It defines the full product vision, architecture, feature specifications, release plan, and trust framework for Reown. Update it as the product evolves. All information is confidential and intended for internal team use only.[cite: 2]

2,000+ Target Users Month 3[cite: 2]
#15M Target GMV Month 3[cite: 2]
5 Commerce Modes[cite: 2]
3+ Release Phases.[cite: 2]

Reown PRD-Full Version v2.0 May 2026 Confidential[cite: 2]
Page 1[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
usereown.com usereown.ng[cite: 2]

## TOC TABLE OF CONTENTS[cite: 2]
1. Executive Summary[cite: 2]
1.1 The Problem & Solution[cite: 2]
1.2 Three Commerce Modes[cite: 2]
1.3 Mission Statement[cite: 2]
1.4 Key Success Metrics[cite: 2]
2. Problem & Market Opportunity[cite: 2]
2.1 How Nigerians Currently Sell Used Goods[cite: 2]
2.2 Seller Universe Who Reown Serves[cite: 2]
2.3 Competitor Analysis[cite: 2]
3. User Personas[cite: 2]
4. Product Overview & Architecture[cite: 2]
4.1 Platform Summary[cite: 2]
4.2 Swipe Card Design - Key UX Decisions[cite: 2]
4.3 Bottom Navigation (Role-Based)[cite: 2]
4.4 Explore Tab[cite: 2]
4.5 Three Commerce Modes[cite: 2]
5. Feature Specifications[cite: 2]
5.1 Authentication & Sign-Up[cite: 2]
5.2 Seller Types & Role Switching[cite: 2]
5.3 Feed & Discovery[cite: 2]
5.4 Listing Creation[cite: 2]
5.5 Escrow & Payment Flow[cite: 2]
5.6 Handoff Code System[cite: 2]
5.7 Inspection System[cite: 2]
5.8 Chat System[cite: 2]
5.9 Pro Seller & Followers[cite: 2]
5.10 Boost System[cite: 2]
5.11 Notifications[cite: 2]
5.12 Dispute Flow[cite: 2]
5.13 Seller Dashboard[cite: 2]
5.14 Referral Programme[cite: 2]
5.15 Website Pages[cite: 2]
5.16 Seller Analytics[cite: 2]
5.17 Account & Data Management[cite: 2]
5.18 Content Moderation[cite: 2]
5.19 Terms & Conditions[cite: 2]
6. Reown Auctions[cite: 2]

Reown PRD-Full Version v2.0 May 2026 Confidential[cite: 2]
Page 2[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
usereown.com usereown.ng[cite: 2]
7. Pass It On Giveaways[cite: 2]
8. Al Features Roadmap[cite: 2]
9. Technical Architecture[cite: 2]
9.1 Technology Stack[cite: 2]
9.2 Database Schema[cite: 2]
9.3 Feed Ranking Algorithm[cite: 2]
9.4 Currency Storage Rule[cite: 2]
9.5 WebSocket Events[cite: 2]
10. Revenue Model[cite: 2]
11. Reown Royalty Card[cite: 2]
12. Go-to-Market Strategy[cite: 2]
13. Release Roadmap[cite: 2]
14. Trust, Safety & Prohibited Items[cite: 2]
15. Open Questions[cite: 2]
16. Glossary[cite: 2]

Reown PRD-Full Version v2.0 May 2026 Confidential[cite: 2]
Page 3[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
## 01 EXECUTIVE SUMMARY[cite: 2]
usereown.com usereown.ng[cite: 2]

### The Problem[cite: 2]
One Story[cite: 2]
"In December 2023, a Nigerian woman sent 150,000 to an Instagram declutter to buy a generator. The declutter collected the payment and blocked her. She had no recourse just a DM thread and a lost N150,000. This is not an edge case. It is the standard experience for millions of Nigerians buying and selling used goods."[cite: 2]
Reown was built so this never happens again.[cite: 2]

### 1.1 The Solution[cite: 2]
Reown collapses the unsafe, expensive, opaque declutter-as-middleman model into a structured marketplace where:[cite: 2]
* Sellers post directly no middleman markup of 30-50%[cite: 2]
* Buyers discover items via a Tinder-style full-bleed swipe feed, location-filtered and price-filtered, from Day 1[cite: 2]
* Every transaction is protected by native escrow money held by Reown, not the seller[cite: 2]
* A 4-digit handoff code confirms physical exchange at the point of collection, triggering automatic payment release[cite: 2]
* Optional expert inspectors verify goods before purchase (V2)[cite: 2]
* Declutters and tokunbo importers are onboarded as Pro Sellers turning the informal market into the platform supply base[cite: 2]
* Trust compounds platform every transaction builds a public reputation visible and portable across the[cite: 2]
* Pro Sellers build a follower base and a branded storefront subdomain[cite: 2]

### 1.2 Three Commerce Modes[cite: 2]
| Mode | Description | Version |
| :--- | :--- | :--- |
| Marketplace | Fixed-price swipe discovery with escrow on every transaction. Fullbleed -card feed from Day 1. | MVP Full |
| Auctions | Proxy bidding, soft close, public or private with shareable links. Escrow on winner payment. Core auction flow ships at MVP. Pro Seller auction features in V3. | MVP-Core V3 Pro features |
| Pass It On | Free community giveaways. First Come or Giver Chooses mode. Viral shareable card. Core giveaway flow ships at MVP. | MVP-Core V4- Advanced |

### 1.3 Mission Statement[cite: 2]
"To make peer-to-peer commerce in Nigeria as safe as buying from a trusted friend and as easy as swiping right."[cite: 2]

Reown PRD-Full Version v2.0 May 2026 Confidential[cite: 2]
Page 4[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
usereown.com usereown.ng[cite: 2]

### 1.4 Key Success Metrics[cite: 2]
| Metric | Month 3 Target | Month 6 Target |
| :--- | :--- | :--- |
| Registered verified users | 2,000 | 10,000 |
| Completed transactions | 500 | 3,000 |
| Gross Merchandise Value (GMV) | N15M | N150M |
| Dispute rate | <5% | < 3% |
| Off-platform solicitation reports | Tracked | <0.5% of sessions |

Reown PRD-Full Version v2.0 May 2026 Confidential[cite: 2]
Page 5[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
usereown.com usereown.ng[cite: 2]

## 02 PROBLEM & MARKET OPPORTUNITY[cite: 2]

### 2.1 How Nigerians Currently Sell Used Goods[cite: 2]
1. Seller finds an Instagram declutter page in their city[cite: 2]
2. Seller sends a DM with photos and asks to list[cite: 2]
3. Declutter posts the item at a 30-50% markup[cite: 2]
4. Interested buyers DM the declutter. An inspection fee is collected if the buyer wants to view first[cite: 2]
5. Declutter collects full payment. Buyer arranges own delivery or pickup[cite: 2]
6. If the declutter is fraudulent, the buyer is blocked and loses all funds with no recourse[cite: 2]
7. Seller receives their pre-agreed amount often weeks later, with no transparency[cite: 2]

### 2.2 Seller Universe Who Reown Serves[cite: 2]
* Instagram and Facebook declutters: Full-time resellers with existing audiences who need a safe checkout layer[cite: 2]
* Tokunbo importers: People who import used goods from the UK, US, Canada, and Dubai and need a local sales channel[cite: 2]
* Market traders: Trade Fair, Alaba International, Computer Village, and Oshodi resellers going online[cite: 2]
* Relocating sellers: People moving abroad or between cities selling household items quickly before departure[cite: 2]
* Students and NYSC corpers: Selling items after graduation, end of service, or between semesters[cite: 2]
* WhatsApp resellers: People who currently sell via broadcast lists and need a structured storefront[cite: 2]
* Individual declutterers: Anyone clearing out their home who wants a safe, structured way to sell[cite: 2]

### 2.3 Competitor Analysis[cite: 2]
| Platform | Escrow | Swipe UX | Inspection | Verified | Rating | Used Goods | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Jiji.ng | No | No | No | No | No | Partial | Classifieds only |
| Facebook Marketplace | No | No | No | No | No | Partial | No trust layer |
| Instagram Declutters | No | No | Manual | No | No | Yes | Dominant today |
| Vinted (Europe) | Yes | No | No | Partial | Yes | Yes | Fashion only |
| Marketplace Naija | Basic | No | No | Partial | No | Yes | Early stage |
| Reown | Yes Native | Yes | Yes | Yes | Yes | Yes | WHITE SPACE |

Reown is the only platform in Nigeria combining native escrow, swipe UX, inspection, identity verification, and ratings in one product.[cite: 2]

Reown PRD-Full Version v2.0 May 2026 Confidential[cite: 2]
Page 6[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
usereown.com usereown.ng[cite: 2]

## 03 USER PERSONAS[cite: 2]

**Tunde, 31- The Relocating Seller**[cite: 2]
Description: IT Consultant moving to Canada in 6 weeks. Wants to sell 12 household items quickly before departure.[cite: 2]
Pain Point: Declutters take weeks and take 30-50% of his money.[cite: 2]
Reown Value: Posts all 12 items in minutes using bulk listing. Escrow guarantees payment before he boards.[cite: 2]

**Amara, 27 The Deal-Seeking Buyer**[cite: 2]
Description: Marketing executive, Lagos Island. Has been scammed twice. Wants a quality MacBook Pro under 200,000.[cite: 2]
Pain Point: Cannot verify sellers, pays first and prays.[cite: 2]
Reown Value: Swipe feed with escrow on every listing. Sets Reown Watch. Pays into escrow releases only when MacBook is in her hands.[cite: 2]

**Chinyere, 34 The Pro Declutter**[cite: 2]
Description: Full-time Instagram reseller, 42k followers. Imports tokunbo in bulk from Trade Fair.[cite: 2]
Pain Point: Chargeback risk, fake buyers, no structured inventory or order management.[cite: 2]
Reown Value: Pro Seller storefront at chinyere.usereown.com. Escrow eliminates payment risk. 847 followers on Reown see every new listing. 312 completed sales and 4.9 rating are proof that survives beyond Instagram.[cite: 2]

**Emeka, 45 The Community Giver**[cite: 2]
| | |
| :--- | :--- |
| Description | NGO director, Surulere. Replacing furniture and wants to give old items away. |
| Pain Point | Posts on Facebook groups, gets 50 requests with no way to pick the right person. |
| Reown Value | Pass It On with Giver Chooses mode. Reviews requests. Picks the most compelling case. Viral shareable card. |

Reown PRD-Full Version v2.0 May 2026 Confidential[cite: 2]
Page 7[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
usereown.com usereown.ng[cite: 2]

## 04 PRODUCT OVERVIEW & ARCHITECTURE[cite: 2]

### 4.1 Platform Summary[cite: 2]
Reown is a mobile-first application (iOS and Android). The Tinder-style full-bleed swipe feed is the primary navigation paradigm for the Marketplace from Day 1 this is a core design decision, not a later enhancement. A web-based marketing site (usereown.com) supports downloads, seller onboarding, and trust education. Pro Seller subdomains (e.g. chinyere.usereown.com) serve as shareable storefronts accessible without an account.[cite: 2]

### 4.2 Swipe Card Design - Key UX Decisions[cite: 2]
* Swipe right: Save item to Saved Items list[cite: 2]
* Swipe left: Skip card does not reappear in session[cite: 2]
* Swipe up / tap arrow: Open full listing detail sheet (plain text arrow, no circle)[cite: 2]
* Undo button: Brings back last swiped card. One undo per swipe, unlimited per session. No paywall.[cite: 2]
* Action strip: X (Skip) Undo (slightly larger, centred) Heart (Save) sit on a dark frosted strip at the card's bottom edge. Card rounded corners wrap around this strip. Below the card = only the bottom nav bar.[cite: 2]
* Photo dots: When a listing has multiple photos, dots appear at top of card. Horizontal swipe cycles through up to 8 photos without triggering skip.[cite: 2]
* No boost button on card: Boost is a seller-side tool only. Never visible to buyers on the swipe card..[cite: 2]
* Pickup address: Public: neighbourhood + state only. Private: full address auto-sent as system message in buyer's chat thread after escrow payment confirmed.[cite: 2]

### 4.3 Bottom Navigation (Role-Based)[cite: 2]
| User Role | Slot 1 | Slot 2 | Slot 3 (Centre) | Slot 4 | Slot 5 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Buyer Only | Swipe | Explore | Watch (Watch icon, prominent) | Chat | Profile |
| Seller / Both | Swipe | Explore | + Sell (red circle) | Chat | Profile |

Nav updates immediately when role is changed in Settings → My Role.[cite: 2]
Pass It On creation (giving, not selling) is available to buyer-only users via Explore → Pass It On Create Giveaway.[cite: 2]

### 4.4 Explore Tab[cite: 2]
The Explore tab contains only two modes, accessed via chips:[cite: 2]
* Auctions (MVP Core): Live and upcoming auction listings[cite: 2]
* Pass It On (MVP - Core): Free community giveaways[cite: 2]
The swipe feed IS the primary listing discovery mechanism. Explore does NOT have an "All Listings" chip. All listing discovery happens through the Swipe tab.[cite: 2]

Reown PRD-Full Version v2.0 May 2026 Confidential[cite: 2]
Page 8[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]

### 4.5 Three Commerce Modes Detailed[cite: 2]
usereown.com usereown.ng[cite: 2]

| | Marketplace | Auctions | Pass It On |
| :--- | :--- | :--- | :--- |
| Price | Fixed set by seller | Bid-driven | Free |
| UX | Tinder swipe feed | Live bid room | Community noticeboard |
| Escrow | Yes every order | Yes-winner pays within 24h | No |
| Claim | First-to-pay | Highest bidder | First Come or Giver Chooses |
| Visibility | Public or private link | Public or private link | Public or private link |
| MVP scope | Full feature set | Core bidding flow only | Core giveaway flow only |
| Later versions | V2: boost, Al, Pro features | V3: extended durations, analytics | V4: community trust score |

Reown PRD-Full Version v2.0 May 2026 Confidential[cite: 2]
Page 9[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
usereown.com usereown.ng[cite: 2]

## 05 FEATURE SPECIFICATIONS[cite: 2]

### 5.1 Authentication & Sign-Up[cite: 2]

#### 5.1.1 Sign-Up Screen[cite: 2]
The sign-up screen is intentionally fast only the essentials to create an account. Five fields on one screen. First Name and Last Name share the same row. All fields pre-fill into the onboarding flow so users do not re-type them.[cite: 2]

| Field | Detail | Editable Later? |
| :--- | :--- | :--- |
| First Name | Legal government name required. Same row as Last Name. | Yes Settings Account |
| Last Name | Legal government name required. Same row as First Name. | Yes Settings → Account |
| Email Address | identity anchor. Used for OTP verification, login, and security communications. | NO permanently locked (see §5.17) |
| Password | Show/hide toggle. Real-time strength meter (Weak / Medium / Strong / Very Strong). Min 8 chars, 1 uppercase, 1 number, 1 special character. Account all | Yes - Settings (with OTP verification) |
| Phone Number (WhatsApp) | default +234 prefix. Collected for future Nigerian numbers WhatsApp Al integration (V4). | Yes Settings → Account |

#### 5.1.2 Sign-Up Flow Order[cite: 2]
1. Sign-Up Screen: First Name + Last Name (same row), Email, Password (with strength meter + show/hide), Phone Number (WhatsApp). All validated in real time.[cite: 2]
2. Email OTP Verify: 6-digit code sent to email within 60 seconds. 6-box input UI. Resend timer shown. Code expires after 10 minutes. Email is verified at this step.[cite: 2]
3. Profile Setup - Step 1 (All users): Fields pre-filled from sign-up: First Name, Last Name, Phone. User adds: Date of Birth, Country (Nigeria default), State, Profile Photo (optional), Role (Buy / Sell / Both).[cite: 2]
4. Bank Details Step 2 (Sellers only): Bank Name (dropdown), Account Number (10-digit NUBAN), Account Name (auto-fetched via Paystack API seller cannot type it). Skippable; must complete before first payout.[cite: 2]
5. Terms & Conditions Modal: Slides up before the first swipe. Must Accept to proceed. Decline account created but inactive. Only shown once per account. See §5.19.[cite: 2]
6. Swipe Feed: First-time users see a skippable tooltip overlay explaining the swipe gestures. Shows once only.[cite: 2]

#### 5.1.3 Login[cite: 2]
* Email address + password[cite: 2]
* "Forgot password?" triggers a password reset email with OTP[cite: 2]

Reown PRD-Full Version v2.0 May 2026 Confidential[cite: 2]
Page 10[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
usereown.com usereown.ng[cite: 2]
* Returning users: Splash → Login Feed (no onboarding repeated)[cite: 2]

#### 5.1.4 Email Non-Editability Policy[cite: 2]
Why email cannot be changed[cite: 2]
Email is the account identity anchor on Reown. It is verified via OTP at sign-up and used for all login sessions, security alerts, escrow notifications, and dispute communications.[cite: 2]
Allowing email changes would create significant account takeover and identity fraud risk. This is consistent with the approach taken by Paystack, WhatsApp, and other trust-critical platforms.[cite: 2]
If a user genuinely needs a new email, they must contact Reown support for manual review.[cite: 2]
Phone number is editable in Settings → Account Details at any time.[cite: 2]

#### 5.1.5 Seller Verification Tiered[cite: 2]
| Tier | Requirements | Unlocks |
| :--- | :--- | :--- |
| Basic Seller | Email OTP verified | List items up to N50,000 |
| Verified Seller | NIN or BVN verified via Prembly | List up to N500,000. Verified badge on profile and listings. |
| Pro Seller | Verified + 10 completed sales + paid subscription | Unlimited listings. Branded storefront subdomain. Analytics. Bulk listing. Pro badge. Followers system. |

#### 5.1.6 Identity Verification[cite: 2]
* Primary: NIN (National Identification Number) via Prembly Nigerians broader coverage, works for unbanked[cite: 2]
* Alternative: BVN (Bank Verification Number) via Prembly requires an active bank account[cite: 2]
* Raw identity data is never stored - verification status only[cite: 2]
* Verification badge appears on profile and all listing cards[cite: 2]

### 5.2 Seller Types & Role Switching[cite: 2]
| Type | Description | Cost | Key Benefits |
| :--- | :--- | :--- | :--- |
| Casual/One-Time Seller | Individual clearing out their home, relocating, or selling occasionally. | Free | Standard listing tools, escrow, ratings |
| Pro Seller | Declutters, tokunbo importers, market traders, WhatsApp resellers people who sell frequently as a business. | N7,500/month | Branded subdomain, followers system, bulk listing, analytics, Pro badge, priority support |

Role switching (Buy / Sell / Both) is available at any time from Settings → My Role. Takes effect immediately and updates the bottom navigation bar.[cite: 2]

### 5.3 Feed & Discovery[cite: 2]
Reown PRD Full Version v2.0 May 2026 Confidential[cite: 2]
Page 11[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
usereown.com usereown.ng[cite: 2]

#### 5.3.1 Feed Personalisation[cite: 2]
* Location-based: user sets primary location, country, and state at signup; adjustable in Settings[cite: 2]
* Category, price range, and condition filters available via full-screen filter sheet[cite: 2]
* Feed auto-refreshes immediately when any filter or location is changed[cite: 2]

#### 5.3.2 Empty Location State[cite: 2]
* If user has no location set or denies GPS permission: a prompt Ul appears no manual refresh needed "Set your location to see listings near you" with a CTA to Settings → Location[cite: 2]
* Fallback: if GPS denied, defaults to the state selected during signup[cite: 2]

#### 5.3.3 Pro Seller Following in Feed[cite: 2]
* When a user follows a Pro Seller, that seller's new listings are always included in the follower's swipe feed[cite: 2]
* Followed listings appear tagged with a "Following [Seller Name]" badge at the top of the card[cite: 2]
Non-followers also see the same listing via the normal algorithm following provides guaranteed placement, not exclusivity[cite: 2]

#### 5.3.4 Reown Watch Saved Search Alerts[cite: 2]
* User saves a search with keyword, category, location radius, price range, condition[cite: 2]
* Duration options: 7 days / 14 days / 30 days / Until I turn it off[cite: 2]
* Delivery: push notification via FCM + in-app notification[cite: 2]
* Free users: up to 10 active watches. Pro subscribers: unlimited.[cite: 2]
* Access: Profile tab → Reown Watch tile[cite: 2]

#### 5.3.5 Saved Items[cite: 2]
* Swipe right = save to Saved Items. Access: Profile tab → Saved Items tile.[cite: 2]
* When a saved item is sold, it retains a SOLD badge overlay it does NOT disappear from the list[cite: 2]
* Buyers can still see item details and set a Watch alert for similar items[cite: 2]

#### 5.3.6 Listing Expiry[cite: 2]
* Listing automatically removed from public feed when duration ends $(7/14/30$ days)[cite: 2]
* Status changes to "Expired" in seller's My Listings → Expired tab[cite: 2]
* Seller receives push notification: "Your listing for [Item] has expired. Tap to renew."[cite: 2]
* One-tap renewal from the Expired tab listing goes back live at original settings[cite: 2]
* Listings set to "Always On" never expire unless seller manually ends them or the item is sold[cite: 2]
* Active escrow orders are not affected by listing expiry - they continue normally[cite: 2]

### 5.4 Listing Creation[cite: 2]
| Step | Screen | Detail |
| :--- | :--- | :--- |
| 1 | Add Media | Up to 8 photos OR 1 video (max 60 sec) OR both. Unified "Add Media" button not "Add Photo". First photo/frame is the cover image. Drag-to-reorder. Bulk Upload option visible here for Pro Sellers (V2). |

Reown PRD-Full Version v2.0 May 2026 Confidential[cite: 2]
Page 12[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
usereown.com usereown.ng[cite: 2]

| Step | Screen | Detail |
| :--- | :--- | :--- |
| 2 | Item Details | Title. Category chips. Condition chips: Like New / Excellent / Good / Fairly Used / Tokunbo. Price. Optional minimum offer price (hidden from buyers). Description. |
| 3 | Listing Settings | PUBLIC Pickup Area (neighbourhood + state only shown on card). PRIVATE Full Pickup Address (encrypted at rest - sent as system message post-escrow). Duration. Accept Offers toggle. Private listing toggle. |
| 4 | Review & Publish | Full listing preview. Escrow protection confirmation. One-tap publish or Save as Draft. |

#### 5.4.1 Condition Chips[cite: 2]
| Condition | Definition |
| :--- | :--- |
| Like New | Essentially unused. May have been opened but shows no signs of wear. |
| Excellent | Used but in near-perfect condition. No visible damage. |
| Good | Normal signs of use. Fully functional. |
| Fairly Used | Visible wear but fully functional. Nigerian market standard term. |
| Tokunbo | Imported used goods from abroad (UK, US, Canada, Dubai). Nigerian market term for quality imports. |

#### 5.4.2 Draft Auto-Save[cite: 2]
* System auto-saves listing progress at every step seller can close the app and resume anytime[cite: 2]
* Drafts accessible from My Listings → Drafts tab[cite: 2]
* Mirrors Instagram and X draft-saving behaviour[cite: 2]

#### 5.4.3 Edit Live Listing[cite: 2]
* If there is an active offer on the listing, editing is blocked[cite: 2]
* Seller must accept or decline the offer first editing is unlocked after[cite: 2]

#### 5.4.4 Mark as Sold[cite: 2]
* Sellers can mark a listing as SOLD at any time (whether sold through Reown or externally)[cite: 2]
* Label: SOLD (not "Sold Offline")[cite: 2]
* SOLD listings removed from all public feeds. Remain on seller profile permanently[cite: 2]
* SOLD listings remain in buyers' Saved Items with a SOLD badge at reduced opacity[cite: 2]

#### 5.4.5 Offer / Negotiation Flow[cite: 2]
When "Accept Offers" is enabled on a listing: builds credibility.[cite: 2]
1. Buyer taps "Make an Offer" and enters their proposed price (must be below listing price)[cite: 2]
2. Seller receives a push notification and in-app alert with the offer amount[cite: 2]
3. Seller options: Accept (listing reserved at offer price) Counter (seller proposes different price) Decline (offer rejected)[cite: 2]
4. Counter-offer: buyer can accept or decline in turn[cite: 2]
5. Offer expires after 24 hours with no seller response - buyer notified automatically[cite: 2]
6. Maximum 1 active offer per buyer per listing at a time[cite: 2]
7. Multiple buyers can submit offers simultaneously seller sees all pending offers[cite: 2]

Reown PRD-Full Version v2.0 May 2026 Confidential[cite: 2]
Page 13[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
usereown.com usereown.ng[cite: 2]
8. Once one offer is accepted, all other pending offers are auto-declined and senders notified[cite: 2]

### 5.5 Escrow & Payment Flow[cite: 2]

#### 5.5.1 Corrected Buyer Flow Payment First[cite: 2]
CRITICAL FLOW: Payment Before Inspection[cite: 2]
1. Buyer views listing detail → taps "Buy Securely - Pay into Escrow". This is the ONLY purchase CTA. There is no Inspect button before payment.[cite: 2]
2. Buyer pays total into Reown escrow via Paystack.[cite: 2]
3. After payment confirmed → inspection options appear.[cite: 2]
4. Seller notified. Full pickup address auto-sent to buyer's chat as a system message.[cite: 2]
5. Inspection (if chosen) happens before buyer shows handoff code.[cite: 2]
6. Buyer meets seller, inspects, shows handoff code if satisfied.[cite: 2]
7. Seller enters code → funds released instantly.[cite: 2]
Rationale: Payment before inspection proves buyer seriousness and eliminates time-wasters.[cite: 2]

#### 5.5.2 Tiered Buyer Protection Fee[cite: 2]
| Transaction Value | Fee | Example |
| :--- | :--- | :--- |
| N1,000N10,000 | 6% | N450 on N7,500 |
| N10,001 N200,000 | 5% | N7,500 on N150,000 |
| N200,001-N500,000 | 3.5% | N10,500 on N300,000 |
| N500,001-1,000,000 | 2.5% | N18,750 on N750,000 |
| Above N1,000,000 | 2% | N24,000 on N1.2M |

Fee is paid by buyer on top of item price. Seller always receives their full asking price.[cite: 2]

#### 5.5.3 Escrow Steps[cite: 2]
| Step | Action |
| :--- | :--- |
| 1 | Buyer taps Buy Securely. Checkout shows: item price, buyer protection fee, total. |
| 2 | Buyer pays total into Reown escrow via Paystack. NOT sent to seller. Seller notified. |
| 3 | Full pickup address auto-sent as system message in buyer's chat thread. |
| 4 | Buyer chooses inspection option (post-payment): Self-Inspect / Skip. |
| 5 | Seller and buyer coordinate pickup via in-app masked chat. |
| 6 | Buyer receives item. Shows seller their 4-digit handoff code after inspecting and accepting. |
| 7 | Seller enters code escrow release triggered instantly. |

Reown PRD Full Version v2.0 May 2026 Confidential[cite: 2]
Page 14[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
| Step | Action |
| :--- | :--- |
| 8 | Alternative: Buyer taps Confirm Receipt manually funds released within 2 hours. |
| 9 | Auto-release: 72 hours after confirmed handoff if buyer takes no action. |
| 10 | Dispute: Buyer taps "Report a problem" within 48 hours of any release trigger. |

usereown.com usereown.ng[cite: 2]

#### 5.5.4 Inspection Fee Non-Refundability[cite: 2]
* The N1,500 self-inspection commitment fee is non-refundable once the time slot is booked[cite: 2]
* If buyer inspects and decides not to purchase: escrow is refunded in full. Inspection fee is NOT refunded.[cite: 2]
* If seller cancels a confirmed inspection slot: inspection fee is refunded to buyer, seller receives a strike[cite: 2]

#### 5.5.5 Seller Cancellation / Refusal After Payment[cite: 2]
* Buyer raises a dispute via "Report a Problem" funds frozen in escrow[cite: 2]
* Ops team reviews within 24 hours[cite: 2]
* If confirmed: full refund to buyer, permanent ban for seller - treated as confirmed fraud[cite: 2]
* This is a zero-tolerance violation, distinct from a standard dispute[cite: 2]

#### 5.5.6 Partial Refund Scenario[cite: 2]
* Ops team sets a custom split: buyer refund amount + seller release amount[cite: 2]
* Total of both must equal the original item price[cite: 2]
* Buyer protection fee is not refunded in partial resolution scenarios[cite: 2]

### 5.6 Handoff Code System[cite: 2]
* When escrow payment is confirmed, buyer receives a unique 4-digit pickup code[cite: 2]
* Buyer shows code to seller at point of collection ONLY after inspecting and accepting the item Seller enters code in app immediate escrow release[cite: 2]
* For deliveries: delivery rider receives the code prompt instead of seller[cite: 2]
* Wrong code: seller instructed not to hand over item and to contact support[cite: 2]
* Code match = cryptographic proof of physical exchange[cite: 2]

### 5.7 Inspection System[cite: 2]

#### 5.7.1 Options Presented Post-Payment[cite: 2]
| Option | Detail | Cost | Version |
| :--- | :--- | :--- | :--- |
| Self-Inspection | Buyer pays commitment fee and books a time slot from seller's available windows. Visits seller's location to inspect. Warning: do not share handoff code until satisfied. | N1,500 non-refundable commitment fee | MVP |
| Platform Inspector | Buyer selects from verified inspectors ranked by proximity, expertise, rating. Inspector visits seller, examines item, files structured report. Both chats auto-close after inspection date passes. | N3,000-N5,000 (based on distance + category) | V2 |
| Skip Inspection | Buyer proceeds directly to pickup with handoff code only. Not recommended for high-value items. | Free | MVP |

Reown PRD-Full Version v2.0 May 2026 Confidential[cite: 2]
Page 15[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
usereown.com usereown.ng[cite: 2]

#### 5.7.2 Inspector Onboarding (V2)[cite: 2]
* Valid government ID (NIN or BVN) + selfie verification via Prembly[cite: 2]
* Declared areas of expertise (Electronics, Generators, Vehicles, Fashion, Appliances, etc.)[cite: 2]
* Service radius and availability calendar[cite: 2]
* Agreement to Reown Inspector Code of Conduct[cite: 2]
* Reown ops team reviews and approves within 48 hours[cite: 2]
* Inspector completes Reown Inspector Onboarding Quiz pass mark: 80%[cite: 2]
* Fee split: Inspector keeps 80%, Reown takes 20%[cite: 2]

### 5.8 Chat System[cite: 2]

#### 5.8.1 Chat Access Tiers[cite: 2]
| Tier | Access | Cost |
| :--- | :--- | :--- |
| Free | Text only. Limited to 10 messages per conversation until escrow is initiated. Counter resets per listing. | Free |
| Chat & Offers Subscriber | Full text, photo sharing, voice notes (max 60 sec / 5MB), offer negotiation tools. | N2,500/month |
| Pro Seller | All subscriber features + message templates, bulk reply, conversation labels. | N7,500/month (bundled) |

#### 5.8.2 Anti-Leakage Enforcement[cite: 2]
* Phone number masking: all phone numbers in chat auto-detected and masked[cite: 2]
* WhatsApp and external link detection: wa.me links, whatsapp.com, or Nigerian phone numbers trigger a warning and flag the conversation "Report off-platform solicitation" button in every conversation[cite: 2]
* 3 confirmed reports account review and potential suspension[cite: 2]
* Full pickup address sent as a system message ONLY - seller never types it manually[cite: 2]
* No user blocking report only. Only Reown can suspend or ban accounts.[cite: 2]
* Read receipts: single tick = delivered, double tick = read[cite: 2]
* Chat search: users can search their own chat history[cite: 2]

### 5.9 Pro Seller & Followers System (V2)[cite: 2]

#### 5.9.1 Pro Seller Subdomain[cite: 2]
* Every Pro Seller gets a unique subdomain: [username].usereown.com[cite: 2]
* Shareable on Instagram bio, WhatsApp, X (Twitter), anywhere[cite: 2]
* Guest experience (not logged in): can view seller profile and listing details only. Cannot buy, follow, message, or save all trigger a sign-up prompt.[cite: 2]
* Logged-in users: full view + can follow, save, message (with subscription), or buy[cite: 2]
* 7-day grace period after Pro Seller subscription cancellation before subdomain deactivates[cite: 2]

#### 5.9.2 Shareable Listing Links[cite: 2]
* Every listing has a unique URL: usereown.com/listing/[id][cite: 2]

Reown PRD-Full Version v2.0 May 2026 Confidential[cite: 2]
Page 16[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
usereown.com usereown.ng[cite: 2]
* Non-logged-in visitors can view listing details[cite: 2]
* "Buy Securely" CTA prompts sign-up before checkout for non-logged-in visitors[cite: 2]

#### 5.9.3 Followers System[cite: 2]
* Follow button on any Pro Seller public profile or subdomain[cite: 2]
* Followers count displayed on: seller's own dashboard, seller's public profile, and seller's subdomain storefront[cite: 2]
* Seller can see follower count but NOT individual follower identities (privacy protection)[cite: 2]
* Buyer's following list accessible from Profile tab → Following[cite: 2]
* Push notification to followers when Pro Seller posts a new listing[cite: 2]
* Followers can mute notifications from a specific seller without unfollowing[cite: 2]

#### 5.9.4 Pro Seller Subscription Cancellation[cite: 2]
* Subdomain deactivates after 7-day grace period[cite: 2]
* Active listings remain live as Casual Seller listings[cite: 2]
* Followers list preserved if seller re-subscribes, followers are restored[cite: 2]
* Pending escrow payments and available balance are unaffected[cite: 2]

### 5.10 Boost System (V2)[cite: 2]
| Duration | Cost | Hours 0-8 (multiplier) | Hours 8-16 | Hours 16-24 |
| :--- | :--- | :--- | :--- | :--- |
| 24 hours | N500 | x8.0 (position 1) | x5.0 (position 3) | x3.0 (position 5) |
| 48 hours | N900 | x8.0 (position 1) | x6.0 (position 2) | x4.0 (position 4) |
| 72 hours | N1,500 | x8.0 (position 1) | x7.0 (position 2) | x5.0 (position 3) |

* Location targeting: seller selects primary area + additional target areas + radius (1km-50km)[cite: 2]
* System shows estimated reach (buyer count in selected areas) before payment[cite: 2]
* Maximum 2 boosted listings visible per 10-card swipe stack[cite: 2]
* Boost stacking: seller can purchase a new boost after the current one expires. Cannot stack simultaneous boosts on the same listing.[cite: 2]

### 5.11 Notifications[cite: 2]
* Full screen with back arrow (arrow closes notification screen)[cite: 2]
* Delivered via Firebase Cloud Messaging (FCM)[cite: 2]
* Types: payment received, escrow confirmed, handoff confirmed, dispute update, Reown Watch match, new review, auction bid, auction ending, inspector matched, funds released, new follower[cite: 2]
* Notification preferences: all types individually toggleable in Settings → Notifications, EXCEPT escrow notifications which are always on and cannot be disabled[cite: 2]

### 5.12 Dispute Flow[cite: 2]

#### 5.12.1 Raising a Dispute[cite: 2]
* Buyer taps "Report a Problem" from the order tracker within 48 hours of any escrow release trigger[cite: 2]
* Pre-listed reasons: Item different from description Item damaged or missing parts Seller did not show up Item not received Listing photos misleading. Other[cite: 2]

Reown PRD-Full Version v2.0 May 2026 Confidential[cite: 2]
Page 17[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
usereown.com usereown.ng[cite: 2]
* Buyer must provide a free-text description regardless of which reason is selected[cite: 2]
* Buyer can attach photo or video evidence[cite: 2]
* On submission: funds frozen in escrow, seller notified, ops team alerted[cite: 2]
* Refund timeline if buyer wins: 24 hours after dispute resolved in buyer's favour[cite: 2]

#### 5.12.2 Ops Review[cite: 2]
* Ops team reviews within 24 hours[cite: 2]
* Reviewer sees: listing description, listing photos, chat log, buyer evidence, seller response[cite: 2]
* Resolution options: full refund to buyer release to seller partial resolution (custom split)[cite: 2]
* Both parties notified via push notification on resolution[cite: 2]
* If ruled against seller: 1 strike issued against their account[cite: 2]

### 5.13 Seller Dashboard[cite: 2]
| Dashboard Element | Detail |
| :--- | :--- |
| Available Balance | Funds fully released and ready to withdraw |
| Pending Release | Funds in escrow for active orders not yet released |
| This Month | Total earnings in current calendar month |
| Withdraw to Bank | Paystack Transfer to verified bank account. Minimum: N1,000. No limit on frequency. Instant to same-day processing. |
| Active Listings | Count of currently live listings |
| Total Sales | All-time completed transaction count |
| Average Rating | Star rating across all completed orders |
| Followers Count | Visible on seller's own dashboard (V2) |
| Quick Actions | New Listing My Listings (Active / Sold / Drafts / Expired tabs) My Orders Analytics (V2 Pro Seller only) |

### 5.14 Referral Programme (V2)[cite: 2]
* Every verified user gets a unique referral link[cite: 2]
* When a referred user completes their first transaction: both referrer and referee receive N1,000 credit[cite: 2]
* Credit can be applied to buyer protection fees or boost purchases[cite: 2]
* Credit cannot be withdrawn as cash[cite: 2]
* Referral credits are permanent they never expire[cite: 2]
* Credit is capped at 50% of the buyer protection fee per transaction[cite: 2]
* Tracked via: unique link click[cite: 2]

### 5.15 Website Pages[cite: 2]
| Page | Purpose |
| :--- | :--- |
| Landing page | Hero, value proposition, app download CTAS, social proof |
| How it works | Buyer flow and seller flow explained side by side |
| For Sellers / Declutters | Seller acquisition copy, Pro Seller benefits cannot cover the full fee signup → first completed transaction chain |

Reown PRD-Full Version v2.0 May 2026 Confidential[cite: 2]
Page 18[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
usereown.com usereown.ng[cite: 2]
| Page | Purpose |
| :--- | :--- |
| For Tokunbo Importers | Targeted copy for import traders |
| Pricing | Buyer protection fee tiers, subscription options, boost costs |
| About / Trust Centre | Mission, escrow explainer, safety features |
| Blog / Safety Tips | Content marketing, SEO, trust building |
| Download | App Store + Play Store links |
| FAQ | Common buyer and seller questions |
| Contact / Support | Support form, response time commitments |
| Terms of Service | Legal |
| Privacy Policy | Legal |

### 5.16 Seller Analytics (V2 Pro Seller Only)[cite: 2]
| Metric | Definition |
| :--- | :--- |
| Views | Number of times the listing card appeared in a user's swipe feed |
| Saves | Number of times users swiped right or tapped the save icon |
| Detail Opens | Number of times users swiped up to open the full listing detail sheet |
| Conversion Rate | (Completed purchases Views) x 100 |
| Avg Response Time | Average time to reply to a buyer's first message |
| Follower Growth | Net new followers per week and per month |
| Revenue This Month | Total escrow released to seller in current calendar month |
| Top Performing Listing | Listing with highest conversion rate in selected period |

Analytics available for: Last 7 days / Last 30 days / All time[cite: 2]

### 5.17 Account & Data Management[cite: 2]

#### 5.17.1 Password Requirements[cite: 2]
* Minimum 8 characters[cite: 2]
* Must contain at least one uppercase letter, one number, and one special character[cite: 2]
* Cannot be the same as the previous 3 passwords on password reset[cite: 2]
* Bcrypt hashed before storage plain text password never stored[cite: 2]

#### 5.17.2 Location Permission Handling[cite: 2]
* If granted: feed defaults to device GPS location. User can override in Settings → Location.[cite: 2]
* If denied: app falls back to the state selected during signup. A prompt shown: "Enable location for better results near you."[cite: 2]
* Location is never required to use the app only to improve feed relevance[cite: 2]

#### 5.17.3 Account Deletion[cite: 2]
Reown PRD-Full Version v2.0 May 2026 Confidential[cite: 2]
Page 19[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
usereown.com usereown.ng[cite: 2]
| Situation | Outcome |
| :--- | :--- |
| Active escrow orders | Deletion blocked until all orders are resolved |
| Pending seller balance | Deletion blocked until balance is withdrawn to bank |
| Active listings | All listings immediately removed from public feed |
| Completed transaction history | Anonymised and retained 7 years (CBN compliance requirement) |
| Profile data | Deleted within 30 days of request confirmation |
| Reviews given/received | Anonymised as "Deleted User" but retained for trust history integrity |
| Followers/following | All relationships deleted |
| Subdomain (Pro Seller) | Deactivated immediately on deletion |

14-day grace period before deletion is irreversible user can cancel deletion during this window.[cite: 2]

#### 5.17.4 Data Privacy & NDPR Compliance[cite: 2]
* Reown operates in compliance with the Nigeria Data Protection Regulation (NDPR) administered by NITDA[cite: 2]
* Users have the right to access and download their data (available from Settings)[cite: 2]
* No personal data sold to third parties[cite: 2]
* Bank details encrypted at rest using AES-256[cite: 2]
* Identity verification data (NIN/BVN result) not stored raw only verification status retained never sold or shared with advertisers[cite: 2]
* Location data used only for feed personalisation[cite: 2]

### 5.18 Content Moderation[cite: 2]
* Al image moderation on all listing photos before going live (flags weapons, adult content, counterfeit indicators)[cite: 2]
* Keyword blacklist on titles and descriptions maintained by ops team, reviewed monthly[cite: 2]
* Flagged listings held for manual review do NOT go live automatically[cite: 2]
* Review SLA: 4 hours during business hours (8am-8pm WAT)[cite: 2]
* Community reporting: "Report this listing" on every listing detail. 3 reports from different users → immediate ops review (2-hour SLA)[cite: 2]

### 5.19 Terms & Conditions Modal[cite: 2]

#### 5.19.1 When It Appears[cite: 2]
* First time only immediately after onboarding is complete, before the swipe feed loads for the first time[cite: 2]
* NOT shown on subsequent logins[cite: 2]
* If terms are updated: a new T&C; modal appears on next app open. User can browse but cannot buy or sell until they re-accept.[cite: 2]

#### 5.19.2 Marketplace Rules Covered[cite: 2]
* No stolen goods: Listing or selling stolen property is a criminal offence and will result in immediate account suspension and law enforcement referral.[cite: 2]

Reown PRD-Full Version v2.0 May 2026 Confidential[cite: 2]
Page 20[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
usereown.com usereown.ng[cite: 2]
* No harmful items: Weapons, drugs, counterfeit goods, expired products, and any item illegal under Nigerian law are banned.[cite: 2]
* Honour your deals: Once payment enters escrow, sellers must complete the handoff. Abandoning confirmed sales results in suspension.[cite: 2]
* Escrow protects you: Never pay outside the platform. Reown escrow ensures money is safe until buyer confirms receipt.[cite: 2]
* Honest listings: All photos must be of the actual item. Misleading descriptions or stock photos result in listing removal and strikes.[cite: 2]
* Keep it on-platform: Sharing personal contact info, bank details, or attempting to move deals off-platform violates the trust policy.[cite: 2]
* Pass It On is real giving: Giveaway listings must be genuine. Using Pass It On fraudulently to collect claims results in an instant ban.[cite: 2]

#### 5.19.3 Decline Flow[cite: 2]
* User is warned they cannot use the platform without accepting[cite: 2]
* Given option to go back and accept, or exit to the login screen[cite: 2]
* Account is created but inactive user can log back in later and accept at that point[cite: 2]

Full Terms of Service, Privacy Policy, and Marketplace Rules hosted at usereown.com/legal.[cite: 2]
Acceptance date recorded and shown in Settings → Legal.[cite: 2]

Reown PRD-Full Version v2.0 May 2026 Confidential[cite: 2]
Page 21[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
## 06 REOWN AUCTIONS[cite: 2]
| Access | Detail |
| :--- | :--- |
| Buyer access | Explore tab → Auctions chip |
| Seller access | + Sell button "Create Auction". Available to all verified sellers. |

usereown.com usereown.ng[cite: 2]

### 6.1 Auction Creation[cite: 2]
* Starting price (floor bid)[cite: 2]
* Reserve price (optional, hidden from bidders)[cite: 2]
* Buy It Now price (optional)[cite: 2]
* Duration: 1/3/5/7 days[cite: 2]
* Visibility: Public (appears in Explore) or Private (link-only generates unique shareable link)[cite: 2]
* Soft Close toggle (default on)[cite: 2]

### 6.2 Bidding Mechanics[cite: 2]
| Item Price | Minimum Bid Increment |
| :--- | :--- |
| Below N20,000 | N500 |
| N20,000-N100,000 | N2,000 |
| Above N100,000 | N5,000 |

* Proxy Bidding: Bidders enter their maximum. System auto-bids incrementally on their behalf up to that maximum.[cite: 2]
* Soft Close: Any bid in the final 10 minutes extends the timer by 10 minutes prevents last-second sniping.[cite: 2]
* Bid retraction: Not permitted once a bid is placed protects sellers and prevents gaming.[cite: 2]
* Bidder verification: Must be a verified user to place any bid.[cite: 2]

### 6.3 Winner Payment & Second Chance Offer[cite: 2]
* Winner notified immediately via push and in-app alert[cite: 2]
* 24 hours to fund escrow from auction end[cite: 2]
* If winner does not pay: item offered to second-highest bidder (same 24-hour window). Non-paying winner receives 1 strike.[cite: 2]
* If second-highest bidder also does not pay: item returns to seller with no obligation[cite: 2]
Once escrow is funded: standard escrow + handoff code flow applies[cite: 2]

### 6.4 Buy It Now Interaction[cite: 2]
* When a buyer triggers Buy It Now: auction ends immediately for ALL bidders[cite: 2]
* All active bidders receive a push notification: "This auction has ended Buy It Now was used."[cite: 2]
* Buyer shown a confirmation screen and proceeds to escrow checkout[cite: 2]

Reown PRD-Full Version v2.0 May 2026 Confidential[cite: 2]
Page 22[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
usereown.com usereown.ng[cite: 2]

### 6.5 Private Auction Link Mechanics[cite: 2]
* Seller can see total link views vs total unique bidders on their auction management screen[cite: 2]
* Private auctions do not appear in the Explore tab or swipe feed[cite: 2]

### 6.6 Reserve Price Mechanics[cite: 2]
* If bidding ends below reserve price: seller is not obligated to sell[cite: 2]
* System notifies seller and highest bidder privately[cite: 2]
* Seller can choose to accept the highest bid anyway or re-list the item[cite: 2]

Reown PRD-Full Version v2.0 May 2026 Confidential[cite: 2]
Page 23[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
## 07 PASS IT ON GIVEAWAYS[cite: 2]
usereown.com usereown.ng[cite: 2]
| Access | Detail |
| :--- | :--- |
| Buyer / Claimer access | Explore tab → Pass It On chip tap any card Claim or Request |
| Giver access | + Sell button → "Pass It On". Available to ALL users including buyer-only users. |

### 7.1 Giveaway Listing[cite: 2]
* Photos and/or video[cite: 2]
* Description: item, condition, reason for giving, pickup area[cite: 2]
* First Come First Served: First verified user to request wins instantly[cite: 2]
* Giver Chooses: Giver reviews all requests within 24-48 hours and selects recipient based on need[cite: 2]
* Visibility: Public or Private (link-only)[cite: 2]
* Pickup deadline: how long item is held before going to next person[cite: 2]

### 7.2 Anti-Abuse Rules[cite: 2]
| Rule | Detail |
| :--- | :--- |
| Minimum account age | 7 days from registration date |
| Minimum activity | At least 1 completed verified action (listing, purchase, or previous claim) |
| Active claim limit | Maximum 3 active claims per user at any time |
| No-show penalty | Failure to collect within agreed pickup window $=1$ strike |
| Repeat no-show | Two no-shows within any 90-day period = claiming blocked for 14 days |
| Multiple account abuse | System detects duplicate phone/NIN linked accounts auto-flagged for ops review |

### 7.3 Pickup Deadline & No-Collection Handling[cite: 2]
* Option A - Offer to next person: Giver notified. Can offer item to next requester in queue. Same pickup window applies. Can repeat for each subsequent requester.[cite: 2]
* Option B - Re-post: Listing goes back live as a fresh giveaway. Available alongside Option A giver chooses.[cite: 2]

### 7.4 Giver Chooses No-Decision Timeout[cite: 2]
* First timeout (48 hours): reminder notification. Listing auto-extended for another 48-hour window. Existing requests carry over.[cite: 2]
* Second timeout (96 hours total): listing cancelled and removed from feed. Giver notified. Can re-post anytime.[cite: 2]
* At any point: giver can choose a recipient, extend manually, or mark as Given Out[cite: 2]

### 7.5 Mark as Given Out[cite: 2]
* Givers can manually mark an item as given out at any time even if given to someone outside the platform[cite: 2]

Reown PRD-Full Version v2.0 May 2026 Confidential[cite: 2]
Page 24[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
usereown.com usereown.ng[cite: 2]
* This mirrors the "Mark as Sold" mechanic in the Marketplace[cite: 2]
* On marking: listing removed from public Pass It On feed and marked as "Given Out" on giver's profile[cite: 2]

### 7.6 Viral Card[cite: 2]
* On successful handoff, system generates a shareable card: "Adaeze just gave her Kenwood Blender a new home with Chidi from Yaba via Reown Pass It On." Designed to be screenshotted and shared to WhatsApp and Instagram stories.[cite: 2]

Reown PRD-Full Version v2.0 May 2026 Confidential[cite: 2]
Page 25[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
usereown.com usereown.ng[cite: 2]

## 08 AI FEATURES ROADMAP[cite: 2]
| Feature | What It Does | Version |
| :--- | :--- | :--- |
| Smart Listing Assistant | Photo Al auto-fills title, category, condition, description, suggested price. Seller reviews and edits before publishing. | V2 |
| Inspector Matching | Ranks available inspectors by proximity, expertise, availability, and rating. Shown to buyer at inspection selection step post-payment. | V2 |
| Price Intelligence | Market price range based on recent comparable sales shown to both buyer and seller at listing and checkout. | V3 |
| Fraud Signal Detection | Monitors chat for WhatsApp links, phone numbers, known scam patterns flags and warns both parties in real time. | V3 |
| Dispute Evidence Summary | Al reviews listing, photos, chat log, and delivery evidence - produces structured summary for ops team to accelerate dispute resolution. | V3 |
| WhatsApp Al Reown on WhatsApp | Buyers search products, set Watch alerts, and check order status via WhatsApp DM. Sellers tag @ReownAl + photo in any WhatsApp group to auto-create a listing draft. | V4 |

V4-WhatsApp Al: The Phone Number collected at sign-up is intentionally future-proofed for this integration. Users will not need to re-verify when V4 launches their Reown account will auto-link to their WhatsApp number.[cite: 2]

Reown PRD-Full Version v2.0 May 2026 Confidential[cite: 2]
Page 26[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
usereown.com usereown.ng[cite: 2]

## 09 TECHNICAL ARCHITECTURE[cite: 2]

### 9.1 Technology Stack[cite: 2]
| Layer | Technology | Reason |
| :--- | :--- | :--- |
| Mobile app | React Native (TypeScript) + Expo SDK+EAS | Single codebase for iOS + Android. Largest talent pool in Nigeria. OTA updates via EAS Update. |
| Swipe gestures | react-native-reanimated 2 + gesture-handler | 60fps card physics. Spring animations. Velocity-based throw. |
| Navigation | Expo Router | File-based routing, proper back navigation, deep linking for subdomain and listing links |
| State management | Zustand + React Query | Lightweight local state + server state caching |
| Backend | NestJS + Node.js (TypeScript) | Structured, modular, scales cleanly |
| Primary DB | PostgreSQL | ACID compliance mandatory for escrow money flows. All currency stored in kobo (integer). |
| Cache / Realtime | Redis | Feed caching, auction live state, sessions, rate limiting |
| Search | Typesense (MVP) → Elasticsearch (V3) | Location-aware search with filters |
| Payments | Paystack | Best Nigerian bank coverage. Sub-accounts for escrow. Transfer API for payouts. Account name lookup for bank verification. |
| Media | Cloudinary | Auto-compress, CDN delivery, format conversion. Critical for 3G/4G performance. |
| Push Notifications | Firebase Cloud Messaging | Android + iOS unified. Reown Watch alerts. |
| KYC / Identity | Prembly | NIN and BVN verification. Licensed. Used by established Nigerian fintechs. |
| Real-time bidding | Socket.io (WebSockets) | Live auction bids, countdown sync, chat delivery |
| Error tracking | Sentry | Real-time error reporting from Day 1 |
| CI/CD | GitHub Actions + EAS Build | Automated builds and OTA updates |
| Hosting | Railway (backend) + Vercel (web) | Zero-config deployment, auto-scaling, affordable at early stage |

### 9.2 Database Schema (Key Tables)[cite: 2]
All monetary values stored in kobo (smallest naira unit) as integers never floats or decimals. Example: N7,500 is stored as 750000.[cite: 2]

| Table | Key Fields |
| :--- | :--- |
| users | id (uuid), email (unique, noneditable-), password_hash, first_name, last_name, phone, date_of_birth, country, state, role, seller_type, verification_tier, nin_verified, bvn_verified, bank_account_number, bank_name, bank_account_name, strike_count, suspended_until, location_lat/Ing, rating_avg, total_sales, follower_count, following_count, terms_accepted_at, created_at |

Reown PRD-Full Version v2.0 May 2026 Confidential[cite: 2]
Page 27[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
usereown.com usereown.ng[cite: 2]
| Table | Key Fields |
| :--- | :--- |
| listings | id, seller_id (FK), type (marketplace/auction/giveaway), title, category, condition, price (bigint kobo), status, visibility, share_token, location_area (public), location_full_address (private encrypted), inspection_available, sold_at, expires_at, media_urls (jsonb), boost_until |
| follows | id, follower_id (FK), following_id (FK), created_at unique constraint on the pair |
| orders | id, listing_id, buyer_id, seller_id, item_amount (kobo), buyer_fee (kobo), total_charged (kobo). status, paystack_ref, escrow_sub_account, handoff_code, auto_release_at, buyer_confirmed_at, released_at |
| auctions | id, listing_id, start_price, reserve_price, buy_it_now_price, current_bid, current_winner_id, ends_at, soft_close_minutes (default 10), bid_count, status |
| bids | id, auction_id, bidder_id, amount, max_proxy_amount, is_proxy_bid, created_at append-only, no updates |
| giveaways | id, listing_id, claim_mode, pickup_deadline_hours, winner_id, status |
| messages | id, order_id, thread_type, sender_id, receiver_id, content (masked), is_flagged, flag_reason, thread_closed_at, created_at |
| watch_alerts | id, user_id, keyword, category, location_radius, price_min, price_max, condition, duration_days, expires_at, active, created_at |

### 9.3 Feed Ranking Algorithm[cite: 2]
Feed Score Formula[cite: 2]
score $=($ recency_weight x 0.30 + proximity_score x 0.30 $+seller\_trust\times0.20$ $+media_{\_}quality\times0.10$ + relevance_score x 0.10 ) x boost_multiplier x following_multiplier[cite: 2]
following_multiplier $=10.0$ for listings from followed Pro Sellers (guarantees placement in follower feed)[cite: 2]
Score calculated server-side, cached in Redis, refreshed every 15 minutes[cite: 2]
Maximum 2 boosted listings per 10-card swipe stack[cite: 2]

### 9.4 WebSocket Events (Auctions)[cite: 2]
| Event | Trigger |
| :--- | :--- |
| auction:bid_placed | New bid submitted by a user |
| auction:bid_updated | Proxy bid auto-incremented by system |
| auction:soft_close_extended | Bid placed in final 10 minutes - timer extended |

Reown PRD-Full Version v2.0 May 2026 Confidential[cite: 2]
Page 28[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
usereown.com usereown.ng[cite: 2]
| Event | Trigger |
| :--- | :--- |
| auction:ended | Auction timer reaches zero |
| auction:winner_confirmed | Winner identified after close |
| auction:payment_escrowed | Winner funds escrow auction settled |
| auction:second_chance_offered | Non-payment by winner second bidder notified |

Reown PRD-Full Version v2.0 May 2026 Confidential[cite: 2]
Page 29[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
## 10 REVENUE MODEL[cite: 2]
usereown.com usereown.ng[cite: 2]
| Revenue Stream | Mechanism | Rate | Phase |
| :--- | :--- | :--- | :--- |
| Buyer Protection Fee | Tiered % of item value collected at checkout | 6%/5%/3.5%/2.5% /2% | MVP |
| Inspection Fee Cut | 20% of platform inspector fee per completed inspection | 20% | V2 |
| Chat Subscription | Full chat features for buyers and casual sellers | N2,500/month | V2 |
| Pro Seller Subscription | Storefront, analytics, bulk listing, priority placement, followers system | N7,500/month | V2 |
| Listing Boosts | Top-of-feed placement with location targeting and decay schedule | N500/N900/N1,500 | V2 |
| Referral Credits | Buyer and seller earn 1,000 credit per successful referral (50% fee cap) | N1,000 credit | V2 |
| Auction Premium Features | Extended durations, featured placement (Pro Sellers only) | TBD | V3 |

Pricing philosophy: Sellers pay nothing to list. All friction removed from the supply side. Buyers pay the tiered buyer protection fee as the cost of safety - they are paying for the trust layer, not the product.[cite: 2]

Reown PRD-Full Version v2.0 May 2026 Confidential[cite: 2]
Page 30[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
usereown.com usereown.ng[cite: 2]
## 11 REOWN ROYALTY CARD[cite: 2]
| Tier | Copper (Default) | Silver | Gold |
| :--- | :--- | :--- | :--- |
| Threshold | All new users | 10 completed transactions or N500k traded | 50 transactions or N5M traded |
| Fee benefit | Standard tiered fee | 0.5% discount on buyer protection fee | 1% discount guaranteed on every transaction |
| Watch alerts | Up to 10 active | Up to 20 active | Unlimited |
| Support | Standard queue | Priority support queue | Dedicated account manager |
| Other | All platform features | Silver badge, early access to new features | Gold badge visible to sellers, free monthly boost, invite-only seller events |

Reown PRD-Full Version v2.0 May 2026 Confidential[cite: 2]
Page 31[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
## 12 GO-TO-MARKET STRATEGY[cite: 2]
usereown.com usereown.ng[cite: 2]

### 12.1 Launch Scope[cite: 2]
Lagos only at MVP. Specifically Lekki-Ajah, Victoria Island, Surulere, and Yaba highest concentration of Instagram declutter activity and mid-to-upper income buyers with smartphones and mobile data.[cite: 2]

### 12.2 Supply-First Strategy[cite: 2]
Phase 1: Identify the top 30 active Instagram declutter pages in Lagos. Value proposition: "List here free. Escrow guarantees your payment. Build a reputation that survives beyond Instagram."[cite: 2]

Seller Acquisition Copy For Instagram & Facebook Declutters[cite: 2]
"You've been building a business on borrowed land."[cite: 2]
Your Instagram page can be deleted tomorrow. Your Reown store is yours with every sale, every rating, every naira, on record. Forever.[cite: 2]
Stop managing 50 DMs for every sale. Stop praying the alert is real. Stop losing 3 days to a buyer who ghosts. On Reown, your buyer pays before you move. The platform holds it. You hand over the item. Done.[cite: 2]
✓ Payment confirmed before you hand over anything zero fake alerts[cite: 2]
✓ Free to list zero listing fees, ever. Keep your Instagram page.[cite: 2]
✓ Your reputation compounds with every completed sale on record[cite: 2]
✓ Your own storefront link to post on your Instagram bio[cite: 2]

Seller Acquisition Copy For Tokunbo Importers & Market Traders[cite: 2]
"You cleared customs. We handle the chaos of selling."[cite: 2]
You did the hard work sourcing the item abroad, paying the freight, clearing it through customs. The last thing you need is 80 WhatsApp messages from people who were never serious buyers.[cite: 2]
List your tokunbo refrigerator, washing machine, shoes, or phone on Reown. Buyers within your location find it in their feed and pay into escrow before you confirm anything.[cite: 2]
✓ Serious buyers only - they've already committed payment to escrow[cite: 2]
✓ Al fills your listing details automatically from your photos (V2)[cite: 2]
✓ Location-based - buyers near your store or area find you first[cite: 2]

Reown PRD-Full Version v2.0 May 2026 Confidential[cite: 2]
Page 32[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
usereown.com usereown.ng[cite: 2]
✓ Scale from one item to a full branded storefront as you grow[cite: 2]

### 12.3 Growth Phases[cite: 2]
| Phase | Channel | Detail |
| :--- | :--- | :--- |
| Phase 1 | Declutter Onboarding | Top 30 Instagram declutter pages in Lagos. Direct DM outreach, zero-risk proposition. |
| Phase 2 | Buyer Acquisition | Instagram and X (Twitter) ads. "Pay safely. Receive first. Release later." Hook. |
| Phase 3 | Community Activation | Nigerian Twitter/X communities, WhatsApp groups for NYSC corpers, estate groups, university alumni associations. |
| Phase 4 | Earned Media | TechCabal, Nairametrics, Zikoko. The founding story tells itself. |

Reown PRD-Full Version v2.0 May 2026 Confidential[cite: 2]
Page 33[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
usereown.com usereown.ng[cite: 2]
## 13 RELEASE ROADMAP[cite: 2]
| Phase | Timeline | Key Deliverables | Success Gate |
| :--- | :--- | :--- | :--- |
| MVP | Month 0-3 | Email sign-up (5-field fast form) + OTP + onboarding + T&C; modal. Role-based bottom nav (buyer-only gets Watch centre, sellers get + Sell). First-time swipe tutorial tooltips (skippable, one-time). Full-bleed swipe feed (Tinder-style). Filter full screen. Notification full screen. Search slides down. Listing creation 4-step (Add Media → Details with Tokunbo condition → Settings with public area + private address → Review). Draft auto-save. Payment first inspection choice after. Self-inspection only at MVP. Escrow + Paystack. Handoff code. Failed payment retry screen. Masked chat (10-message free limit). Read receipts. Chat search. Seller profile + public profile. Reown Watch. Saved Items with SOLD badge. My Orders. Seller dashboard. Mark as Sold. Strike + suspension system. Auctions core flow (create, proxy bidding, soft close, winner escrow, second chance offer, Buy It Now). Pass It On core flow (create, First Come + Giver Chooses, Claim, Mark as Given, timeout handling, viral card). Explore tab (Auctions + Pass It On chips only). Content moderation. Admin ops panel. Lagos-only rollout. | 500 completed transactions. Dispute rate < 5%. |
| V2 | Month 3-6 | Chat subscription gating. Pro Seller subscription + storefront subdomain. Follow system + push notifications. Shareable listing links. Boost with location targeting. Platform inspector matching. Al listing auto-fill. Bulk listing upload. Referral programme (N1,000 credit, 50% fee cap). Seller analytics. Listing expiry + renewal. Offers/negotiation flow. Following list. Account deletion flow. Notification preferences. Abuja + Port Harcourt expansion. | 5,000 active users. N50M GMV. |
| V3 | Month 6-12 | Pro Seller auction features (extended durations, featured placement, auction analytics). Al price intelligence. Al fraud signal detection. Dispute evidence Al summary. Logistics partner integration. Gold Royalty Card. | 20,000 users. N200M GMV. |
| V4 | Month 12-18 | WhatsApp Al (Reown Al on WhatsApp) - buyer search, Watch alerts, listing via group tag. Pass It On advanced features. Nationwide rollout. | 50,000 users. N500M cumulative GMV. |

Reown PRD-Full Version v2.0 May 2026 Confidential[cite: 2]
Page 34[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
usereown.com usereown.ng[cite: 2]
## 14 TRUST, SAFETY & PROHIBITED ITEMS[cite: 2]

### 14.1 Strike & Suspension System[cite: 2]
| Violation | Strikes | Consequence |
| :--- | :--- | :--- |
| Off-platform solicitation (confirmed) | 1 | Warning + chat restriction for 7 days |
| Dispute ruled against seller (1st) | 1 | Warning email |
| Non-payment on auction win | 1 per occurrence | Strike + listing privileges blocked for 7 days |
| Giveaway no-show | 1 | Claiming blocked |
| Two giveaway no-shows in 90 days | | Claiming blocked for 14 days |
| 3 strikes total | - | Account suspended for 30 days. |
| Confirmed fraud or scam | | Permanent ban + reported to authorities |
| Listing prohibited item (2nd offence) | | Permanent ban |

### 14.2 Prohibited Items[cite: 2]
Weapons Drugs Prescription medication without authorisation Alcohol Adult content Endangered animals Counterfeit / pirated goods Stolen goods Any item illegal under Nigerian law[cite: 2]
Enforcement: Al content moderation on photos + keyword blacklist on titles and descriptions. Flagged listings go to manual review before going live. First offence = warning. Second offence = permanent ban.[cite: 2]

Reown PRD-Full Version v2.0 May 2026 Confidential[cite: 2]
Page 35[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
usereown.com usereown.ng[cite: 2]
## 15 OPEN QUESTIONS[cite: 2]
1. Paystack escrow sub-accounts[cite: 2]
Confirm production limits on sub-account creation at scale. This affects how escrow is structured per transaction at high volume.[cite: 2]

2. Inspector fee bands per category[cite: 2]
Define the minimum and maximum inspector fee for each item category (e.g. Electronics: N3,000-15,000. Vehicles: 8,000-15,000 Fashion: N1,500-N3,000). Required before V2 inspector matching launches.[cite: 2]

3. Escrow auto-release window[cite: 2]
Currently set at 72 hours. Is this right, or should it be 48 hours for faster seller cash flow? Affects seller trust and working capital speed.[cite: 2]

4. Chat subscription price validation[cite: 2]
$\times2,500/month$ is a hypothesis. Must be validated with target users before V2 launch.[cite: 2]

5. Pro Seller subdomain infrastructure[cite: 2]
Confirm wildcard subdomain routing approach at Railway (MVP) and AWS ECS (scale). Requires wildcard SSL certificate and reverse proxy configuration. Decision needed before V2 development begins.[cite: 2]

6. Prembly NIN verification pricing[cite: 2]
Confirm cost per verification call. Directly affects unit economics of the verified seller tier and whether a verification fee should be passed to users.[cite: 2]

7. Auction duration ceiling[cite: 2]
Should 14-day and 30-day auction options be available for high-value items like vehicles? Currently capped at 7 days. Needs a decision before V3 auction launch.[cite: 2]

8. Inspector onboarding quiz authorship[cite: 2]
Who writes and maintains the quiz per product category? Needs an internal owner assigned before V2 inspector launch.[cite: 2]

9. Referral credit percentage cap[cite: 2]
Currently set at 50% of buyer protection fee. Validate this is high enough to be a meaningful incentive but low enough to protect revenue.[cite: 2]

Reown PRD-Full Version v2.0 May 2026 Confidential[cite: 2]
Page 36[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
## 16 GLOSSARY[cite: 2]
usereown.com usereown.ng[cite: 2]
| Term | Definition |
| :--- | :--- |
| Declutter | An informal Nigerian reseller operating primarily via Instagram, acting as middleman between private sellers and buyers of used goods |
| Escrow | A financial arrangement where Reown holds payment on behalf of two parties until the buyer confirms receipt of the item |
| First-to-Pay | The claim mechanism where the first buyer to fund escrow secures the item, automatically reserving the listing |
| Fairly Used | Nigerian market term for used goods showing visible wear but fully functional |
| Tokunbo | Nigerian term for imported used goods from abroad (UK, US, Canada, Dubai) |
| Handoff Code | A 4-digit code given to the buyer after escrow payment. Used at physical exchange to confirm handoff and trigger payment release. |
| Pro Seller | A verified seller on a paid monthly subscription $(N7,500/month)$ with storefront subdomain, followers system, analytics, and bulk listing tools |
| Proxy Bidding | Auction mechanic where a bidder sets a maximum price and the system auto-bids incrementally on their behalf up to that maximum |
| Reown Watch | Saved search alert system notifies users when items matching their criteria appear, for a user-defined duration |
| Soft Close | Anti-sniping auction rule: any bid in the final 10 minutes extends the timer by 10 more minutes |
| Pass It On | Reown's free giveaway feature no price, no escrow, community-oriented item handoffs |
| Inspector | A vetted freelance product expert who physically visits a seller's location to verify item condition on behalf of a buyer (V2) |
| Strike | A demerit issued against a user account for a policy violation. Three strikes = 30-day suspension. |
| GMV | Gross Merchandise Value - total value of all transactions processed before fees |
| NIN | National Identification Number - issued by NIMC to all Nigerian citizens and legal residents |
| BVN | Bank Verification Number - issued by CBN, requires an active bank account |
| Subdomain | A unique URL for Pro Sellers (e.g. chinyere.usereown.com) shareable as a branded storefront |
| Following | A user's subscription to a Pro Seller's content - their new listings always appear tagged in the follower's swipe feed |
| NDPR | Nigeria Data Protection Regulation administered by NITDA, governs how personal data is collected and processed in Nigeria |
| NUBAN | Nigeria Uniform Bank Account Number the standardised 10-digit bank account number format used by all Nigerian banks |
| T&C; | Terms and Conditions the marketplace rules users must accept before entering Reown for the first time |
| WhatsApp Al | V4 feature Reown operating as an Al-powered agent on WhatsApp for buyer search, Watch alerts, and seller listing via group tag |

Reown PRD Full Version | v2.0 | May 2026 | Confidential[cite: 2]
Reown PRD-Full Version v2.0 May 2026 Confidential[cite: 2]
Page 37[cite: 2]

reown Product Requirements Document - Full Version | CONFIDENTIAL[cite: 2]
usereown.com usereown.ng[cite: 2]
This document is a living artifact. Update it as the product evolves.[cite: 2]
All information is confidential and intended for internal team use only.[cite: 2]
usereown.com usereown.ng[cite: 2]

Reown PRD-Full Version v2.0 May 2026 Confidential[cite: 2]
Page 38[cite: 2]