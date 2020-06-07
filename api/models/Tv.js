/**
 * Tv.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'tv',
  attributes: {
    id: {
      type: 'number',
      unique: true,
      required: true,
    },
    title: 'string',
    sort: 'number',
    image: 'string',
    createdAt: false,
    updatedAt: false,
    schedule: {
      collection:'schedule',
      via: 'tvId'
    }
  },

};

