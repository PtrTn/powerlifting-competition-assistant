let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.disableNotifications();

mix.webpackConfig({
    resolve: {
        alias: {
            jquery: "jquery/src/jquery"
        }
    }
});

mix
    .js('resources/assets/js/app.js', 'public/js')
    .js('resources/assets/js/wedstrijd.js', 'public/js')
    .js('resources/assets/js/organisatie.js', 'public/js')
    .extract(['jquery', 'bootstrap-editable'])
    .sass('resources/assets/sass/app.scss', 'public/css');
