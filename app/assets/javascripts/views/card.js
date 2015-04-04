TrelloClone.Views.Card = Backbone.View.extend({
  template: JST['card'],

  render: function () {
    var content = this.template(this.model);
    this.$el.html(content);
  }
});
