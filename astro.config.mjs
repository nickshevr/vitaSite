// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	prefetch: {
		defaultStrategy: 'viewport'
	},
	site: 'https://mybuddy.website.yandexcloud.net',
	integrations: [mdx(), sitemap()],
});
