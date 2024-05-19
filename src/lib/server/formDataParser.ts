export function parse<T>(formData: FormData): T {
	const parsedData: T = {} as T;

	formData.forEach((value, key) => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		parsedData[key] = value;
	});

	return parsedData;
}
