TrelloClone.Collections.Boards = Backbone.Collection.extend ({
  url: "api/boards",
  model: TrelloClone.Models.Board,

  getOrFetch: function (id) {
    return this.get(id) || function () {
      var board = new this.model({ id:id });
      board.fetch();
      return board;
    }.bind(this)();
  }
});
