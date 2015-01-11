require([
    'require',
    'angular',
    'app'
], function(require, angular, app) {
    'use strict';

    /**
     * Bootstraps angular onto the window.document node
     */
    require(['domReady!'], function(document) {
        angular.bootstrap(document, [app.name]);
    });
});
