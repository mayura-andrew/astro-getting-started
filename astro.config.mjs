import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";
import netlify from '@astrojs/netlify/edge-functions';


// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:3000/',
  output: 'server',
  experimental: {
    hybridOutput: true
  },
  integrations: [react(), solidJs()],
  adapter: netlify()
});