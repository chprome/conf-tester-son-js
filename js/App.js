// Lancement de l'appli
var view = new View();
var model = new Model();
var controller = new Controller(model, view);
view.setController(controller);

document.onreadystatechange = function() {
    if (document.readyState === "complete") {
        if (!document.getElementById('wrapper')) {
            var wrapper = document.createElement('div');
            wrapper.setAttribute('id', 'wrapper');
            document.body.appendChild(wrapper);
        }
        controller.init();
    }
    
};