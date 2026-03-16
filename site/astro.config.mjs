// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// GitHub Pages : remplacer YOUR_GITHUB_USERNAME et le repo slug si différent
export default defineConfig({
  site: 'https://YOUR_GITHUB_USERNAME.github.io',
  base: '/formation-ia-pme',
  output: 'static',
});
