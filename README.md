# Nexus Starter

A personal website / blog template built with Vue 3 + Vite + TailwindCSS.

## Quick Start

1. **Use this template** — click "Use this template" on GitHub or clone the repo.
2. **Configure** — edit `src/data/site/config.ts` with your personal info.
3. **About page** — edit `src/data/site/about.md` with your own content (Markdown).
4. **Add content** — put Markdown posts in `src/data/docs/posts/` and notes in `src/data/docs/notes/`.
5. **Add projects** — edit files in `src/data/site/` (apps, games, tools, pages, infra, friends).
6. **Environment** — copy `.env.example` to `.env.local` and fill in your Giscus config.
7. **Dev** — `npm install && npm run dev`
8. **Deploy** — push to GitHub and enable Pages (the included workflow handles it).

## Features

- 🌙 Dark / Light theme
- 🌸 Animated backgrounds (particles, sakura, snow)
- 📝 Markdown blog posts & notes with frontmatter
- 🗂️ Project showcase (websites, apps, games, tools) — optional
- 🏗️ Infrastructure status dashboard — optional
- 🔍 Client-side search
- 💬 Giscus comments (GitHub Discussions)
- 🌐 i18n (zh, en, ja, de, la, zh_tw)
- 📱 Responsive mobile layout

## Project Structure

```
src/
├── data/
│   ├── site/
│   │   ├── config.ts    ← your personal config (start here!)
│   │   ├── about.md     ← about page content (Markdown)
│   │   ├── profile.ts
│   │   ├── app.ts
│   │   ├── game.ts
│   │   ├── page.ts
│   │   ├── tool.ts
│   │   ├── infra.ts
│   │   └── friends.ts
│   └── docs/
│       ├── posts/       ← blog posts (.md)
│       └── notes/       ← short notes (.md)
├── components/
├── composables/
├── layouts/
├── views/
└── styles/
```

## License

MIT
