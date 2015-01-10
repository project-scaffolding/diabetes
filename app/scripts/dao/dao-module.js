define([
    'angular',
    'ngResource',
    'ngMock'
], function (angular) {
    'use strict';

    return angular.module('dao', [
        'ngResource',
        'ngMockE2E'
    ]);
});
