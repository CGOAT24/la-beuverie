export const getColor = (): string => {
	const colors: string[] = ['#69D2E7', '#7FBC8C', '#E3A018', '#FF6B6B', '#FF69B4', '#9723C9'];
	const rand = Math.floor(Math.random() * colors.length);
	return colors[rand];
};
