(function() {

    function Store(dbName) {
        this._dbName = dbName;

        if (!localStorage[this._dbName]) {
            localStorage[this._dbName] = JSON.stringify({
                todos: []
            });
        }
    }

    Store.prototype.save = function(item) {
        var data = JSON.parse(localStorage[this._dbName]);

        data.todos.push(item);
    };

    window.Store = Store;
})();