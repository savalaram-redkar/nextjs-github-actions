/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  trailingSlash: true,
  // Prevent automatic `/me` -> `/me/`, instead preserve `href`
  skipTrailingSlashRedirect: true,
  // Change the output directory `out` -> `dist`
  distDir: "dist",
};

module.exports = nextConfig;
