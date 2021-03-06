/**
 * Film.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'films',
  attributes: {
    id: {
      type: 'number',
      unique: true,
      required: true,
    },
    sort: {
      type: 'number',
    },
    content: 'string',
    title: 'string',
    country: 'string',
    image: 'string',
    createdAt: false,
    updatedAt: false,
    category: {
      columnName: 'category_id',
      model: 'category',
      unique: true,
    },
    comments: {
      collection:'comment',
      via: 'film'
    }
  },
  associations: function () {
  }

};

