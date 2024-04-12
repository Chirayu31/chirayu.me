<script lang="ts">
	const content = {
		aboutMe: `let me introduce myself once again, my name is chirayu  - a full stack developer and Computer Science engineering student. I'm currently an Associate SDE Intern at Carwale, and also the GDSC Web Development Lead at IPS Academy.`,
		imageSrc: '/me.png',
		imageAlt: 'its me',
		degree: `I've been passionate about coding since the 6th grade, and in my free time, you can find me gaming or working on personal projects. As a full stack dev, I enjoy the entire breadth of the development process, from architecting backend systems to crafting sleek user interfaces.Feel free to connect with me to discuss all things tech, gaming, or anything else that piques your interest!
		`,
		workExperience: [
			{
				logoSrc:
					'https://play-lh.googleusercontent.com/SPcx-zXr-oMf6R7ysx2s3QFKLho4BEwV5gRoleYK0Yi1qhQRztK1hF88-w7TiJMLSyyB',
				logoAlt: 'carwale logo',
				position: 'associate sde intern',
				company: 'carwale',
				date: 'Jan 2024 - present',
				responsibilities: [
					`Responsible for conducting chaos testing by strategically shutting down specific
					microservices. Ensure smooth page loads and appropriate status code responses, even when
					certain microservices are down, demonstrating robust system design and resilience.`,
					`Contributed to Carwale’s internal hackathon, collaborating with a team to develop
					distributed testing solutions for microservices. Leveraged cutting-edge technologies such
					as OpenTelemetry and Jaeger for distributed tracing, showcasing strong problem-solving and
					technical skills`
				]
			}
		],
		positionOfResponsibility: [
			{
				logoSrc: 'https://gdscmpstme.com/images/gdsc-logo.png',
				logoAlt: 'organization logo',
				position: 'gdsc web development lead',
				company: 'ips academy',
				date: '2023 - 2024'
			}
		]
	};
</script>

<main class="mt-20 mx-5 sm:mx-10 md:mx-28 lg:mx-40 mb-10">
	<h1 class="text-4xl font-medium">more about me</h1>
	<section class="flex flex-col items-center max-w-[900px]">
		<p class="mt-8 text-lg text-justify text-gray-700">
			{content.aboutMe.toLowerCase()}
		</p>

		<img
			src={content.imageSrc}
			alt={content.imageAlt}
			class="w-[480px] h-[280px] object-cover object-center mt-5 rounded-lg"
		/>

		<p class="mt-8 text-lg text-justify text-gray-700">
			{content.degree.toLowerCase()}
		</p>
	</section>

	<h1 class="text-4xl font-medium mt-10">work experience</h1>
	<section class="flex flex-col max-w-[900px]">
		{#each content.workExperience as experience}
			<div class="mt-5 ml-2">
				<div class="flex gap-5 items-center w-full">
					<img
						src={experience.logoSrc}
						alt={experience.logoAlt}
						class="w-10 h-10 sm:w-16 sm:h-16 rounded-full"
					/>
					<div class="flex w-full justify-between items-start">
						<div>
							<h2 class="text-lg sm:text-xl md:text-2xl font-medium">{experience.position}</h2>
							<p class="text-base sm:text-lg font-medium text-gray-700">{experience.company}</p>
						</div>
						<p class="text-xs sm:text-base md:text-lg font-medium text-gray-700">
							{experience.date}
						</p>
					</div>
				</div>

				<ul class="mt-5 ml-10 list-disc list-inside">
					{#each experience.responsibilities as responsibility}
						<li class="text-sm md:text-base text-justify font-medium text-gray-700 mt-5">
							{responsibility}
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</section>

	<h1 class="text-4xl font-medium mt-10">position of responsibility</h1>
	<section class="flex flex-col max-w-[900px]">
		{#each content.positionOfResponsibility as position}
			<div class="mt-5 ml-2">
				<div class="flex gap-5 items-center w-full">
					<img
						src={position.logoSrc}
						alt={position.logoAlt}
						class="w-10 h-10 sm:w-16 sm:h-16 rounded-full"
					/>
					<div class="flex w-full justify-between items-start">
						<div>
							<h2 class="text-base sm:text-xl md:text-2xl font-medium">{position.position}</h2>
							<p class="text-sm sm:text-lg font-medium text-gray-700">{position.company}</p>
						</div>
						<p class="text-xs sm:text-base md:text-lg font-medium text-gray-700">{position.date}</p>
					</div>
				</div>
			</div>
		{/each}
	</section>
</main>
