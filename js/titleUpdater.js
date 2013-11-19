/*global $$, $ */
(function (window) {
    'use strict';

    /**
     * Takes a model and view and acts as the controller between them
     *
     * @constructor
     * @param {object} model The model constructor
     * @param {object} view The view constructor
     */
    function TitleUpdater() {
        document.addEventListener("updateCount", this.onUpdateCount);
    }

    TitleUpdater.prototype.onUpdateCount = function(e) {
        document.title = "VanillaJS • TodoMVC ("+e.detail.counter+")";
    };

    // Export to window
    window.app.TitleUpdater = TitleUpdater;
})(window);
