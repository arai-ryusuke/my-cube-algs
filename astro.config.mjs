import { defineConfig } from 'astro/config';

// GitHub Pages: https://arai-ryusuke.github.io/my-cube-algs/
export default defineConfig({
  site: 'https://arai-ryusuke.github.io',
  base: '/my-cube-algs',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
