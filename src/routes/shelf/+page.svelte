<script lang="ts">
	let resources: { category: string; items: { title: string; author: string }[] }[] = [
		{
			category: 'books',
			items: []
		},
		{
			category: 'papers',
			items: []
		},
		{
			category: 'productivity',
			items: [{ title: 'Courage To Be Disliked', author: ' Ichiro Kishimi and Fumitake Koga' }]
		}
	];

	let selectedCategory = 'books';
</script>

<main class="mt-20 mx-5 sm:mx-10 md:mx-28 lg:mx-40 mb-10">
	<h1 class="text-4xl font-medium">my shelf</h1>

	<div class="flex mt-8 gap-5">
		{#each resources as resource}
			<button
				class={`cursor-pointer ${selectedCategory === resource.category ? 'underline text-black' : ''} text-gray-600 hover:text-black hover:underline`}
				on:click={() => (selectedCategory = resource.category)}
			>
				{resource.category}
			</button>
		{/each}
	</div>

	<div class="mt-10">
		{#each resources as resource}
			{#if resource.category === selectedCategory}
				{#if resource.items.length === 0}
					<p class="text-gray-500">No resource listed yet.</p>
				{:else}
					<div class="mt-8">
						<ul class="mt-4 grid grid-cols-1 sm:grid-cols-2">
							{#each resource.items as item}
								<li class="flex items-center gap-2 py-2">
									<span class="font-medium text-xl">{item.title}</span>
									<span class="text-gray-500">by {item.author}</span>
								</li>
							{/each}
						</ul>
					</div>
				{/if}
			{/if}
		{/each}
	</div>
</main>
