# Reifen Donis — Next.js Redesign

A responsive rebuild of reifen-donis.de (mobile, tablet, laptop) with the
original content, built on **Next.js 16 (App Router)** and **React 19**.

## Structure

```
app/
  layout.js          — shared shell (header, footer, global metadata)
  page.js            — Startseite
  ueber-uns/page.js  — Über uns (company history, team)
  leistungen/page.js — Leistungen (services + tire types)
  kontakt/page.js    — Kontakt (form + map)
  globals.css        — all styling (design tokens as CSS variables at the top)
components/
  SiteHeader.jsx      — sticky nav, mobile hamburger menu (client component)
  SiteFooter.jsx
  ContactForm.jsx     — the contact form (client component — has a TODO, see below)
  Bits.jsx            — small shared pieces (tread divider, CTA band, partners)
```

## Run locally

```bash
npm ci
npm run dev       # http://localhost:3000
```

Use `npm install` instead when adding or updating dependencies.

## Verify changes

```bash
npm run lint
npm test -- --runInBand
npm run e2e
```

`npm test -- --runInBand path/to/test.jsx` runs one Jest file. For a focused
browser test, use `npx playwright test e2e/navigation.spec.js`. Playwright
starts the development server automatically unless `BASE_URL` is set.

ESLint uses the flat configuration in `eslint.config.mjs`; run `npm run lint`
instead of the removed `next lint` command.

## Build a static site

`next.config.mjs` is set to `output: 'export'`, so a production build produces
plain static HTML/CSS/JS in `out/` — no Node server required to host it.

```bash
npm run build
# deploy the /out folder to any static host:
# Netlify, Vercel, GitHub Pages, S3 + CloudFront, nginx, etc.
```

If you'd rather run it as a normal Next.js server (to use API routes/Server
Actions later, e.g. for the contact form), just remove the `output: 'export'`
line from `next.config.mjs` and use `npm run build && npm run start` instead.

## Deploy to GitHub Pages

This repo ships with `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages automatically on every push to `main`.

### Deploy via the pipeline

1. Push a commit to the `main` branch, or start `Deploy to GitHub Pages` manually
   from the repository's **Actions** tab using **Run workflow**.
2. The pipeline runs on Ubuntu with Node 20 and installs the locked dependencies
   with `npm ci`.
3. Deployment is blocked unless `npm run lint`, `npm test -- --runInBand`, and
   `npm run e2e` pass. The pipeline installs the Chromium and WebKit Playwright
   browsers before running the E2E suite.
4. The pipeline calculates the GitHub Pages `BASE_PATH` from the repository
   name and runs `npm run build`, producing the static site in `out/`.
5. The `out/` artifact is uploaded and deployed to the `github-pages`
   environment. The resulting URL is shown in the completed workflow run.

Before the first deployment, configure **Settings → Pages → Build and
deployment → Source** as **GitHub Actions**. The workflow requires the default
branch to be named `main` and requires the Pages deployment environment and
permissions enabled by the repository settings.

**One-time setup:**

1. Push this project to a new GitHub repo. Fastest way, using the
   [`gh` CLI](https://cli.github.com) (creates the repo under your account,
   wires up the remote, and pushes — all in one command):
   ```bash
   gh auth login          # if not already logged in
   gh repo create Salman4018/reifen-donis-next --public --source=. --remote=origin --push
   ```
   Without `gh`, the plain git equivalent:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/Salman4018/reifen-donis-next.git
   git push -u origin main
   ```
2. On GitHub: **Settings → Pages → Build and deployment → Source** → select
   **GitHub Actions**. (You only do this once — no need to pick a branch or
   folder, the workflow handles that.) You can also do this from the CLI
   instead of clicking through the UI:
   ```bash
   gh api -X POST repos/Salman4018/reifen-donis-next/pages -f "build_type=workflow"
   ```
3. Push again (or re-run the workflow from the **Actions** tab). The site
   will be live at `https://<you>.github.io/<repo-name>/` a minute or two
   later.

**How the base path is handled:** GitHub Pages serves a normal repo at
`/<repo-name>/`, not at the domain root, so every internal link and asset
URL needs that prefix — otherwise CSS/JS 404s and nav links break. The
workflow works this out automatically from the repo name and passes it to
the build as `BASE_PATH`; `next.config.mjs` reads it. You don't need to
hardcode your repo name anywhere. (The one exception: if your repo is
literally named `<you>.github.io` — a user/org root site — GitHub serves
it at the domain root with no prefix, and the workflow detects that case
too.)

**Custom domain:** if you point a custom domain (e.g. `reifen-donis.de`) at
the Pages site instead of using the `github.io` URL, set `BASE_PATH` to an
empty string in the workflow (delete the `if/else` and just leave `value=`)
since a custom domain is served at its own root.

## Still needs your input before going live

- **Contact form backend** — `components/ContactForm.jsx` currently just
  shows an alert on submit. Wire it to a Next.js Route Handler / Server
  Action, or a service like Formspree.
- **Legal pages** — Impressum, Datenschutz, and Barrierefreiheit currently
  link to `#`. I didn't have that legal text from the original site.
- **Real photography** — the hero and section backgrounds are flat color;
  swap in workshop/team photos when you have them (drop them in `public/`
  and reference as `/your-image.jpg`).
