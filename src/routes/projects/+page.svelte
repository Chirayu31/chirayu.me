<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects } from '../../data/projects.json';
</script>

<main class="mt-20 mx-5 sm:mx-10 md:mx-28 lg:mx-40 mb-10">
	<h1 class="text-4xl font-medium">some projects i've built</h1>

	<div
		class="max-w-[350px] sm:max-w-full md:max-w-[600px] lg:max-w-[700px] mt-10 grid grid-cols-1 sm:grid-cols-2 gap-12"
	>
		{#each projects as project, index}
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
</main>
