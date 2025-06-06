module.exports = {
	extends: [
		// Base rules. Note: This installs and uses 'postcss-scs' out of the box
		"stylelint-config-standard-scss",

		// CSS modules syntax support
		"stylelint-config-css-modules",

		// Enforce a logical order for CSS properties
		"stylelint-config-recess-order",
	],

	plugins: [
		// Block ignored properties in CSS
		"stylelint-declaration-block-no-ignored-properties",
		"stylelint-prettier",
	],

	rules: {
		// Enable plugins
		"prettier/prettier": true,
		"plugin/declaration-block-no-ignored-properties": true,

		// Ignore select properties in the redundant longhand properties rule
		"declaration-block-no-redundant-longhand-properties": [
			true,
			{ ignoreShorthands: ["/flex/", "/grid/"] },
		],

		// Prevent redundant nesting selectors
		"scss/selector-no-redundant-nesting-selector": true,

		// Prevent kebab-case only class names
		"selector-class-pattern": null,

		// Disable operator new lines rule
		"scss/operator-no-newline-after": null,
	},
};
