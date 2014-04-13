/* global define, describe, it, expect */
define(['notes/models/note-model'], function (NoteModel) {
    'use strict';

    describe('NoteModel', function () {
        it('has default values', function() {
            // Create empty note model.
            var model = new NoteModel();

            expect(model).to.be.ok;
            expect(model.get('title')).to.equal('');
            expect(model.get('text')).to.equal('*Edit your note!*');
            expect(model.get('createdAt')).to.be.a('Date');
        });

        it('sets passed attributes', function () {
            var model = new NoteModel({
                title: 'Grocery List',
                text: '* Milk\n* Eggs\n*Coffee'
            });

            expect(model.get('title')).to.equal('Grocery List');
            expect(model.get('text')).to.equal('* Milk\n* Eggs\n*Coffee');
        });

        describe('Getters and Setters', function () {
            it('getTitle', function() {
                // Create empty note model.
                var model = new NoteModel();
                expect(model.getTitle()).to.equal('');

                model.set('title', 'Grocery List');
                expect(model.getTitle()).to.equal('Grocery List');
            });

            it('setTitle', function() {
                // Create empty note model.
                var model = new NoteModel();

                model.setTitle('Grocery List');
                expect(model.get('title')).to.equal('Grocery List');
            });

            it('getText', function() {
                // Create empty note model.
                var model = new NoteModel();
                expect(model.getText()).to.equal('*Edit your note!*');

                model.set('text', '* Milk\n* Eggs\n*Coffee');
                expect(model.getText()).to.equal('* Milk\n* Eggs\n*Coffee');
            });

            it('setText', function() {
                // Create empty note model.
                var model = new NoteModel();

                model.setText('* Milk\n* Eggs\n*Coffee');
                expect(model.get('text')).to.equal('* Milk\n* Eggs\n*Coffee');
            });

            it('getCreatedAt', function() {
                // Create empty note model.
                var model = new NoteModel();
                expect(model.getCreatedAt()).to.be.a('Date');
            });

            it('setCreatedAt', function() {
                // Create empty note model.
                var model = new NoteModel();
                var date = new Date();

                model.setCreatedAt(date);
                expect(model.get('createdAt').toISOString()).to.equal(date.toISOString());
            });
        });
    });
});