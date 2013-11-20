var expect = chai.expect;
var Model = require('../../../src/js/Model');
var Store = require('../../../src/js/Store');
var sinon = require('sinon');

describe('Model', function() {

    it('doit être possible d\'ajouter puis récupérer un élément', function() {
        // Given
        var store = new Store();
        var model = new Model(store);
        var mock = sinon.mock(store);
        mock.expects('save').once();

        // When
        model.addElement("nouvel élément");

        // Then
        expect(mock.verify()).to.be.true;
    });

    it('doit être possible de récupérer les éléments déjà existant', function() {
        // Given
        var store = new Store();
        var model = new Model(store);
        var mock = sinon.mock(store);
        var expectedElements = [
            'toto',
            'tata',
            'titi'
        ];

        mock.expects('findAll').once().returns(expectedElements.slice(0));

        // When
        model.init();
        var allElements = model.findAll();

        // Then
        expect(mock.verify()).to.be.true;
        expect(allElements.length).to.equal(3);
        expect(allElements).to.deep.equal(expectedElements);
    });
});