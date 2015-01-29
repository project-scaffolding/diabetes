define(['domain/domain-module'], function(domain) {
    'use strict';

    domain.service('breadUnitsService', breadUnitsService);

    breadUnitsService.$injecy = ['breadUnitsDao'];

    function breadUnitsService(breadUnitsDao) {
        var service = {
            getData: getData
        };

        return service;

        function getData() {
            return breadUnitsDao.query().$promise;
        }
    }

});
