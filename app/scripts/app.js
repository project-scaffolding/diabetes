define([
    'angular',
    'ngRoute',
    'ngResource',
    'ngMock',

    'dao/index',
    'domain/index',
    'modules/dashboard/index',
    'modules/bread-units-table/index'
], function (angular) {
    'use strict';

    return angular.module('diabetes', [
        // Angular Modules
        'ngRoute',
        'ngResource',
        'ngMockE2E',

        // Application Modules
        'dao',
        'domain',
        'dashboard',
        'breadUnitsTable'
    ]);
});