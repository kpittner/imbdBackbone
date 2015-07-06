var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var FormView = require('./formView');


module.exports = Backbone.View.extend({
  tagName: 'div',
  className: 'movie',
  events: {
    'click .trash': 'delete',
    'click .edit': 'toggleEdit',
    'click .add': 'add'
  },
  toggleEdit: function(event) {
    event.preventDefault();
    new FormView({model: this.model, el: this.$el.find('.editMovie')});
    this.$el.find('.editMovie').toggleClass('active');
  },
  template: _.template($('#movieTmpl').html()),
  initialize: function() {
    console.log('model view create');
    this.listenTo(this.model, 'add', this.add);
    this.listenTo(this.model, 'destroy', this.remove);
  },
  delete: function(event) {
    event.preventDefault();
    this.model.destroy();
  },
  remove: function() {
    this.$el.remove();
  },
  add: function(event) {
    event.preventDefault();
    this.$el.add(this.model);
  },
  render: function () {
      var markup = this.template(this.model.toJSON());
      this.$el.html(markup);
      console.log("MovieView Created");
      return this;
  }
});
