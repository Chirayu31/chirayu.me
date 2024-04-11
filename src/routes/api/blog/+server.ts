import { json } from '@sveltejs/kit';
import type { Post } from '$lib/types';

async function getPosts() {
	let posts: Post[] = [];

	const paths = import.meta.glob('/src/data/blog_data/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } satisfies Post;
			post.published && posts.push(post);
		}
	}

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return posts;
}

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const recentPostsFlag = searchParams.get('recentPosts');

	let posts: Post[];

	if (recentPostsFlag === 'true') {
		posts = getRecentPosts(await getPosts());
	} else {
		posts = await getPosts();
	}

	return json(posts);
}

function getRecentPosts(posts: Post[]): Post[] {
	const sortedPosts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return sortedPosts.slice(0, 3);
}
