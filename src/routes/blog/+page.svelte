<script lang="ts">
	import ArticleCard from '$lib/components/ArticleCard.svelte';
	import type { Categories } from '$lib/types.js';
	export let data;

	let selectedCategory: Categories = 'latest';

	function selectCategory(category: Categories) {
		selectedCategory = category;
	}
</script>

<main class="mt-20 mx-5 sm:mx-10 md:mx-28 lg:mx-40 mb-10">
	<h1 class="text-4xl font-medium">some articles i've wrote</h1>

	<div class="flex mt-8 gap-2 sm:gap-5 text-sm sm:text-base">
		<button
			class="cursor-pointer text-gray-600 hover:text-black"
			class:selected={selectedCategory === 'latest'}
			on:click={() => selectCategory('latest')}
		>
			latest
		</button>
		<button
			class="cursor-pointer text-gray-600 hover:text-black"
			class:selected={selectedCategory === 'coding'}
			on:click={() => selectCategory('coding')}
		>
			coding
		</button>
		<button
			class="cursor-pointer text-gray-600 hover:text-black"
			class:selected={selectedCategory === 'thoughts'}
			on:click={() => selectCategory('thoughts')}
		>
			thoughts
		</button>
		<button
			class="cursor-pointer text-gray-600 hover:text-black"
			class:selected={selectedCategory === 'productivity'}
			on:click={() => selectCategory('productivity')}
		>
			productivity
		</button>
		<button
			class="cursor-pointer text-gray-600 hover:text-black"
			class:selected={selectedCategory === 'stories'}
			on:click={() => selectCategory('stories')}
		>
			stories
		</button>
	</div>

	<div
		class="max-w-[350px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[700px] flex flex-col mt-5 gap-6"
	>
		{#if data.posts.filter((post) => post.categories.includes(selectedCategory)).length === 0}
			<p class="text-gray-600">No articles found</p>
		{:else}
			{#each data.posts.filter((post) => post.categories.includes(selectedCategory)) as article}
				<ArticleCard
					heading={article.title}
					subheading={article.subtitle}
					image={article.image}
					slug={article.slug}
				/>
			{/each}
		{/if}
	</div>
</main>

<style>
	.selected {
		text-decoration: underline;
	}
</style>
