import DrinkApi from "$lib/api/drinkApi";

export const load = async () => {
	return {
		drinks: await DrinkApi.getAll()
	};
};
