/*global define*/
define(function (require) {
    'use strict';

    var NoteModel,
        Backbone = require('backbone');

    NoteModel = Backbone.Model.extend({

        defaults: {
            title: '',
            text: '*Edit your note!*',
            createdAt: new Date()
        },

        getTitle: function () {
            return this.get('title');
        },

        setTitle: function (value, options) {
            this.set('title', value, options);
        },

        getText: function () {
            return this.get('text');
        },

        setText: function (value, options) {
            this.set('text', value, options);
        },

        getCreatedAt: function () {
            return this.get('createdAt');
        },

        setCreatedAt: function (value, options) {
            this.set('createdAt', value, options);
        }

    });

    return NoteModel;

});