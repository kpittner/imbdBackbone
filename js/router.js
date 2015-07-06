var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var myData = require('./data');
var MovieCollect = require('./movieCollection');
var MovieMod = require('./movieModelView');
var formView = require('./formView');
var Movies = require('./movies');
var MovieCollectionView = require('./movieCollectionView');


module.exports = Backbone.Router.extend({
  routes: {
    "": "home",
    "movie/:id": "detailView"
  },
  detailView: function(id) {

    var movie = new Movies ({_id: id});
    movie.fetch().then(function(){
      var movieView = new MovieMod({model: model});
      $('body').html(movieView.render().el);
    });
  },
  home: function() {
    console.log("HELLO: ")
    var collection = new MovieCollect();
    collection.fetch().then(function() {
      console.log(collection);
      var appView = new MovieCollectionView({collection: collection});
      var newMovieFormView = new formView({collection: collection, el: '.addMovieForm'});
    });
  }
});
