// var gulp = require('gulp'),
//     concat = require('gulp-concat'),
//     uglify = require('gulp-uglify'),
//     ngAnnotate = require('gulp-ng-annotate'),
//     cleanCSS = require('gulp-clean-css'),
//     notify = require('gulp-notify'),
//     jshint = require('gulp-jshint');

// var lintOptions = {
//     strict: false,
//     maxdepth: 3,
//     undef: true,
//     unused: true,
//     evil: true,
//     globals: {
//         angular: true,
//         document: true,
//         app: true,
//         window: true,
//         MouseEvent: true,
//         Blob: true,
//         Paginator: true,
//         $: true,
//         noty: true,
//         _translateProvider: true,
//         swal: true,
//         setUnused: true,
//         Paginator: true,
//         cacheSuffix: true,
//         moment: true,
//         navigator: true,
//         Inputmask: true,
//         FileReader: true,
//         XMLHttpRequest: true,
//         FormData: true,
//         getCookie: true,
//         Sync: true,
//         WebSocket: true
//     }
// };

// gulp.task('default', ['compile']);

// gulp.task('compile', [
//     'jshint-prod',
//     'libraries',
//     'global-js',
//     'login-js',
//     'angular',
//     'global-css',
// ]);

// gulp.task('libraries', function () {
//     return gulp.src([
//         'node_modules/jquery/dist/jquery.min.js',
//         'node_modules/angular/angular.min.js',
//         'node_modules/moment/min/moment.min.js',
//         'node_modules/jqlite/jqlite.min.js',
//         'wwwroot/content/assets/global/plugins/bootstrap/dist/js/bootstrap.min.js',
//         'node_modules/oclazyload/dist/ocLazyLoad.min.js',
//         // 'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
//         'wwwroot/content/assets/plugins/ui-bootstrap-tpls-2.5.0.min.js',
//         'node_modules/angular-ui-router/release/angular-ui-router.min.js',
//         'node_modules/angular-local-storage/dist/angular-local-storage.min.js',
//         'node_modules/angular-translate/dist/angular-translate.min.js',
//         'node_modules/angular-dynamic-locale/dist/tmhDynamicLocale.min.js',
//         'node_modules/angular-base64-upload/dist/angular-base64-upload.min.js',
//         'node_modules/jquery-confirm/dist/jquery-confirm.min.js',
//         'node_modules/toastr/build/toastr.min.js',
//         'wwwroot/content/assets/plugins/ladda/spin.js',
//         'wwwroot/content/assets/plugins/ladda/ladda.js',
//         'node_modules/angular-ladda/dist/angular-ladda.min.js',
//         'node_modules/angular-bootstrap-calendar/dist/js/angular-bootstrap-calendar-tpls.min.js',
//         'node_modules/morris.js/morris.min.js',
//         'node_modules/ng-morris-js/dist/ng-morris-js.min.js',
//         'node_modules/angular-loading-bar/build/loading-bar.min.js',
//         'node_modules/angular-sanitize/angular-sanitize.min.js',
//         'node_modules/accounting/accounting.min.js',
//         'node_modules/angular-cookies/angular-cookies.min.js',
//         'node_modules/jquery-backstretch/jquery.backstretch.min.js',
//         'wwwroot/content/assets/global/plugins/ui-utils/ui-utils.min.js',
//         'node_modules/jstree/dist/jstree.js',
//         'node_modules/ng-js-tree/dist/ngJsTree.js',
//         'wwwroot/content/assets/global/plugins/icheck/icheck.js',
//         'node_modules/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
//         'wwwroot/content/assets/global/plugins/modernizr/modernizr-2.6.2-respond-1.1.0.min.js',
//         'node_modules/jquery.noty.packaged.js/jquery.noty.packaged.min.js',
//         'node_modules/sweetalert2/dist/sweetalert2.all.min.js',
//         'node_modules/summernote/dist/summernote.min.js',
//         'node_modules/angular-summernote/dist/angular-summernote.min.js',
//         'node_modules/raphael/raphael.min.js',
//         'node_modules/morris.js/morris.js',
//         'node_modules/ng-morris-js/dist/ng-morris-js.min.js',
//         'node_modules/angular-base64-upload/dist/angular-base64-upload.min.js',
//         'node_modules/angular-tablesort/js/angular-tablesort.js'
//     ])
//         .pipe(concat('libraries.min.js'))
//         .pipe(gulp.dest('wwwroot/content/dist'))
//         .pipe(notify("JS!"));
// });

// gulp.task('global-js', function () {

//     return gulp.src([
//         'wwwroot/content/assets/global/plugins/jquery-ui/jquery-ui.min.js',
//         'node_modules/gsap/umd/jquery.gsap.js',
//         'node_modules/gsap/umd/TweenMax.js',
//         'node_modules/tether/dist/js/tether.min.js',
//         'node_modules/jquery-cookies/src/js.cookie.js',
//         'node_modules/block-ui/jquery.blockUI.js',
//         'wwwroot/content/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js',
//         'wwwroot/content/assets/global/plugins/mcustom-scrollbar/jquery.mCustomScrollbar.concat.min.js',
//         'node_modules/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js',
//         'node_modules/jquery-sparkline/jquery.sparkline.min.js',
//         'wwwroot/content/assets/global/plugins/bootstrap-loading/lada.min.js',
//         'node_modules/select2/dist/js/select2.full.min.js',
//         'wwwroot/content/assets/global/plugins/mask/inputmask.min.js',
//         'wwwroot/content/assets/global/plugins/mask/inputmask.numeric.extensions.min.js',
//         'wwwroot/content/assets/global/js/plugins.js',
//         'wwwroot/content/assets/global/js/application.js',
//         'wwwroot/content/assets/global/js/theme.js',
//         'wwwroot/content/assets/plugins/colorpicker/spectrum.min.js'
//     ])
//         .pipe(concat('global.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('wwwroot/content/dist'))
//         .pipe(notify('global-js is minified!'));

// });

// gulp.task('login-js', function () {

//     return gulp.src([
//         'node_modules/jquery/dist/jquery.min.js',
//         'node_modules/gsap/umd/jquery.gsap.js',
//         'node_modules/tether/dist/js/tether.min.js',
//         'wwwroot/content/assets/global/plugins/bootstrap/dist/js/bootstrap.min.js',
//         'node_modules/jquery-backstretch/jquery.backstretch.min.js'
//     ])
//         .pipe(concat('login.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('wwwroot/content/dist'))
//         .pipe(notify('login-js is minified!'));

// });

// gulp.task('global-css', function () {

//     return gulp.src([
//         'wwwroot/content/assets/global/plugins/bootstrap/dist/css/bootstrap.css',
//         'node_modules/jquery-confirm/dist/jquery-confirm.min.css',
//         'wwwroot/content/assets/global/plugins/mcustom-scrollbar/mcustom_scrollbar.min.css',
//         'wwwroot/content/assets/global/plugins/animation-css/animate.min.css',
//         'wwwroot/content/assets/global/css/icons/font-awesome/font-awesome.css',
//         'wwwroot/content/assets/global/css/icons/line-icons/simple-line-icons.css',
//         'node_modules/select2/dist/css/select2.css',
//         'wwwroot/content/assets/global/plugins/slick/slick.css',
//         'wwwroot/content/assets/global/css/icons/rounded/style.css',
//         'wwwroot/content/assets/global/css/icons/octicons/octicons.css',
//         'wwwroot/content/assets/global/css/icons/weather/css/weather-icons.min.css',
//         'wwwroot/content/assets/global/plugins/bootstrap-tags-input/bootstrap-tagsinput.css',
//         'wwwroot/content/assets/global/plugins/bootstrap-editable/css/bootstrap-editable.css',
//         'wwwroot/content/assets/global/plugins/bootstrap-loading/lada.min.css',
//         'wwwroot/content/assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker.min.css',
//         'wwwroot/content/assets/global/plugins/prettify/prettify.css',
//         'wwwroot/content/assets/global/css/style.css',
//         'wwwroot/content/assets/global/css/theme.css',
//         'wwwroot/content/assets/global/css/ui.css',
//         'wwwroot/content/assets/global/css/step-form-wizard.css',
//         'wwwroot/content/assets/global/plugins/icheck/flat/_all.css',
//         'wwwroot/content/assets/admin/layout4/css/layout.css',
//         'wwwroot/content/assets/global/plugins/dtables/datatables.min.css',
//         'node_modules/ladda/dist/ladda-themeless.min.css',
//         'node_modules/sweetalert2/dist/sweetalert2.min.css',
//         'wwwroot/content/assets/global/css/functionbar.css',
//         'node_modules/summernote/dist/summernote.css',
//         'node_modules/morris.js/morris.css',
//         'wwwroot/content/assets/custom/customStyles.css',
//         'wwwroot/content/assets/plugins/colorpicker/spectrum.css'
//     ])
//         .pipe(concat('global.min.css'))
//         .pipe(cleanCSS())
//         .pipe(gulp.dest('wwwroot/content/dist'))
//         .pipe(notify('global-css is minified!'));

// });

// gulp.task('jshint-dev', function () {

//     return gulp.src([
//         'Scripts/app.js',
//         'Scripts/routes.js',
//         'Scripts/*/*.js',
//         'Scripts/*/*/*.js',
//         'Scripts/*/*/*/*.js',
//         'Scripts/*/*/*/*/*.js',
//         'Scripts/data/*'
//     ])
//         .pipe(jshint(lintOptions))
//         .pipe(jshint.reporter('default'))

// });

// gulp.task('jshint-prod', function () {

//     return gulp.src([
//         'Scripts/app.js',
//         'Scripts/routes.js',
//         'Scripts/*/*.js',
//         'Scripts/*/*/*.js',
//         'Scripts/*/*/*/*.js',
//         'Scripts/*/*/*/*/*.js',
//         'Scripts/data/*'
//     ])
//         .pipe(jshint(lintOptions))
//         .pipe(jshint.reporter('fail'))

// });

// gulp.task('angular', function () {

//     return gulp.src([
//         'Scripts/app.js',
//         'Scripts/routes.js',
//         'Scripts/*/*.js',
//         'Scripts/*/*/*.js',
//         'Scripts/*/*/*/*.js',
//         'Scripts/*/*/*/*/*.js',
//         'Scripts/data/*',
//         'node_modules/js-sha256/build/sha256.min.js'
//     ])
//         .pipe(concat('angular.min.js'))
//         .pipe(ngAnnotate())
//         .pipe(uglify())
//         .pipe(gulp.dest('wwwroot/content/dist'))
//         .pipe(notify("Angular Scripts Compiled!"));

// });

// gulp.task('watch', function () {

//     console.log('\n\n The Force will be with you. Always. Obi-Wan Kenobi\n\n');
//     gulp
//         .watch([
//         'Scripts/app.js',
//         'Scripts/routes.js',
//         'Scripts/*/*.js',
//         'Scripts/*/*/*.js',
//         'Scripts/*/*/*/*.js',
//         'Scripts/*/*/*/*/*.js'
//     ], ['angular']);


//     gulp
//         .watch([
//         'Scripts/app.js',
//         'Scripts/routes.js',
//         'Scripts/*/*.js',
//         'Scripts/*/*/*.js',
//         'Scripts/*/*/*/*.js',
//         'Scripts/*/*/*/*/*.js'
//     ], ['jshint-dev']);

//     gulp.watch([
//         'wwwroot/content/assets/global/css/*.css',
//         'wwwroot/content/assets/custom/*.css'
//     ], ['global-css']);

// });
