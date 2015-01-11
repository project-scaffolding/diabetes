define(['domain/domain-module'], function(domain) {
    'use strict';

    domain.service('breadUnitsService', breadUnitsService);

    breadUnitsService.$injecy = ['$q', 'breadUnitsDao'];

    function breadUnitsService($q, breadUnitsDao) {
        var service = {
            getData: getData
        };

        return service;

        function getData() {
            // var defer = $q.defer();

            // setTimeout(function() {
            //     breadUnitsDao.query().$promise.then(defer.resolve);
            // }, 5000);
            // return defer.promise;
            return breadUnitsDao.query().$promise;
        }
    }

});
