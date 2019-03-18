module.exports = function (grunt) {
	
    grunt.config.set('mocha_istanbul', {
		coverage: {
			src: 'test/', // the folder, not the files
			options: {
				coverageFolder: 'coverage',
				mask: 'test.js',
				root: '.'
				}
			}
		});
        grunt.loadNpmTasks('grunt-mocha-istanbul');
        
        grunt.registerTask('test', [
            'mocha_istanbul:coverage'
        ]);
        
};



