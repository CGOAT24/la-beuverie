import axios from "axios";
import type { User } from "$lib/types/user";

const BASE_URL = "http://127.0.0.1:8000/api/users";

export default {
	async me(): Promise<User> {
		return (await axios.get<User>(`${BASE_URL}/me`)).data;
	}
};
