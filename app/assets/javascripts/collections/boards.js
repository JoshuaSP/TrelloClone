TrelloClone.Collections.Boards = Backbone.Collection.extend ({
  url: "api/boards",
  model: TrelloClone.Models.Board

  // TODO : parse to extract cards & lists
});
