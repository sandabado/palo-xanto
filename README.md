# Palo Xanto

The official Palo Xanto artist experience: music, approved biography, live
presence, Homestead Sessions, press materials, and booking.

## Public data boundary

The site reads only Palo Xanto's published `artist_profile` snapshot from
ØDIN's `published_entities` mirror. It does not query private artist,
treasury, booking, partner, or operational tables.

When the public mirror is unavailable during local development, the site uses
an artist-approved curated fallback with the same public fields.

## Local development

```bash
npm install
npm run dev -- --port 3005
```

Set the public Supabase URL and publishable key from `.env.example` to exercise
the live mirror. No service-role or payment credentials belong in this repo.

## Commerce

Checkout is intentionally absent. Current music sales route to Palo Xanto's
official Bandcamp until ØDIN commerce readiness is explicitly approved.
