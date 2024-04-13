<script lang="ts">
	export let heading: string;
	export let subheading: string;
	export let image: string;
	export let slug: string;
</script>

<a href={`/blog/${slug}`}>
	<div
		class="w-full flex bg-white gap-5 py-3 px-5 rounded-2xl mx-2 sm:mx-5 md:mx-10 cursor-pointer hover:scale-[1.005] transition-transform duration-200 ease-in-out"
	>
		<img src={image} alt="blog" class="w-12 h-12 bg-yellow-300 rounded-full object-cover" />
		<div>
			<h3 class="font-medium text-base sm:text-lg">
				{heading.length > 25 ? `${heading.slice(0, 25)}...` : heading}
			</h3>
			<p class="text-gray-600 text-xs sm:text-sm">{subheading}</p>
		</div>
	</div>
</a>
