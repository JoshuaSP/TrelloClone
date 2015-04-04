TrelloClone.Models.Board = Backbone.Model.extend({
  urlRoot: "api/boards",

  parse: function (response) {
    this.lists().set(response.lists);
    delete response.lists;

    return response
  },

  lists: function () {
    return this._lists || (this._lists = new TrelloClone.Collections.Lists());
  }
});
