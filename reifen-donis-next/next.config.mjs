/** @type {import('next').NextConfig} */

// GitHub Pages serves project sites at username.github.io/repo-name/,
// not at the domain root — so the static export needs its internal
// links and asset URLs prefixed with "/repo-name". The deploy workflow
// (.github/workflows/deploy.yml) sets BASE_PATH automatically based on
// the repo name, so you shouldn't need to touch this file by hand.
// Local `npm run dev` / `npm run build` with no BASE_PATH set behaves
// exactly as before (empty base path).
const basePath = process.env.BASE_PATH || '';

const nextConfig = {
  output: 'export',        // pre-renders to static HTML/CSS/JS in /out — deploy anywhere
  trailingSlash: true,     // /leistungen/ instead of /leistungen.html — plays nicer with static hosts
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,     // no image-optimization server needed for a static export
  },
};

export default nextConfig;
