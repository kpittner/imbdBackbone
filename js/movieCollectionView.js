var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var MovieModelView = require('./movieModelView');



module.exports = Backbone.View.extend({
  el: '#container',
  events: {

  },
  initialize: function(){
    console.log('collectionView being made');
    this.addAll();
    this.listenTo(this.collection, 'update', this.reload);
  },
  addAll: function() {
    console.log("ADD ALL THIS: ",this);
    console.log("ADDALL CALLED: ", this.collection.models);
    _.each(this.collection.models, this.addOne, this);
  },
  addOne: function (movie, idx, arr) {
    var movieView = new MovieModelView({model: movie});
    this.$el.append(movieView.render().el);
  },
});
