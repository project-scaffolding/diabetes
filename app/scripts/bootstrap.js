/**
 * bootstraps angular onto the window.document node
 */
require([
    'require',
    'angular',
    'app'
], function(require, angular, app) {
    'use strict';

    require(['domReady!'], function (document) {
        angular.bootstrap(document, [app.name]);
    });
});