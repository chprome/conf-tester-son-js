function Controller(model, view) {
    this.model = model;
    this.view = view;
}

Controller.prototype.init = function() {
    this.view.init();
    this.view.renderElements(this.model.findAll());
};

Controller.prototype.newElement = function(value) {
    
    var valueToAdd = value.trim();
    if(valueToAdd.length > 0) {
        this.model.addElement(valueToAdd);
        this.view.renderElements(this.model.findAll());
    }
};
