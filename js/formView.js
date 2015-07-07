var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var MovieModel = require('./movies');


module.exports = Backbone.View.extend({
  className: 'movieForm',
  template: _.template( $('#formTmpl').html() ),
  initialize: function (options) {
    this.el = options.el;
    if (!this.model) {
      this.model = new MovieModel();
    }
    this.render();
  },
  events: {
    "submit form": "handleSubmit",
  },
  render: function() {
    var myModel = this.model.isNew() ? {} : this.model.toJSON();
    myModel.isNew = this.model.isNew();
    var markup = this.template(myModel);
    this.$el.html(markup);
    console.log("submit form created");
    return this;
  },
  handleSubmit: function (event) {
    event.preventDefault();
    this.model.set({
      title: this.$el.find('input[name="title"]').val(),
      image: this.$el.find('input[image="image"]').val(),
      rating: this.$el.find('input[rating="rating"]').val(),
      plot: this.$el.find('input[plot="plot"]').val(),
      release: this.$el.find('input[release="release"]').val(),
    });
    this.model.save();
    this.collection.add(this.model);
    this.$el.find('input').val('');
    this.$el.find('textarea').val('');
  },
});
