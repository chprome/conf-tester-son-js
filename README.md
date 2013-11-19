# Tester son code JS dans tous les navigateurs... automatiquement !#


> par [Nicolas MEDDA](http://github.com/b2l) et [Christophe PROMÉ](http://github.com/chprome)

*Slides disponibles [ici](http://b2l.github.io/confJs)*

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

Testem : ```testem -f test/unit/testem.json```

Karma : ```karma start test/unit/karma.conf.js```

### d'intégration ###

TODO

### d'interface ###

Dalek : ```dalek -b chrome test/UI/dalek.js ```

CasperJs + PhantomJs : ```casperjs test test/UI/casper.js --engine=phantomjs```

CasperJs + SlimerJs : ```casperjs test test/UI/casper.js --engine=slimerjs```

