var expect = chai.expect;

describe('Store api', function() {
    it('Store constructeur', function() {
        var dbName = 'todos-test';
        // Given
        expect(localStorage[dbName]).to.be.undefined;

        // When
        var store = new Store(dbName);

        // Then
        var expectedDb = {
            todos: []
        };
        expect(localStorage[dbName]).to.deep.equal(expectedDb);
    });

    it('Store.save', function() {

    });

    it('Store.find', function() {

    });

    it('Store.findAll', function() {

    });

    it('Store.remove', function() {

    });

    it('Store.drop', function() {

    });
});