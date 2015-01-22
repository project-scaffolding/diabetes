define([
    'angular',
    'ngRoute',
    'ngResource',
    'ngMock',

    'nvd3ChartDirectives',

    'dao/dao-bootstrap',
    'domain/domain-bootstrap',
    'modules/dashboard/dashboard-bootstrap',
    'modules/bread-units-table/bread-units-table-bootstrap',
    'modules/sugar/sugar-bootstrap'
], function(angular) {
    'use strict';

    return angular.module('diabetes', [
        // Angular Modules
        'ngRoute',
        'ngResource',
        'ngMockE2E',

        // 3-rd Part modules
        'nvd3ChartDirectives',

        // Application Modules
        'dao',
        'domain',
        'dashboard',
        'breadUnitsTable',
        'sugar'
    ]);
});
