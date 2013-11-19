# Tester son code JS dans tous les navigateurs... automatiquement !#


> par [Nicolas MEDDA](http://github.com/b2l) et [Christophe PROMÉ](http://github.com/chprome)

## Prérequis ##

**Outils à installer**

 * [nodejs & npm](http://nodejs.org)
 * [dalek](http://dalekjs.com)
 * [phantomjs](http://phantomjs.org)
 * [karma](http://karma-runner.github.io)
 * [casperjs](http://casperjs.org)

**Récupérer le projet et installer les dépendences**

```
git clone git@github.com:chprome/conf-tester-son-js.git
cd conf-tester-son-js
npm install
```

## Exécuter les tests ##

### unitaires ###

Testem : ```testem```

Karma : ```karma```

### d'intégration ###

### d'interface ###

Dalek : ```dalek -b chrome test/UI/dalek.js ```
