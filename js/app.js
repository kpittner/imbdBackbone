var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var Router = require('./router');



// var movieColView, movieCol

// $(function () {
//   console.log("SHOW ME");
//   console.log("TEST: ", new MovieCollect(myData));
//   movieCol = new MovieCollect(myData);
//   console.log("MOVIE COLLECTION: ", movieCol);
//   console.log("Movie Children: ", movieCol.models)
//   movieColView = new MovieCollectionView({collection: movieCol});
// });
module.exports = $(function() {
  new Router();
  Backbone.history.start();
});
