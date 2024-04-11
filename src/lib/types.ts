export type Categories = 'coding' | 'thoughts' | 'productivity' | 'stories' | 'latest';

export type Post = {
	title: string;
	slug: string;
	subtitle: string;
	date: string;
	categories: Categories[];
	published: boolean;
	image: string;
};
