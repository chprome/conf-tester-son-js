var MicroEE = require('microee');

function Model(store) {
    this.store = store;
    this.elements = [];
}

MicroEE.mixin(Model);

Model.prototype.init = function() {
    this.elements = this.store.findAll();
};

Model.prototype.addElement = function(element) {
    this.elements.push(element);
    this.store.save(element);
};

Model.prototype.count = function() {
    return this.elements.length;
};

Model.prototype.findAll = function() {
    return this.elements;
};

module.exports = Model;