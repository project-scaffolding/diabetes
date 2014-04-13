/* global define, describe, it, expect */
define(['notes/collections/notes-collection'], function (NotesCollection) {
    'use strict';

    describe('NotesCollection', function () {

        before(function () {
            // Create a reference for all internal suites/specs.
            this.notes = new NotesCollection();
        });

        after(function () {
            // Remove the reference.
            this.notes = null;
        });
        
        describe('creation', function () {
            it('has default values', function () {
                expect(this.notes).to.be.ok;
                expect(this.notes).to.have.length(0);
            });
            
            it('should be empty on fetch');
        });

        describe('modification', function () {
            it('has a single note');
            it('can delete a note');
            it('can create a second note');
        });
    });
});