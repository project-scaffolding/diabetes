/*global define*/
define(function () {
    'use strict';

    var StaticPagesController,
        HomeView = function () {},
        HelpView = function () {};

    StaticPagesController = function () {};

    StaticPagesController.prototype = {

        home: function () {
            this.view = new HomeView();
        },

        help: function () {
            this.view = new HelpView();
        }

    };

    return StaticPagesController;

});