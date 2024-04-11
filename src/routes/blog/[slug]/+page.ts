import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`../../../data/blog_data/${params.slug}.md`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e: any) {
		error(404, e);
	}
}
