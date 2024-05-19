function parse(formData) {
	const parsedData = {};
	formData.forEach((value, key) => {
		parsedData[key] = value;
	});
	return parsedData;
}
export { parse as p };
