export const request = {
	get: async (url: string | URL): Promise<App.Response> => {
		const result = await fetch(url, {
			method: 'GET'
		});
		return await result.json();
	},
	post: async (url: string | URL, body: unknown): Promise<App.Response> => {
		const result = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		});
		return await result.json();
	},
	put: async (url: string | URL, body: unknown): Promise<App.Response> => {
		const result = await fetch(url, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		});
		return await result.json();
	},
	delete: async (url: string | URL): Promise<App.Response> => {
		const result = await fetch(url, {
			method: 'DELETE'
		});
		return await result.json();
	}
};

export const createResponse = (response: App.Response): Response => {
	return Response.json(response);
};
