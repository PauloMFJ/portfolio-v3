module.exports = {
	// Match project node version
	settings: { node: { version: "20" } },

	// Support TypeScript files
	parser: "@typescript-eslint/parser",

	// Extend / inherit rules from other configs
	extends: ["next", "next/core-web-vitals", "prettier"],
	plugins: [
		"unused-imports",
		"simple-import-sort",
		"import",
		"@typescript-eslint",
	],

	rules: {
		// Remove unused imports
		"no-unused-vars": "off",
		"unused-imports/no-unused-imports": "error",

		// Makes sure all imports are at the top of the file
		"import/first": "error",

		// Makes sure there's a newline after the imports
		"import/newline-after-import": "error",

		// Merge import statements of the same file
		"import/no-duplicates": "error",

		// Prevent console logs from being committed
		"no-console": ["error", { allow: ["warn", "error"] }],

		// Disallow the use of undeclared variables
		"no-undef": "error",

		// Prevent default exports (favor named exports)
		"import/no-default-export": "error",

		// Block 'export default' statements without a name
		"import/no-anonymous-default-export": "off",

		// Ensure non-exhaustive dependencies errors (and isn't just a warning)
		"react-hooks/exhaustive-deps": "error",

		// Auto fix 'import' to 'import type' errors
		"@typescript-eslint/consistent-type-imports": "error",

		// Enforce 'type' imports over 'interface' imports
		"@typescript-eslint/consistent-type-definitions": ["error", "type"],

		// Block relative imports
		"no-restricted-imports": [
			"error",
			{
				patterns: [
					{ group: ["../"], message: "Relative imports are not allowed." },
				],
			},
		],

		// Turn on imports ordering with custom groups
		"simple-import-sort/imports": [
			"error",
			{
				groups: [
					// Match 'react', 'next' and external imports
					["^react", "^next", "^@?\\w"],
					// Match 'public' and all absolute imports that begin with '~'
					["^public", "~.*"],
					// Match all relative imports that begin with '.'
					["^\\."],
				],
			},
		],

		// Only apply alt text image rule to 'img' tags
		"jsx-a11y/alt-text": [2, { elements: ["img"] }],
	},

	overrides: [
		// Only enforce 'import/no-default-export' outside of the 'app' directory
		{
			files: ["src/app/**/*", "next.config.ts"],
			rules: { "import/no-default-export": "off" },
		},
	],
};
