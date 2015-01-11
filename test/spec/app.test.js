/*global describe, beforeEach, it, expect */
/*jshint expr: true */
// (function () {
//     "use strict";

//     describe("Diabetes Module:", function() {

//         var module;
//         beforeEach(function() {
//             module = angular.module("diabetes");
//         });

//         it("should be registered", function() {
//             expect(module).not.to.equal(null);
//         });

//         describe.skip("Dependencies:", function() {

//             var deps;
//             var hasModule = function (m) {
//                 return deps.indexOf(m) >= 0;
//             };
//             beforeEach(function() {
//                 deps = module.value("appName").requires;
//             });

//             //you can also test the module's dependencies
//             it("should have 'ngResource' as a dependency", function() {
//                 expect(hasModule("ngResource")).to.equal(true);
//             });

//             it("should have 'ngRoute' as a dependency", function() {
//                 expect(hasModule("ngRoute")).to.equal(true);
//             });

//             it("should have 'nvd3ChartDirectives' as a dependency", function() {
//                 expect(hasModule("nvd3ChartDirectives")).to.equal(true);
//             });

//             it("should have 'mm.foundation' as a dependency", function() {
//                 expect(hasModule("mm.foundation")).to.equal(true);
//             });

//             it("should have 'mm.foundation.tpls' as a dependency", function() {
//                 expect(hasModule("mm.foundation.tpls")).to.equal(true);
//             });

//             it("should have 'xeditable' as a dependency", function() {
//                 expect(hasModule("xeditable")).to.equal(true);
//             });

//             it("should have 'ngIdle' as a dependency", function() {
//                 expect(hasModule("ngIdle")).to.equal(true);
//             });
//         });
//     });

// }).call(this);


define(['angular'], function (angular) {
    'use strict';

    describe("Diabetes Module:", function() {
        var module;
        beforeEach(function() {
            module = angular.module("diabetes");
        });

        it("should be registered", function() {
            expect(module).not.to.equal(null);
        });
    });
});