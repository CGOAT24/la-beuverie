export interface LoginUserRequest {
	email: string;
	password: string;
}

export interface RegisterUserRequest {
	name: string;
	email: string;
	password: string;
}

export interface User {
	id: string;
	name: string;
	email: string;
}
