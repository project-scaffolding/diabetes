define(['dao/dao-module'], function(dao) {
    'use strict';

    dao.factory('breadUnitsDao', breadUnitsDao);

    breadUnitsDao.$injecy = ['$resource'];

    function breadUnitsDao($resource) {
        return $resource('/api/bread-units');
    }

});
