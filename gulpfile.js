/**
 * Created by smata on 18-Feb-16.
 */
var gulp = require('gulp');
var sync = require('run-sequence');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var gutil = require('gulp-util');
var browserSync = require('browser-sync').create();
var html = require('html-browserify');
var css = require('browserify-css');
var tpl     = require('gulp-template');
var rename  = require('gulp-rename');
var yargs   = require('yargs').argv;
var path = require('path');


var serving = false;
var config = {
	paths: {
		index: './src/index.html',
		build: './build',
		entry: './src/app/app.module.js',
		bundle: 'app.bundle.js',
		app: './src/**/*.{js,html,css}',
		watch: './build/*.*',
		templates: './templates/component/*.**'
	}
};


var opts = {
	entries: [config.paths.entry],
	transform: [html, css],
	debug: true,
	cache: {},
	packageCache: {}
};

var b = watchify(browserify(opts));

b.on('update', bundle);
b.on('log', gutil.log);
b.on('end', function () {
	if (serving)
		browserSync.reload();
});

gulp.task('build-js', bundle);

function bundle() {
	var stream = b.bundle()
		.on('error', gutil.log.bind(gutil, "Browserify Error"))
		.pipe(source(config.paths.bundle))
		.pipe(gulp.dest(config.paths.build));

	stream.on('end', function () {
		if (serving)
			browserSync.reload();
	});
}

gulp.task('copy-html', function () {
	return gulp.src(config.paths.index)
		.pipe(gulp.dest(config.paths.build))
});

gulp.task('watch-js', function () {
	gulp.watch(config.paths.watch, ['build-js'])
});

gulp.task('serve', function () {
	serving = true;
	browserSync.init({
		server: {
			baseDir: './build'
		}
	});
});

var resolveToComponents = function(glob){
	glob = glob || '';
	return path.join('src', 'app/components', glob); // app/components/{glob}
};

gulp.task('template', function () {
	var cap = function(val){
		return val.charAt(0).toUpperCase() + val.slice(1);
	};

	var name = yargs.name;
	var parentPath = yargs.parent || '';
	var destPath = path.join(resolveToComponents(), parentPath, name);

	return gulp.src(config.paths.templates)
		.pipe(tpl({
			name: name,
			upCaseName: cap(name)
		}))
		.pipe(rename(function(path){
			path.basename = path.basename.replace('component', name);
		}))
		.pipe(gulp.dest(destPath));
});

gulp.task('default', function () {
	sync(['copy-html', 'build-js', 'serve'])
});