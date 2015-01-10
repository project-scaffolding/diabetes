define(['modules/dashboard/dashboard-module'], function(dashboard) {
    'use strict';
    return dashboard.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/dashboard', {
            templateUrl: 'scripts/modules/dashboard/dashboard.html',
            controller: 'Dashboard as vm'
        });

        $routeProvider.otherwise({
            redirectTo: '/dashboard'
        });
    }]);
});
