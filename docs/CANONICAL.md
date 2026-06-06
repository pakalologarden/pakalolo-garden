# pakalolo.garden — MASTER CANONICAL
Last Updated: June 5, 2026
═══════════════════════════════════════

## PROJECT IDENTITY
───────────────────────────────────────
Site:         pakalolo.garden
Redirect:     holoholopakalolo.com → pakalolo.garden
Owner:        Michael Salazar
Location:     Kapolei, Oahu, Hawaii
Email:        hello@pakalolo.garden → pakalologarden@gmail.com
Purpose:      Hawaii grow journal + cultivation community

## WHAT THIS IS
───────────────────────────────────────
A Hawaii grow knowledge base and community platform.
Real field notes from Michael's garden.
KNF, living soil, AutoPots, breeding, 329 home cultivation.
Not a store. Not a dispensary. Not a lifestyle brand.
Educational content only — Hawaii HRS §329.

## ACCOUNTS
───────────────────────────────────────
Cloudflare:   pakalologarden@gmail.com
GitHub:       pakalologarden / pakalolo-garden
Resend:       pakalologarden@gmail.com (domain verified)
Wrangler:     logged in as pakalologarden@gmail.com
Google/Anth:  mikefs888@gmail.com

## INFRASTRUCTURE
───────────────────────────────────────
Framework:    Astro v6.4.4 (static output)
Hosting:      Cloudflare Pages (auto-deploy on push)
Repo:         https://github.com/pakalologarden/pakalolo-garden
Live URL:     https://pakalolo.garden
Worker:       https://pakalolo-worker.pakalologarden.workers.dev
D1 Database:  pakalolo-db (55306472-f66b-44c7-abaa-08d3e74920c4)
D1 Table:     subscribers (id, email, source, created_at)

## LOCAL DEV
───────────────────────────────────────
Project:      ~/Downloads/pakalolo-garden
Run dev:      npm run dev (localhost:4321)
Deploy:       git add . && git commit -m "msg" && git push origin main
Worker:       wrangler deploy --config=wrangler.toml
Worker logs:  wrangler tail --config=wrangler.toml
Check DB:     wrangler d1 execute pakalolo-db --remote --command="SELECT * FROM subscribers;" --config=wrangler.toml

## FILE STRUCTURE
───────────────────────────────────────
src/layouts/
  BaseLayout.astro      — nav, footer, meta, PWA, install banner
  ArticleLayout.astro   — hero + two-column + sidebar + email CTA

src/pages/
  index.astro                              — home
  autopot-guide.astro                      — PILLAR PAGE

  equipment/
    how-to-buffer-coco.astro               ✓
    autopot-ph-problems.astro              ✓
    pumice-vs-perlite.astro                ✓
    understanding-vpd.astro                ✓
    ro-vs-tap-water.astro                  ✓
    cannabis-cloning-guide.astro           ✓
    coco-hybrid-recipe.astro               ✓

  knf/
    index.astro                            ✓ (article grid)
    knf-hawaii.astro                       ✓
    lab-recipe-hawaii.astro                ✓
    ohn-recipe-hawaii.astro                ✓
    fpj-recipe-hawaii.astro                ✓
    wca-recipe-hawaii.astro                ✓

  living-soil/
    index.astro                            ✓ (article grid)
    living-soil-mix-recipe-hawaii.astro    ✓
    living-amendments-mix-hawaii.astro     ✓

  hawaii-growing/index.astro              ✓ coming soon
  concentrates/index.astro                ✓ coming soon
  grow-journal/index.astro                ✓ coming soon
  breeding/index.astro                    ✓ coming soon
  deficiencies/                           not started

public/
  botanical.png          — botanical_06 hero watermark
  apple-touch-icon.png   — 180x180 green background
  favicon.ico + png sets
  site.webmanifest       — PWA config

worker/
  index.js               — subscribe endpoint + Resend welcome email
wrangler.toml            — Worker config + D1 binding

## DESIGN SYSTEM
───────────────────────────────────────
Fonts:
  Cormorant Garamond  — display/headings
  Instrument Sans     — body
  DM Mono             — labels, tags, mono

Colors:
  --forest:      #1a3a24  (nav, heroes, CTAs, Hawaii Notes)
  --gold:        #b8822a  (accent, labels, dividers)
  --cream:       #f4efe4  (base background)
  --sage:        #5a8a62  (secondary green)
  --charcoal:    #2a3328  (body text)
  --black:       #0f1c13  (footer)

Components (in global.css):
  .lead              — italic serif opener, gold left border
  .card-grid         — 2x2 benefit cards, gold top border
  .hawaii-notes      — dark forest pullout, ✿ HAWAII NOTES label
  .related-links     — sage-bordered article list
  .cta-block         — forest green email signup
  .hibiscus-divider  — ✿ ✿ ✿ section break

Botanical watermark: CSS ::before on .hero, mix-blend-mode: luminosity
Mobile: botanical shows at 260px, text readable

## VOICE & PHILOSOPHY
───────────────────────────────────────
Personal. Direct. Field-tested. Hawaii-specific.
Write like someone standing in their garden talking story.

Core philosophy:
"Create the conditions. Let the plant do the rest."
Not: "Push the plant harder."

Root philosophy:
The goal is not bigger plants.
The goal is genetic expression.
Take care of the roots first.

Preferred language:
  plant health / root-zone health / genetic expression
  environmental optimization / stress reduction
  plant vigor / terpene expression / consistency

Avoid:
  bigger yields / explosive growth / monster harvests
  no hype / no guru tone / not a store (negative positioning)
  poetic brand language / spiritual garden vibes
  "Follow the journey" / "From seed to soul"

Copy direction:
  Direct. Useful. Grounded.
  "Stay connected" not "Follow the journey"
  "Subscribe" not "Join the ohana"
  Define by what it IS, not what it's not.

## EMAIL SYSTEM
───────────────────────────────────────
Capture:      Cloudflare Worker /subscribe endpoint
Storage:      D1 subscribers table
Welcome:      Resend from hello@pakalolo.garden
Subject:      "You are on the list"
Routing:      hello@pakalolo.garden → pakalologarden@gmail.com

Welcome email tone:
  Direct. Not poetic.
  "I grow and document KNF, living soil, AutoPots..."
  "You'll hear from me when there are new articles, events, meetups..."
  "If you're local, reply and introduce yourself."

## CONTENT ARCHITECTURE
───────────────────────────────────────
Hub: /autopot-guide (pillar — all pages link back here)

Silos:
  /equipment    — AutoPots, coco, tools, environment
  /knf          — KNF inputs, recipes, field notes
  /living-soil  — soil builds, amendments, recipes
  /hawaii-growing — 329, outdoor, climate, Oahu-specific
  /concentrates — educational only, no manufacturing
  /deficiencies — troubleshooting, plant health
  /breeding     — genetics, projects, phenohunting
  /grow-journal — real grow logs, ongoing

SEO principle: every page = a door from Google
Target: 100+ pages total (currently ~20 real pages)

## MICHAEL'S ACTUAL GROW METHODS
───────────────────────────────────────
Indoor: AutoPot 1Pot XL, 70/30 coco/pumice, AirDomes
Coco: Nutrifield Mega Brick (RHP certified, pre-washed)
Buffer: 10 gal RO water, 150mL cal-mag, pH 5.8-6.0, 24hr soak
EC: 1.0-1.2 EC (500-600 PPM 500 scale) from transplant
pH: RO water, indoor 5.8-6.0, hybrid coco 6.2-6.5
Environment: AC Infinity Controller AI+, dehumidifier year-round flower
VPD: Controlled by controller, dehumidifier critical in Hawaii

Cloning: EZ Clone 16 site, 150 PAR, pH 5.8, 10 drops GH Rapid Start/gal
Clone to coco: 1-2 weeks, then into buffered coco at 1.0-1.2 EC
Clone to outdoor: 50/50 light mix + coco → 1/2/3 gal pots → outdoor soil
Hardening: 3-5 days partial shade before full Oahu sun

KNF inputs used:
  LAB: Costco A2 organic milk, rice wash, 1:10 ratio, 5-7 day ferment
       Apply: 5mL/L drench, 1-2mL/L foliar, morning only
  OHN: Garlic/ginger/turmeric/cinnamon, equal parts, alcohol extraction
       30 days preferred, 1:1 brown sugar preserve
       Apply: 1-2mL/L foliar/drench, 2-5mL/L IPM
  FPJ Veg: Sweet potato tips, taro, kangkong — 1:1 brown sugar, 5-7 days
  FPJ Terp: Pineapple, papaya, banana, sugarcane — 1:1 brown sugar, 5-7 days
  WCA: Roasted eggshells + brown rice vinegar, 1:10 ratio, 7-14 days
  CalPhos: Roasted bones + brown rice vinegar, 1:10 ratio, 2-4 weeks

Living soil base (Ras Truth style, 6.6 cu ft):
  4.0 cu ft peat + 2.6 cu ft coarse perlite (40%)
  1.0 cu ft EWC + 0.5 cu ft compost
  Oyster shell 8c, Gypsum 6c, Epsom 2c (max)
  Basalt 8c, Rock dust 8c, Kelp 4c, Crab meal 4c, Humic 2c
  Cook 4-6 weeks, water pH 6.6-6.8

Living amendments top dress:
  Neem cake 4c, Crab meal 4c, Fish bone 2c, Alfalfa 2c, Kelp 2c
  Gypsum 4c, Basalt 4c, Azomite 2c, Epsom 0.5c
  Horticultural charcoal 8c, Rice hulls 4c, Bokashi 2c, EWC 8c
  Total: 46.5 cups = 744 tbsp per batch
  Apply: 1 tbsp/gal weekly OR 12 tbsp/5gal every 2-3 months

## PUBLISHING WORKFLOW
───────────────────────────────────────
New page template:
  1. Create file in correct silo folder
  2. Import ArticleLayout from ../../layouts/ArticleLayout.astro
  3. Define tocItems and relatedInCluster arrays
  4. Set title, description, silo, siloSlug, tags, date props
  5. Write content with: lead, h2 sections, card-grids, hawaii-notes, related-links
  6. Every page ends with link back to /autopot-guide
  7. git add . && git commit -m "msg" && git push origin main

Article structure:
  <p class="lead"> — italic opener
  <h2 id="section"> — main sections
  <h3> — subsections (uppercase mono style)
  <div class="card-grid"> — 2x2 comparison/benefit cards
  <div class="hawaii-notes"> — personal field notes, Hawaii-specific
  <div class="related-links"> — links to cluster articles
  <hr /> — section dividers

## TO BUILD NEXT
───────────────────────────────────────
PRIORITY 1 — Hawaii Growing cluster:
  /hawaii-growing/329-homegrow-hawaii
  /hawaii-growing/growing-cannabis-hawaii
  /hawaii-growing/outdoor-cannabis-hawaii
  /hawaii-growing/hawaii-cannabis-climate
  /hawaii-growing/cannabis-pest-pressure-hawaii

PRIORITY 2 — Deficiencies cluster:
  /deficiencies/cannabis-deficiency-guide (pillar)
  /deficiencies/calcium-deficiency-cannabis
  /deficiencies/magnesium-deficiency-cannabis
  /deficiencies/nitrogen-toxicity-cannabis
  /deficiencies/fungus-gnats-living-soil

PRIORITY 3 — Equipment deep pages:
  /equipment/airdomes-explained
  /equipment/understanding-ec
  /equipment/understanding-ppm
  /equipment/harvest-timing
  /equipment/drying-cannabis

PRIORITY 4 — KNF remaining:
  /knf/knf-for-cannabis
  /knf/imo-collection-hawaii
  /knf/knf-inputs-explained

PRIORITY 5 — Living soil remaining:
  /living-soil/living-soil-hawaii (pillar)
  /living-soil/living-soil-vs-coco
  /living-soil/reusing-living-soil
  /living-soil/outdoor-living-soil-hawaii

PRIORITY 6 — Grow Journal (real logs):
  /grow-journal/bubba-kush-grow-log
  /grow-journal/chem-91-grow-log
  /grow-journal/fungus-gnat-battle

FUTURE:
  Amazon affiliate links in equipment pages
  Google Search Console setup + sitemap submission
  Britney pest control vertical (after 30 pages live)
  Kit email broadcasts setup

## SESSION START INSTRUCTIONS
───────────────────────────────────────
1. cd ~/Downloads/pakalolo-garden
2. npm run dev
3. Confirm localhost:4321 running
4. Check wrangler whoami → should show pakalologarden@gmail.com
5. Reference this canonical for context
6. Pick up from TO BUILD NEXT list
