<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.subtitle} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.subtitle} />
	<meta property="og:image" content={data.meta.image} />
	<meta property="og:url" content={data.meta.url} />
</svelte:head>

<article class="max-w-2xl mx-auto px-4 py-8">
	<hgroup>
		<h1 class="text-3xl font-bold mb-4">{data.meta.title}</h1>
		<p class="text-gray-600">Published at {data.meta.date}</p>
	</hgroup>

	<div class="flex gap-4 mt-4">
		{#each data.meta.categories as category}
			<span class="text-gray-600">{category}</span>
		{/each}
	</div>

	<div class="prose lg:prose-xl prose-invert mt-8">
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	:global(.prose a) {
		@apply text-blue-500 hover:text-blue-700;
	}

	:global(.prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6) {
		@apply text-gray-800 font-bold mb-3;
	}
	:global(.prose h1) {
		@apply text-4xl;
	}

	:global(.prose h2) {
		@apply text-3xl;
	}

	:global(.prose h3) {
		@apply text-2xl;
	}

	:global(.prose h4) {
		@apply text-xl;
	}

	:global(.prose h5) {
		@apply text-lg;
	}

	:global(.prose h6) {
		@apply text-base;
	}
	:global(.prose p, .prose ul, .prose ol, .prose blockquote) {
		@apply text-gray-700 leading-7 mb-6;
	}

	:global(.prose blockquote) {
		@apply border-l-4 border-gray-300 pl-4 text-gray-600;
	}

	:global(.prose code) {
		@apply bg-gray-100 px-1 py-0.5 rounded;
	}

	:global(.prose pre) {
		@apply bg-gray-100 p-4 overflow-x-auto rounded mb-4;
	}

	:global(.prose ul, .prose ol) {
		@apply list-disc ml-6;
	}

	:global(.prose li) {
		@apply mb-2;
	}
</style>
