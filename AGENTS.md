# Agent Instructions

## Project

- This is a single-package Next.js 16 App Router site using React 19; routes live under `app/` and shared UI lives under `components/`.
- `app/layout.js` owns global metadata, the shared header/footer shell, and the global stylesheet import.
- `components/SiteHeader.jsx` and `components/ContactForm.jsx` are client components; pages and the other shared components are server components.
- Internal routes use trailing slashes (`/leistungen/`, `/ueber-uns/`, `/kontakt/`) because `next.config.mjs` sets `trailingSlash: true`. Use ASCII route names for deployment-safe internal links.

## Commands

- Install dependencies with `npm ci` for CI-reproducible setup; use `npm install` when changing dependencies.
- Run the development server with `npm run dev` at `http://localhost:3000`.
- Run lint with `npm run lint`; this uses the flat ESLint config in `eslint.config.mjs`, not the removed `next lint` command.
- Run unit tests with `npm test -- --runInBand`; target one file by appending its path, for example `npm test -- --runInBand components/__tests__/ContactForm.test.jsx`.
- Run browser tests with `npm run e2e`; Playwright starts `npm run dev` automatically unless `BASE_URL` is set.
- Target one browser test file with `npx playwright test e2e/navigation.spec.js`; use `npm run e2e:ui` for interactive debugging.
- Run `npm run build` to produce the static site in `out/`; `npm start` is not applicable while `output: 'export'` remains enabled.

## Verification Rule

- Always fix lint and build warnings introduced by a change; do not leave new warnings as accepted output.
- Treat filesystem errors such as Windows/OneDrive `EPERM` or `EBUSY` locks as verification failures to resolve or report separately, not as warnings.

## Deployment

- `.github/workflows/deploy.yml` deploys to GitHub Pages on pushes to `main` or manual dispatch, using Node 20 and `npm ci`.
- The workflow computes `BASE_PATH` from the repository name; preserve this when changing links or assets so project-page deployments do not break.

## Known Behavior

- The contact form intentionally only shows a browser alert; do not describe it as a working submission backend until `components/ContactForm.jsx` is wired to a service or endpoint.
- Footer legal links are placeholders (`#`) for Impressum, Datenschutz, and Barrierefreiheit; legal pages are not implemented.
- Customer review ratings, counts, and excerpts must use Google as the source;
  do not reference `https://reifen-donis.de/` as the review source. Keep the
  Google source URL and verification date in `data/reviews.js`. If Google
  review text is added, it must be verified and attributed to Google.
