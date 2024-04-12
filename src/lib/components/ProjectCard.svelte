<script lang="ts">
	export let title: string;
	export let description: string;
	export let githubLink: string;
	export let livePreviewLink: string;
	export let isEven: boolean;
	export let image: string;

	const getRandomColor = () => {
		const letters = '0123456789ABCDEF';
		let color1 = '#';
		let color2 = '#';
		for (let i = 0; i < 6; i++) {
			color1 += letters[Math.floor(Math.random() * 16)];
			color2 += letters[Math.floor(Math.random() * 16)];
		}
		if (parseInt(color1.substring(1), 16) > parseInt(color2.substring(1), 16)) {
			[color1, color2] = [color2, color1];
		}
		return [color1, color2];
	};

	const [gradientColor1, gradientColor2] = getRandomColor();
</script>

<a href={livePreviewLink || githubLink} target="_blank" rel="noopener noreferrer">
	<div
		class={` w-72 lg:w-80 bg-[#FCDCAD] py-4 rounded-xl cursor-pointer hover:scale-[1.005] ${isEven ? 'rotate-2' : '-rotate-2'} hover:rotate-0 transition-transform duration-100 ease-in-out border border-[#fec570]`}
	>
		<div class="flex items-center gap-4 mx-10">
			<img src={image} alt={title} class="w-12 h-12 rounded-full" />
			<h2 class="text-3xl font-medium">{title.toLowerCase()}</h2>
		</div>

		<p class="mx-6 mt-4 text-base lg:text-lg text-gray-600">{description.toLowerCase()}</p>
	</div>
</a>
