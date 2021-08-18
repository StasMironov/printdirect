var webpackStream = require('webpack-stream');

module.exports = function () {
	var babel = require("gulp-babel"),
		minify = require('gulp-minify'),
		concat = require('gulp-concat');

	$.gulp.task('scripts:lib', function () {
		return $.gulp.src(['node_modules/jquery/dist/jquery.min.js', 'node_modules/svgxuse/svgxuse.js', 'node_modules/object-fit-polyfill/dist/object-fit-polyfill.js', 'node_modules/babel-polyfill/dist/polyfill.js', 'node_modules/swiper/swiper-bundle.min.js'])
			.pipe($.gp.concat('libs.js'))
			.pipe(minify())
			.pipe($.gulp.dest('build/js/'))
			.pipe($.bs.reload({
				stream: true
			}));
	});

	$.gulp.task('scripts', function () {
		return $.gulp.src(['src/dev/js/**/*.js'])
			.pipe(
				webpackStream({
					output: {
						filename: 'main.js',
					},
					module: {
						rules: [
							{
								test: /\.js$/,
								exclude: /(node_modules|bower_components)/,
								use: {
									loader: 'babel-loader',
									options: {
										presets: ['@babel/preset-env']
									}
								}
							}
						]
					}
				})
			)
			//.pipe(concat('main.js'))
			.pipe(babel())
			.pipe(minify())
			.pipe($.gulp.dest('build/js/'))
			.pipe($.bs.reload({
				stream: true
			}));
	});
}