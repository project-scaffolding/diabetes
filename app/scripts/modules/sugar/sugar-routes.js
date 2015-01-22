define(['modules/sugar/sugar-module'], function(sugar) {
    'use strict';
    return sugar.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/sugar', {
            templateUrl: 'scripts/modules/sugar/sugar.html',
            controller: 'Sugar as vm'
        });
        $routeProvider.when('/sugar/add', {
            templateUrl: 'scripts/modules/sugar/sugar-add.html',
            controller: 'SugarAdd as vm'
        });
    }]);
});
