/*global mocha*/
'use strict';
require.config({
    baseUrl: 'scripts/',
    paths: {
        domReady: '../bower_components/requirejs-domready/domReady',
        angular: '../bower_components/angular/angular',
        ngRoute: '../bower_components/angular-route/angular-route',
        ngResource: '../bower_components/angular-resource/angular-resource',
        ngMock: '../bower_components/angular-mocks/angular-mocks'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        ngRoute: ['angular'],
        ngResource: ['angular'],
        ngMock: ['angular']
    },
    priority: ['angular'],
    deps: ['./bootstrap']
});

require.config({
    baseUrl: '../app/scripts',
    paths: {
        chai: '../../app/bower_components/chai/chai',
        sinon: '../../app/bower_components/sinon/lib/sinon'
    }
});

require([
    'chai',
    'angular',
    'ngRoute',
    'ngResource'
], function (chai) {
    chai.should();
    window.expect = chai.expect;
    mocha.setup('bdd');

    require([
        'spec/specs.js'
    ], function () {
        mocha.run();
    });
});