/**
 * Category.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'categories',
  attributes: {
    id: {
      type: 'number',
      unique: true,
      required: true,
    },
    name: {
      type: 'string',
    },
    sort: {
      type: 'number',
    },
    createdAt: {
      columnName: 'created_at',
      type: 'number',
    },
    updatedAt: {
      columnName: 'updated_at',
      type: 'number',
    },
    films: {
      collection:'film',
      via: 'category'
    }
  },
  associations: function () {
    // Category.belongsToMany(Film, {through: FilmsCategories, foreignKey: 'categoryId', as: "films"});
  }

};

