'use strict';

var repository = require('../lib/contactRepository');

module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: 
     * produces: application/json, text/json
     * responses: 200
     */
    get: function contacts_get(req, res) {
        res.json(repository.all())
    }
};
