// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	prefetch: {
		defaultStrategy: 'viewport'
	},
	site: 'https://mybuddy.ru',
	integrations: [
		mdx(),
		sitemap({
			// Настройки для sitemap
			filter: (page) => {
				// Исключаем RSS feed из sitemap
				return !page.includes('rss.xml');
			},
		})
	],
});
