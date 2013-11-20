var tinyxhr = tinyxhr || function(){};

function Model() {
    this.elements = [];
}

Model.prototype.init = function(controller) {
    this.controller = controller;

    tinyxhr({
        url: '/elements',
        cb: this._onModelUpdate.bind(this),
        method: 'GET'
    });
};

Model.prototype.addElement = function(element) {
    this.elements.push(element);
    tinyxhr({
        url: '/element',
        method: 'POST',
        data: JSON.stringify({value: element})
    });
};

Model.prototype.count = function() {
    return this.elements.length;
};

Model.prototype.findAll = function() {
    return this.elements;
};

Model.prototype._onModelUpdate = function(response) {
    this.elements = JSON.parse(response);
    this.controller.modelUpdated(this.elements);
};