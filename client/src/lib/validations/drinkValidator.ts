import type { CreateDrinkRequest } from "$lib/types/drink";
import drinkApi from "$lib/api/drinkApi";
import {
	DRINK_ALREADY_EXISTS,
	EMPTY_ARRAY_ERROR,
	EMPTY_DIRECTIONS_ERROR,
	EMPTY_NAME_ERROR
} from "$lib/constants/errors";

export const validate = (data: CreateDrinkRequest): ValidationResponse => {
	const response: ValidationResponse = {
		isValid: true,
		errors: []
	};

	if(data.name.length === 0) {
		response.isValid = false;
		response.errors.push(EMPTY_NAME_ERROR);
	}

	if(data.directions.length === 0) {
		response.isValid = false;
		response.errors.push(EMPTY_DIRECTIONS_ERROR);
	}

	if(data.ingredients.some(x => x.length > 0)) {
		response.isValid = false;
		response.errors.push(EMPTY_ARRAY_ERROR.replace("{0}", "Ingredients"));
	}

	if(data.tags.some(x => x.length > 0)) {
		response.isValid = false;
		response.errors.push(EMPTY_ARRAY_ERROR.replace("{0}", "Tags"));
	}

	return response;
};

export const asyncValidate = async (data: CreateDrinkRequest): Promise<ValidationResponse> => {
	const drink = await drinkApi.getFromName(data.name);

	return drink ?
		{ isValid: false, errors: [DRINK_ALREADY_EXISTS] } :
		{ isValid: true, errors: []};
}