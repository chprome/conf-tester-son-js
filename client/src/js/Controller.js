function Controller(model, view) {
    this.model = model;
    this.view = view;
}

Controller.prototype.init = function() {
    this.model.init(this);
    this.view.init(this);
    this.view.renderElements(this.model.findAll());
};

Controller.prototype.modelUpdated = function(elements) {
    this.view.renderElements(elements);
};

Controller.prototype.newElement = function(value) {
    
    var valueToAdd = value.trim();
    if(valueToAdd.length > 0) {
        this.model.addElement(valueToAdd);
        this.view.renderElements(this.model.findAll());
    }
};
