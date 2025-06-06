import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,

	sassOptions: {
		silenceDeprecations: ["legacy-js-api", "mixed-decls"],
	},

	compiler: {
		removeConsole:
			// Remove all console logs par explicit 'log' / 'error' calls on prod
			process.env.NODE_ENV === "production"
				? { exclude: ["log", "error"] }
				: false,
	},
};

export default nextConfig;
