/* global define, describe, it, expect */
define(['jquery', 'notes/models/note-model', 'notes/views/note-view'], function ($, NoteModel, NoteView) {
    'use strict';

    describe('NoteView', function () {
        
        before(function () {
            // Create test fixture.
            this.$fixture = $('<div id="note-view-fixture"></div>');
        });

        beforeEach(function () {
            // Empty out and rebind the fixture for each run.
            this.$fixture.empty().appendTo($("#fixtures"));

            // New default model and view for each test.
            //
            // Creation calls `render()`, so in tests we have an
            // *already rendered* view.
            this.view = new NoteView({
                el: this.$fixture,
                model: new NoteModel()
            });
        });

        afterEach(function () {
            // Destroying the model also destroys the view.
            // this.view.model.destroy();
        });

        after(function () {
            // Remove all subfixtures after test suite finishes.
            $('#fixtures').empty();
        });
        

        it('can render an empty note');
        it('can render more complicated markdown');
    });
});