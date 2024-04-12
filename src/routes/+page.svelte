<script lang="ts">
	import 'iconify-icon';
	import ArticleCard from '$lib/components/ArticleCard.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects } from '../data/projects.json';

	export let data;
</script>

<svelte:head>
	<title>chirayu.me</title>
	<meta
		name="description"
		content="I'm Chirayu Pancholi, and I love building things. Explore my latest articles and projects to see what I've been working on."
	/>
	<meta
		name="keywords"
		content="chirayu, chirayu pancholi, full stack developer, web development, software engineering"
	/>
	<meta name="author" content="Chirayu Pancholi" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<main class="mt-20 mx-5 sm:mx-10 md:mx-28 lg:mx-40 mb-10">
	<div class="flex items-start">
		<div
			class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-b from-yellow-300 to-purple-300 animate-pulse"
		></div>
		<div class="flex flex-col gap-2 ml-2">
			<h1 class="text-2xl sm:text-3xl md:text-4xl font-medium">hi, welcome to my little corner</h1>

			<p class="text-base sm:text-lg text-gray-600">
				i’m chirayu pancholi and i absolutely love to build.
			</p>

			<div class="flex gap-8 sm:gap-10 mt-6">
				<a href="https://github.com/Chirayu31">
					<iconify-icon
						icon="bxl:github"
						class="text-3xl text-gray-600 hover:text-black cursor-pointer"
					></iconify-icon>
				</a>

				<a href="https://www.linkedin.com/in/chirayupancholi">
					<iconify-icon
						icon="bxl:linkedin"
						class="text-3xl text-gray-600 hover:text-black cursor-pointer"
					></iconify-icon>
				</a>

				<a href="https://twitter.com/chirayu_31">
					<iconify-icon
						icon="bxl:twitter"
						class="text-3xl text-gray-600 hover:text-black cursor-pointer"
					></iconify-icon>
				</a>

				<a href="mailto:chirayu.work@gmail.com">
					<iconify-icon
						icon="bxl:gmail"
						class="text-3xl text-gray-600 hover:text-black cursor-pointer"
					></iconify-icon>
				</a>
			</div>
		</div>
	</div>

	<section class="mt-12">
		<h2 class="font-medium text-xl">latest articles</h2>

		<div
			class="max-w-[350px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[700px] flex flex-col mt-5 gap-6"
		>
			{#each data.posts as article}
				<div>
					<ArticleCard
						heading={article.title}
						subheading={article.subtitle}
						image={article.image}
						slug={article.slug}
					/>
				</div>
			{/each}
		</div>
	</section>

	<section class="mt-12">
		<h2 class="font-medium text-xl">latest projects</h2>

		<div
			class="max-w-[350px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[700px] mt-10 grid grid-cols-1 md:grid-cols-2 gap-12"
		>
			{#each projects.slice(0, 2) as project, index}
				<ProjectCard
					title={project.heading}
					description={project.description}
					githubLink={project.githubLink}
					livePreviewLink={project?.livePreviewLink}
					isEven={index % 2 === 0}
					image={project.image}
				/>
			{/each}
		</div>
	</section>
</main>
