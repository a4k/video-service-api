var Waterline = require('waterline');
var sailsDiskAdapter = require('sails-disk');
var waterline = new Waterline();

var filmCollection = Waterline.Collection.extend({
  identity: 'films',
  datastore: 'default',
  primaryKey: 'id',

  attributes: {
    id: {
      type: 'number',
      autoMigrations: {autoIncrement: true}
    },
    firstName: {type:'string'},
    lastName: {type:'string'},

    // Add a reference to Pets
    categories: {
      collection: 'pet',
      via: 'owner'
    }
  }
});
