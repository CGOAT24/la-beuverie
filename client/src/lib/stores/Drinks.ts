import { type Writable, writable } from "svelte/store";
import type { Drink } from "$lib/types/drink";
import drinkApi from "$lib/api/drinkApi";

export const drinks: Writable<Drink[]> = writable(await drinkApi.getAll());
