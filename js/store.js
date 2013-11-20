(function() {

    function Store(dbName) {
        this._dbName = dbName;

        if (!localStorage[this._dbName]) {
            localStorage[this._dbName] = JSON.stringify({
                todos: []
            });
        }
    }

    Store.prototype.save = function (id, updateData) {
        var data = JSON.parse(localStorage[this._dbName]);
        var todos = data.todos;

        // If an ID was actually given, find the item and update each property
        if (typeof id !== 'object') {
            for (var i = 0; i < todos.length; i++) {
                if (todos[i].id == id) {
                    for (var x in updateData) {
                        todos[i][x] = updateData[x];
                    }
                }
            }

            localStorage[this._dbName] = JSON.stringify(data);
            return data;
        } else {
            callback = updateData;

            updateData = id;

            // Generate an ID
            updateData.id = new Date().getTime();

            todos.push(updateData);
            localStorage[this._dbName] = JSON.stringify(data);
            return updateData
        }
    };

    window.Store = Store;
})();