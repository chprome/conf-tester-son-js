var BASE_URL = 'http://localhost:9001/';


casper.test.begin("Les éléments sont ajoutés à la liste", function(test) {
    // Given
    casper.start(BASE_URL);

    // When
    casper.then(function() {
        this.sendKeys('#ajouter-element-input', 'un élément');
        this.click('#ajouter-element-button');
    });

    // Then
    casper.then(function() {
        test.assertElementCount('#elements-list li', 1, 'On doit avoir une tâche dans la liste');
        test.assertSelectorHasText('#elements-list li', 'un élément', 'Le text de l\'élément est correct');
    });

    casper.run(function() {
        test.done();
    });
});