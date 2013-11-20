function View() {}

View.prototype.setController = function(controller) {
    this.controller = controller;
};

View.prototype.init = function() {
    this.container = document.getElementById('wrapper');

    this.button = document.createElement('button');
    this.button.innerHTML = "Ajouter";
    this.button.setAttribute('id', 'ajouter-element-button');

    this.input = document.createElement('input');
    this.input.setAttribute('type', 'text');
    this.input.setAttribute('placeholder', 'Nouvel élément');

    this.container.appendChild(this.input);
    this.container.appendChild(this.button);

    this.list = document.createElement('ul');
    this.list.setAttribute('id', 'elements-list');
    this.container.appendChild(this.list);

    this.button.addEventListener('click', this.onSubmit.bind(this));
};

View.prototype.renderElements = function(elements) {
    this.list.innerHTML = "";

    elements.forEach(function(element) {
        var li = document.createElement('li');
        li.innerHTML = element;
        this.list.appendChild(li);
    }, this);
};

View.prototype.onSubmit = function(e) {
    this.controller.newElement(this.input.value);
    this.input.value = "";
};