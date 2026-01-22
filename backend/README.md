# Backend (Nest.js)

## Structure (proposed)
```
backend/
  src/
    app.module.ts
    auth/
      auth.module.ts
      guards/admin.guard.ts
      strategies/
        google.strategy.ts
        kakao.strategy.ts
        naver.strategy.ts
        tiktok.strategy.ts
    request-song/
      request-song.module.ts
      request-song.controller.ts
      request-song.service.ts
      dto/
      entities/
    youtube/
      youtube.module.ts
      youtube.service.ts
      youtube.controller.ts
    calendar/
      calendar.module.ts
      calendar.controller.ts
      calendar.service.ts
    health/
      health.controller.ts
  prisma/
    schema.prisma
  .env.example
```

## Notes
- MariaDB connection uses `DATABASE_URL` in `.env`.
- YouTube API credentials are required for search/playlist actions.
- Admin-only endpoints are protected by `AdminGuard` and OAuth strategies.
- TikTok integration can be added by implementing a new strategy in `auth/strategies`.

## Order Sync
- Drag & drop reorder sends ordered IDs to `PATCH /api/request-songs/reorder`.
- Service updates `orderIndex` and applies YouTube playlist reorder.

## Next Song
- Next song is the first item with `isPlayed = false` and the smallest `orderIndex`.
