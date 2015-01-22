'use strict';

require.config({
    baseUrl: 'scripts/',
    paths: {
        domReady: '../bower_components/requirejs-domready/domReady',
        angular: '../bower_components/angular/angular',
        ngRoute: '../bower_components/angular-route/angular-route',
        ngResource: '../bower_components/angular-resource/angular-resource',
        ngMock: '../bower_components/angular-mocks/angular-mocks',
        d3: '../bower_components/d3/d3',
        nvd3: '../bower_components/nvd3/nv.d3',
        nvd3ChartDirectives: '../bower_components/angularjs-nvd3-directives/dist/angularjs-nvd3-directives'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        ngRoute: ['angular'],
        ngResource: ['angular'],
        ngMock: ['angular'],
        d3: {
            exports: 'd3'
        },
        nvd3: ['d3'],
        nvd3ChartDirectives: ['d3', 'nvd3']
    },
    priority: ['angular', 'd3'],
    deps: ['./bootstrap']
});
