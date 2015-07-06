var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;


module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/madMovie',
  idAttribute: '_id',
  defaults: function () {
    return {
      title: "",
      release: '',
      plot: '',
      rating: '',
      image: ""
    };
  },
  initialize: function() {
    console.log('Model Created');
  }
});
