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
    title: {
      type: 'string'
    },
    image: {
      type: 'string'
    },
    /*categoryId: {
      columnName: 'category_id',
      type: 'number',
    },*/
    createdAt: false,
    updatedAt: false,
    category: {
      columnName: 'category_id',
      model: 'category',
      unique: true,
    }
  },
  associations: function () {
    // Film.belongsToMany(Category, {through: FilmsCategories, foreignKey: 'film_id', as: "categories"});
    // Film.belongsTo(Category, {foreignKey: 'categoryId', as: "category"});
  }

};

