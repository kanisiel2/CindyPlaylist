# CindyPlaylist Architecture (Nuxt.js + Nest.js + MariaDB)

## Goals
- Daily request song intake with YouTube search + selection.
- Sync request order with YouTube playlist order.
- Admin-only controls for create/edit/play state.
- Calendar view for historical dates and shareable playlist links.
- Extensible OAuth providers (TikTok, etc.).

## High-level Flow
1. User submits request (artist/title/requester/type flags).
2. Nest.js searches YouTube Data API and returns best match + alternatives.
3. User selects video; backend persists selection and inserts into playlist.
4. Drag & drop reorder updates DB order and YouTube playlist order.
5. Calendar view loads available date keys and builds shareable links.

## Module Breakdown (Nest.js)
- `AuthModule`
  - OAuth strategies (Google/Kakao/Naver/TikTok later)
  - Admin guard + role-based access
- `RequestSongModule`
  - CRUD for request songs
  - Order updates, play state toggles
  - Next-song computation
- `YouTubeModule`
  - Search API
  - Playlist insert/remove/reorder
  - Token refresh for YouTube API
- `CalendarModule`
  - Date availability for historical data
  - Playlist link generation by date
- `HealthModule`
  - Health checks

## Key Data Model (MariaDB)
See `backend/prisma/schema.prisma` for the full schema.

## API Surface (draft)
- `POST /api/request-songs` (admin only)
  - Body: artistName, songTitle, requesterName, reactionType, playType
- `GET /api/request-songs/today`
  - Returns list + computed next song
- `PATCH /api/request-songs/:id/play-state` (admin only)
  - Body: isPlayed
- `PATCH /api/request-songs/reorder` (admin only)
  - Body: orderedIds[]
- `GET /api/calendar/available-dates`
  - Returns date keys with data
- `GET /api/calendar/:dateKey`
  - Returns list + shareable playlist link
- `POST /api/youtube/search`
  - Body: artistName, songTitle
  - Returns best match + options

## Frontend Pages (Nuxt)
- `/` (today)
  - Next-song sticky header
  - Request list w/ drag & drop
  - Admin modal for create
- `/history`
  - Calendar with enabled dates
  - Request list + share link per date

## External Config
- YouTube API credentials are provided via `.env` files. See `backend/.env.example`.
