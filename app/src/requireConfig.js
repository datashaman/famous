/*globals require*/
require.config({
    shim: {

    },
    paths: {
        famous: '../lib/famous',
        requirejs: '../lib/requirejs/require',
        almond: '../lib/almond/almond',
        bacon: '../lib/bacon/dist/Bacon'
    },
    packages: [

    ]
});
require(['main']);
