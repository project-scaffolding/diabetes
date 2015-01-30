define(['modules/sugar/sugar-controller'], function () {
    'use strict';

    describe('SugarAdd Controller', function () {

        beforeEach(function () {
            module('sugar');
        });

        beforeEach(function () {
            inject(function($controller) {
                this.$controller = $controller('SugarAdd', {});
            });
        });

        describe('title', function () {
            it('should be defined', function() {
                expect(this.$controller.title).to.be.a('string');
                expect(this.$controller.title).to.equal('Add Data');
            });
        });

        describe('date', function () {
            it('should be date object', function() {
                expect(this.$controller.date).to.be.a('date');
            });
        });

        describe('sugar', function () {
            it('should be defined', function() {
                expect(this.$controller.sugar).to.be.a('number');
                expect(this.$controller.sugar).to.equal(5);
            });
        });

        describe('save', function () {
            
        });


    });
});