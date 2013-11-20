var baseUrl = 'http://localhost:9001/';

module.exports = {
    'Les éléments sont ajoutés à la liste' : function (test) {
        test
            .open(baseUrl)
            .type('#ajouter-element-input', 'un élément')
            .click('#ajouter-element-button')
            .assert.numberOfElements('#elements-list li', 1, '1 élément présent dans la liste')
            .assert.text('#elements-list li', 'un élément', 'Le text de l\'élément est correct')
            .done();
    }
};