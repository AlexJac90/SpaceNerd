// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

const site = process.env.SITE ?? 'http://localhost:4321';
const base = process.env.BASE_PATH ?? '/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  devToolbar: { enabled: false },
  integrations: [tailwind({ applyBaseStyles: false }), react()],
  image: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.nasa.gov', pathname: '/**' },
      { protocol: 'https', hostname: 'images-assets.nasa.gov', pathname: '/**' },
    ],
  },
});
