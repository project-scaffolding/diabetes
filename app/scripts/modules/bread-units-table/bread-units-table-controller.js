define(['modules/bread-units-table/bread-units-table-module'], function(breadUnitsTable) {
    'use strict';

    breadUnitsTable.controller('BreadUnitsTable', BreadUnitsTable);

    BreadUnitsTable.$inject = ['breadUnitsService'];

    function BreadUnitsTable(breadUnitsService) {
        var vm = this;
        vm.data = [];
        vm.isReady = false;
        vm.title = 'Bread Units Table';

        initialize();

        function initialize() {
            breadUnitsService
                .getData()
                .then(getDataSuccessHandler)
                .catch(getDataErrorHandler);
        }

        function getDataSuccessHandler(data) {
            vm.data = data;
            vm.isReady = true;
        }

        function getDataErrorHandler() {

        }
    }
});
