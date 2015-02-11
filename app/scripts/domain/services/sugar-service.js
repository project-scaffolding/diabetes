define(['domain/domain-module'], function(domain) {
    'use strict';

    domain.service('sugarService', sugarService);

    sugarService.$injecy = ['$q'];

    /**
     * @ngdoc service
     * @name diabetes.domain.service:sugarService
     * @function
     *
     * @description
     * Application for diabetics to see sugar points on chhart and table.
     */
    function sugarService($q) {
        var storage = [];
        var service = {
            fetch: fetch,
            save: save
        };

        return service;

        /**
         * @ngdoc function
         * @name fetch
         * @module domain
         * @kind function
         */
        function fetch() {
            var defer = $q.defer();
            var dataPoints = storage.map(function(model) {
                return [model.date, model.sugar];
            });
            defer.resolve(dataPoints);
            return defer.promise;
        }

        function save(dataPoint) {
            // TODO: validate;
            var defer = $q.defer();
            storage.push(dataPoint);

            defer.resolve(storage);
            return defer.promise;
        }
    }

});
