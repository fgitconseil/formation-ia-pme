import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://formation-ia-pme.fgitconseil.com',
  base: '/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
