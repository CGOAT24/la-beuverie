import axios from "axios";
import type { LoginUserRequest, RegisterUserRequest } from '$lib/types/user';

const BASE_URL = "http://127.0.0.1:8000/api/auth";

export default {
	async login(request: LoginUserRequest) {
		return (await axios.post(`${BASE_URL}/login`, request)).data;
	},
	async register(request: RegisterUserRequest) {
		return (await axios.post(`${BASE_URL}/register`, request)).data;
	},
	async logout() {
		return (await axios.get(`${BASE_URL}/logout`)).data;
	}
}