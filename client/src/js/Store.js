var request = require('superagent');

function Store() {}

Store.prototype.save = function(element) {
    request
        .post('/element')
        .send({ value: element })
        .set('Accept', 'application/json')
        .end(function(){});
};

Store.prototype.findAll = function(cb) {
    request
        .get('/elements')
        .end(function(response) {
            cb(JSON.parse(response.text));
        });
};

module.exports = Store;