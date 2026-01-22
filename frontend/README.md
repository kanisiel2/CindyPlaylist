# Frontend (Nuxt.js + Tailwind)

## UI Highlights
- Sticky "Next Song" header that stays visible while scrolling.
- Drag & drop list for reordering.
- Admin-only modal for creating requests.
- Calendar view for historical dates with shareable playlist links.

## Suggested Pages
- `/` Today request list
- `/history` Calendar and historical lists

## Tailwind Setup (example)
Install Tailwind module and enable in Nuxt config.

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/tailwind.css"],
});
```

```css
/* assets/css/tailwind.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```
