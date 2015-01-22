define(['modules/sugar/sugar-module'], function(sugar) {
    'use strict';

    sugar.controller('Sugar', Sugar);

    sugar.$inject = [];

    function Sugar() {
        var vm = this;
        vm.title = 'Sugar';
        vm.chartData = [];

        initialize();

        function initialize() {
            vm.chartData = getData();
        }

        function getData() {
            return [{
                key: 'Your Sugar',
                values: [
                    [3, 8.0],
                    [9, 5.5],
                    [12, 2.7],
                    [15, 6.1],
                    [19, 5.8],
                    [22, 6.0]
                ]
            }];
        }
    }
});
