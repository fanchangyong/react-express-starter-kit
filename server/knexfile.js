// Update with your config settings.

require('@babel/register');
require('regenerator-runtime/runtime');

require('dotenv').config();

module.exports = {
  client: 'mysql',
  connection: process.env.DATABASE_URL,
};
