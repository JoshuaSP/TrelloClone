TrelloClone.Models.List = Backbone.Model.extend({
  urlRoot: "api/list",

  parse: function(response) {
    this.cards().set(response.cards)
  }

});
