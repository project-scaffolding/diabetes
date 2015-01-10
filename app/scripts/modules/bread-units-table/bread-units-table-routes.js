define(['modules/bread-units-table/bread-units-table-module'], function(breadUnitsTable) {
    'use strict';
    return breadUnitsTable.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/bread-units-table', {
            templateUrl: 'scripts/modules/bread-units-table/bread-units-table.html',
            controller: 'BreadUnitsTable as vm'
        });
    }]);
});
