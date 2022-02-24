const knex = require('knex');

const config = require('./knexfile')

const environment = process.env.PORT || 'develpoment'

module.exports = knex(config[environment]);