'use strict';
var repository = require('../../lib/contactRepository');
/**
 * Operations on /contacts/{id}
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: id
     * produces: application/json, text/json
     * responses: 200
     */
    get: function contacts_getById(req, res) {
        res.json(repository.get(req.params['id']));
    }
};
