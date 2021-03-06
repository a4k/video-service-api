/**
 * Schedule.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'schedule',
  attributes: {
    id: {
      type: 'number',
      unique: true,
      required: true,
    },
    sort: 'number',
    time: 'string',
    title:  'string',
    active:  'number',
    createdAt: false,
    updatedAt: false,
    tvId: {
      columnName: 'tv_id',
      model: 'tv',
      unique: true,
    }
  },
  associations: function () {
  }


};

