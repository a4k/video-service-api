/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'users',
  attributes: {
    id: {
      type: 'number',
      unique: true,
      required: true,
    },
    username: 'string',
    name: 'string',
    password: 'string',
    createdAt: false,
    updatedAt: false,
  },

};

