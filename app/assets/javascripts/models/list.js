TrelloClone.Models.List = Backbone.Model.extend({
  urlRoot: "api/list",

  parse: function (response) {
    this.cards().set(response.cards);
    delete response.cards;
    return response;
  },

  cards: function () {
    return this._cards || (this._cards = new TrelloClone.Collections.Lists());
  }
});
