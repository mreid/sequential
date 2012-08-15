requirejs.config({
	baseUrl: 'js',
	paths: {
		test: 'test',
		lib: 'lib'
	},
	shim: {
		// The numeric.js library needs wrapping.
		'lib/numeric': { exports: 'numeric' }
	}
});
