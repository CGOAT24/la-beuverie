const load = async (event) => {
	const isAuthenticated = event.locals.user;
	return {
		isAuthenticated
	};
};
export { load };
