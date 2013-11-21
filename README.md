# Tester son code JS dans tous les navigateurs... automatiquement !#


> [Nicolas MEDDA](http://github.com/b2l) et [Christophe PROMÉ](http://github.com/chprome)

*Slides disponibles [ici](http://b2l.github.io/confJs)*

## Prérequis ##

**Outils à installer**

 * [node.js & npm](http://nodejs.org)
 * [Grunt](http://gruntjs.com/)
 * [DalekJS](http://dalekjs.com)
 * [PhantomJS](http://phantomjs.org)
 * [SlimerJS](http://slimerjs.org/)
 * [Karma](http://karma-runner.github.io)
 * [CasperJS](http://casperjs.org)

**Récupérer le projet et installer les dépendences**

```
git clone git@github.com:chprome/conf-tester-son-js.git
cd conf-tester-son-js
npm install
```

## Lancer le serveur ##

```
node app.js
```

## Exécuter les tests ##

### unitaires ###

 * Testem : ```grunt testem:run:unit```

 * Karma : ```grunt karma:unit```

### d'intégration ###

 * Testem : ```grunt testem:run:integration```

 * Karma : ```grunt karma:integration```

### d'interface ###

Lancer le serveur : ```node app.js ```

Puis au choix :

 * Dalek : ```dalek -b chrome test/UI/dalek.js ```

 * CasperJS + PhantomJS : ```casperjs test test/UI/casper.js --engine=phantomjs```

 * CasperJS + SlimerJS : ```casperjs test test/UI/casper.js --engine=slimerjs```

