(function() {

    function Store(dbName) {
        this._dbName = dbName;

        if (!localStorage[this._dbName]) {
            localStorage[this._dbName] = JSON.stringify({
                todos: []
            });
        }
    }


    window.Store = Store;
})();