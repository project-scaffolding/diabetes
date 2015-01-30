define(['modules/sugar/sugar-module'], function(sugar) {
    'use strict';

    sugar.controller('Sugar', Sugar);

    sugar.$inject = ['sugarService'];

    function Sugar(sugarService) {
        var vm = this;
        vm.title = 'Sugar';
        vm.chartData = [];
        vm.xAxisTickFormatFunction = xAxisTickFormatFunction;

        initialize();

        function initialize() {
            sugarService
                .fetch()
                .then(fetchSuccess)
                .catch(function() {});
        }

        function fetchSuccess(data) {
            vm.chartData = [{
                key: 'Your Sugar',
                values: data
            }];
        }

        

        function xAxisTickFormatFunction() {
            return function(d) {
                var date = new Date(d);
                return date.toLocaleString();
            };
        }
    }
});
