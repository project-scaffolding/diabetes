/* global define, describe, beforeEach, it, inject, expect */
define(['modules/dashboard/dashboard-controller'], function () {
    'use strict';

    describe('Dashboard Controller', function () {

        beforeEach(function () {
            module('diabetes');
        });

        beforeEach(function () {
            inject(function($controller) {
                this.$controller = $controller('Dashboard', {});
            });
        });

        describe('title', function () {
            it('should be defined', function() {
                expect(this.$controller.title).to.be.a('string');
                expect(this.$controller.title).to.equal('Dashboard');
            });
        });

    });
});