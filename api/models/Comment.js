/**
 * Comment.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'comments',
  attributes: {
    id: {
      type: 'number',
      unique: true,
      required: true,
    },
    sort: 'number',
    content: 'string',
    createdAt: false,
    updatedAt: false,
    film: {
      columnName: 'film_id',
      model: 'film',
      unique: true,
    },
    user: {
      columnName: 'user_id',
      model: 'user',
      unique: true,
    }
  },

};

