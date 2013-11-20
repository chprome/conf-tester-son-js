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
        expect(actualData.todos).to.have.length(expectedDatas.todos.length);
        expect(actualData.todos[0].title).to.equal(expectedDatas.todos[0].title);
        expect(actualData.todos[0].completed).to.equal(expectedDatas.todos[0].completed);
    });

    it("Store.save - mise a jour d'un élément", function() {
        // Given
        var store = new Store(dbName);
        var todo = store.save({
            title: 'un élément',
            completed: 0
        });

        // When
        store.save(todo.id, {
            title: 'un élément modifié',
            completed: 0
        });

        // Then
        var expectedDatas = {
            todos: [
                {
                    title: 'un élément modifié',
                    completed: 0
                }
            ]
        };
        var actualData = JSON.parse(localStorage[dbName]);
        expect(actualData.todos).to.have.length(expectedDatas.todos.length);
        expect(actualData.todos[0].title).to.equal(expectedDatas.todos[0].title);
        expect(actualData.todos[0].completed).to.equal(expectedDatas.todos[0].completed);
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