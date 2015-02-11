define(['modules/sugar/sugar-controller'], function () {
    'use strict';

    describe('Sugar Controller', function () {

        beforeEach(function () {
            module('sugar');
        });

        beforeEach(function () {
            inject(function($controller, $q, $rootScope, sugarService) {
                sinon.stub(sugarService, 'fetch', fetchStub.bind(this, $q));
                this.$controller = $controller('Sugar', {});
                $rootScope.$apply();
            });
        });

        describe('title', function () {
            it('should be defined', function() {
                expect(this.$controller.title).to.be.a('string');
                expect(this.$controller.title).to.equal('Sugar');
            });
        });

        describe('chartData', function() {
            it('should be an array', function() {
                expect(this.$controller.chartData).to.be.an('array');
                expect(this.$controller.chartData[0]).to.have.keys(['key', 'values']);
            });

            it('should not be empty', function() {
                expect(this.$controller.chartData[0].values).to.have.length(5);
                expect(this.$controller.chartData[0].values[0][1]).to.equal(4.5);
                expect(this.$controller.chartData[0].values[1][1]).to.equal(5);
                expect(this.$controller.chartData[0].values[2][1]).to.equal(5.3);
                expect(this.$controller.chartData[0].values[3][1]).to.equal(9.2);
                expect(this.$controller.chartData[0].values[4][1]).to.equal(7);
            });
        });


        describe('xAxisTickFormatFunction', function() {
            it('should be function', function() {
                expect(this.$controller.xAxisTickFormatFunction).to.be.a('function');
            });

            it('should return a function', function() {
                var childFunction = this.$controller.xAxisTickFormatFunction();
                expect(childFunction).to.be.a('function');
            });

            describe('returned function', function() {
                it('should return formatted date', function() {
                    var date = new Date();
                    var childFunction = this.$controller.xAxisTickFormatFunction();
                    expect(childFunction(date)).to.equal(date.toLocaleString());
                });
            });
        });

        function fetchStub($q) {
            var deferred = $q.defer();
            deferred.resolve([
                [new Date(), 4.5],
                [new Date(), 5],
                [new Date(), 5.3],
                [new Date(), 9.2],
                [new Date(), 7]
            ]);
            return deferred.promise;
        }
    });
});