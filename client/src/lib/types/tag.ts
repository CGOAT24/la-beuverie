import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/tags";

export default {
	async getAll(): Promise<string[]> {
		return (await axios.get<string[]>(BASE_URL)).data;
	}
};
