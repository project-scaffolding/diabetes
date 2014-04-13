/*global define*/
define(function (require) {
    'use strict';

    var NotesCollection,
        Backbone = require('backbone'),
        NoteModel= require('notes/models/note-model');

    NotesCollection = Backbone.Collection.extend({

        model: NoteModel

    });

    return NotesCollection;

});