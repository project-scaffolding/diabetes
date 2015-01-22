define(['modules/sugar/sugar-controller'], function () {
    'use strict';

    describe('Sugar Controller', function () {

        beforeEach(function () {
            module('sugar');
        });

        beforeEach(function () {
            inject(function($controller) {
                this.$controller = $controller('Sugar', {});
            });
        });

        describe('title', function () {
            it('should be defined', function() {
                expect(this.$controller.title).to.be.a('string');
                expect(this.$controller.title).to.equal('Sugar');
            });
        });
    });
});