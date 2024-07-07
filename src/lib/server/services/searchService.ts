import prisma from '$lib/prisma';

//source: https://github.com/prisma/prisma/issues/7986
const fuzzySearch = (field: string, search?: string) => {
	if (!search || !search.length) return undefined;

	const words = search.replace(/\s+/g, ' ').trim().split(' ');
	const startsWith = `%${words[0]}%`;
	const endsWith = words.length > 1 ? `%${words[words.length - 1]}%` : undefined;
	const middleWords = words.filter((word, i) => i !== 0 && i !== words.length - 1).join(' <-> ');

	return {
		AND: [
			{
				[field]: middleWords.length
					? {
							search: middleWords
						}
					: {}
			},
			{
				[field]: startsWith.length
					? {
							startsWith,
							mode: 'insensitive'
						}
					: {}
			},
			{
				[field]: endsWith?.length
					? {
							endsWith,
							mode: 'insensitive'
						}
					: {}
			}
		]
	};
};

export const searchService = {
	search: async (text: string): Promise<{ id: string; name: string }[]> => {
		return prisma.drink.findMany({
			where: {
				...fuzzySearch('name', text)
			}
		});
	},
	filter: async (tags: string[]): Promise<{ id: string; name: string }[]> => {
		return prisma.drink.findMany({
			where: {
				tags: {
					hasSome: tags
				}
			}
		});
	}
};
