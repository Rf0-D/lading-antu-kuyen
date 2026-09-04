const BASE_PATH =
	process.env.NODE_ENV === "production"
		? "/antu-kuyen-landing"
		: "";

export const assetPath = (path: string) => {
	const normalizedPath = path.startsWith("/")
		? path
		: `/${path}`;

	return `${BASE_PATH}${normalizedPath}`;
};