const knex = require('knex');
const configuration = require('../../configuration');

const connection = knex(configuration.development);

module.exports = connection;