function Model() {
    this.elements = [];
}

Model.prototype.addElement = function(element) {
    this.elements.push(element);
};

Model.prototype.count = function() {
    return this.elements.length;
};

Model.prototype.findAll = function() {
    return this.elements;
};