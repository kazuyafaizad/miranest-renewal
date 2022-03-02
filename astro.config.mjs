// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference
import { imagetools } from 'vite-imagetools';

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.
// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  // Enable the Preact renderer to support Preact JSX components.
  renderers: ["@astrojs/renderer-preact"],
  buildOptions: {
     site: "http://test.miranest.jp",
    sitemap: true,
  },
  vite: {
    ssr: {
      external: ["svgo"],
    },
    plugins: [imagetools()],
    resolve: {},
    build: {
      rollupOptions: {
        output: {
          assetFileNames: `[name].[ext]`,
        },
      },
    },
  },
  devOptions: {
    hostname: "0.0.0.0",
  },
});
