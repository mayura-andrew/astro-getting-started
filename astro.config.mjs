import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:3000/',
  output: 'server',
  experimental: {
    optimizeHoistedScript: true,
  },
  integrations: [react(), solidJs()],
  adapter: netlify()
});