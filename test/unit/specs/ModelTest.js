var expect = chai.expect;

describe('Model', function() {
    it('doit être possible d\'ajouter puis récupérer un élément', function() {
        // Given
        var model = new Model();

        // When
        model.addElement("nouvel élément");

        // Then
        expect(model.count()).to.equal(1);
        expect(model.findAll()[0]).to.equal("nouvel élément");
    });
});