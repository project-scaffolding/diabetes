define(['modules/sugar/sugar-module'], function(sugar) {
    'use strict';

    sugar.controller('SugarAdd', Sugar);

    sugar.$inject = ['sugarService'];

    function Sugar(sugarService) {
        var vm = this;
        vm.title = 'Add Data';
        vm.date = '';
        vm.sugar = 5;

        vm.save = save;

        initialize();

        function initialize() {
            var today = new Date();
            today.setMilliseconds(0);
            today.setSeconds(0);

            vm.date = today;
        }

        function save() {
            var data = {
                date: vm.date,
                sugar: parseFloat(vm.sugar)
            };

            sugarService
                .save(data)
                .then(function() {})
                .catch(function() {});
        }
    }
});
