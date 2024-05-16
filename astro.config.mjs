import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

import svelte from '@astrojs/svelte'

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: vercel({
    speedInsights: {
      enabled: true,
    },
    webAnalytics: {
      enabled: true,
    },
    imageService: true,
  }),
  integrations: [tailwind(), mdx(), sitemap()],
  site: 'https://www.andrzejsokolowski.github.io',
  redirects: {
    '/contact': 'https:///www.linkedin.com/in/ansok99/',
    '/cv': '/cv.pdf',
    '/resume': '/resume.pdf'
  },
})
