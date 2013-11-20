var expect = chai.expect;

var dbName = 'todos-test';

describe('Store api', function() {
    beforeEach(function() {
        delete localStorage[dbName];
    });

    it('Store constructeur', function() {
        // Given
        expect(localStorage[dbName]).to.be.undefined;

        // When
        var store = new Store(dbName);

        // Then
        var expectedDb = {
            todos: []
        };
        expect(JSON.parse(localStorage[dbName])).to.deep.equal(expectedDb);
    });

    it('Store.save avec un nouvel élément', function() {
        // Given
        var store = new Store(dbName);

        // When
        store.save({
            title: 'un élément',
            completed: 0
        });

        // Then
        var expectedDatas = {
            todos: [
                {
                    title: 'un élément',
                    completed: 0
                }
            ]
        };
        var actualData = JSON.parse(localStorage[dbName]);

        expect(actualData).to.deep.equal(expectedDatas);
    });

    it("Store.save - mise a jour d'un élément", function() {

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