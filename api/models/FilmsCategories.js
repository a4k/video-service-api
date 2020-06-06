/**
 * FilmsCategories.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'films_categories',
  attributes: {
    categoryId: {
      type: 'number',
      unique: true,
      required: true,
    },

    filmId: {
      type: 'number',
    },

  },
  associations: function () {

  }

};

