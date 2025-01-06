import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const products = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/products', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		id: z.string(),
		bullets: z.array(z.string()),
		flavors: z.array(z.string()),
		quants: z.array(z.string()),
		title: z.string(),
		who: z.string(),
		when: z.string(),
		how: z.string(),
		ingridients: z.string(),
		ozonLink: z.string(),
		description: z.string(),
		// Transform string to Date object
		heroImage: z.string(),
		table: z.array(z.object({
			factor: z.string(),
			meaning: z.string(),
		})),
	}),
});

export const collections = { products };
