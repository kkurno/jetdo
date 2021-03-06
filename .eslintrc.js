module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true
	},
	extends: "eslint:recommended",
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
		Immutable: "readonly",
	},
	parserOptions: {
		ecmaVersion: 2018
	},
	rules: {
		indent: ["error", 2],
		"no-console": 1,
	},
};