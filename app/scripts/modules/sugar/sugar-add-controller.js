define(['modules/sugar/sugar-module'], function(sugar) {
    'use strict';

    sugar.controller('SugarAdd', Sugar);

    sugar.$inject = [];

    function Sugar() {
        var vm = this;
        vm.title = 'Add Data';

        initialize();

        function initialize() {
        }
    }
});
