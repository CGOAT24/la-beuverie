import axios from "axios";
import type { CreateDrinkRequest, Drink, UpdateDrinkRequest } from "$lib/types/drink";

const BASE_URL = `http://127.0.0.1:8000/api/drinks`;

export default {
	async getAll(): Promise<Drink[]> {
		return (await axios.get<Drink[]>(BASE_URL)).data;
	},
	async get(id: string): Promise<Drink> {
		return (await axios.get<Drink>(`${BASE_URL}/${id}`)).data;
	},
	async create(request: CreateDrinkRequest): Promise<Drink> {
		return (await axios.post<Drink>(`${BASE_URL}`, request)).data;
	},
	async update(request: UpdateDrinkRequest): Promise<Drink> {
		return (await axios.put<Drink>(`${BASE_URL}/${request.id}`)).data;
	},
	async delete(id: string): Promise<void> {
		return (await axios.delete(`${BASE_URL}/${id}`)).data;
	}
};
