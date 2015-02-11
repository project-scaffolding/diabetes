define(['modules/bread-units-table/bread-units-table-controller'], function () {
    'use strict';

    describe('BreadUnitsTable Controller', function () {

        beforeEach(function () {
            module('breadUnitsTable');
        });

        beforeEach(function () {
            inject(function($controller, $httpBackend, $rootScope) {
                this.$controller = $controller('BreadUnitsTable', {});
                this.$httpBackend = $httpBackend;
                $rootScope.$apply();
            });
        });

        describe('title', function () {
            it('should be defined', function() {
                expect(this.$controller.title).to.be.a('string');
                expect(this.$controller.title).to.equal('Bread Units Table');
            });
        });

        describe('isReady', function () {
            it('should be "false" by default', function() {
                expect(this.$controller.isReady).to.be.a('boolean');
                expect(this.$controller.isReady).to.equal(false);
            });
        });

    });
});