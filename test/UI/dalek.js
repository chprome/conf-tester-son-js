var baseUrl = 'http://localhost:9001/';
var ENTER_KEY = '\uE006';

module.exports = {
    'Les éléments sont ajoutées à la liste' : function (test) {
        test
            .open(baseUrl)
            .type('#new-todo', 'my first task')
            .sendKeys('body', ENTER_KEY)
            .assert.numberOfElements('#todo-list li', 1, '1 élément présent dans la liste')
            .assert.text('#todo-list li', 'my first task', 'Le text de l\'élément est correct')
            .assert.title().is('VanillaJS • TodoMVC (1)', 'La page a le bon titre')
            .done();
    }
};