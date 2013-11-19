casper.sendEnterKey = function(selector) {
    this.evaluate(function(selector) {
        var ENTER_KEY = '\uE006';
        var keyboardEvent = document.createEvent("KeyboardEvent");
        var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";
        var eventType = "keypress";
        keyboardEvent[initMethod](
            eventType, // event type : keydown, keyup, keypress
            true, // bubbles
            true, // cancelable
            window, // viewArg: should be window
            false,
            false,
            false,
            false,
            13, // keyCodeArg : unsigned long the virtul key code, else 0
            ENTER_KEY // charCodeArgs : unsigned long the Unicode character associated with the depressed key, else 0
        );
        document.querySelector(selector).dispatchEvent(keyboardEvent);
    }, { selector: selector});
}

function startUp() {
    casper.evaluate(function() {
        localStorage['todos-vanillajs'] = JSON.stringify({todos: []});
    });
}

casper.test.begin("Page title is correct", function(test) {
    // Given

    // When
    casper.start('file:///home/nicolas/project/conf-tester-son-js/index.html', function() {
        startUp();
    });

    // Then
    casper.then(function() {
        var title = this.getTitle();
        test.assert(title === 'VanillaJS • TodoMVC', 'La page a le bon titre')
    });

    casper.run(function() {
        test.done();
    });
});

casper.test.begin("Les tâches sont ajoutées à la liste", function(test) {
    // Given
    casper.start('file:///home/nicolas/project/conf-tester-son-js/index.html', function() {
        startUp();
    });

    // When
    casper.then(function() {
        this.sendKeys('#new-todo', 'my first task');
        this.sendEnterKey('#new-todo');
    });

    // Then
    casper.then(function() {
        test.assertElementCount('#todo-list li', 1, 'On doit avoir une tâche dans la liste');
    });

    casper.run(function() {
        test.done();
    });
});
//
casper.test.begin("Les tâches sont bien supprimer de la liste", function(test) {
    // Given
    casper.start('file:///home/nicolas/project/conf-tester-son-js/index.html', function() {
        startUp();
    });
    casper.then(function() {
        casper.sendKeys('#new-todo', 't1');
        this.sendEnterKey('#new-todo');

        casper.sendKeys('#new-todo', 't2');
        this.sendEnterKey('#new-todo');

        casper.sendKeys('#new-todo', 't3');
        this.sendEnterKey('#new-todo');

    });
    // Guard
    casper.then(function() {
        test.assertElementCount('#todo-list li', 3, 'On doit avoir une tâche dans la liste');
    });

    // When
    casper.then(function() {
        casper.click('#todo-list li:first-child .destroy');
    });

    // Then
    casper.then(function() {
        test.assertElementCount('#todo-list li', 2, 'On doit avoir une tâche dans la liste');
    });

    casper.run(function() {
        test.done();
    });
});