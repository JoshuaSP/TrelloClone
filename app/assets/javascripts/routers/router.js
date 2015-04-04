TrelloClone.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "boards/:id": "boardShow"
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.boards = new TrelloClone.Collections.Boards();
  },

  index: function () {
    this.boards.fetch();
    var indexView = new TrelloClone.Views.BoardsIndex({
      collection: this.boards
    });
    this._swapView(indexView);
  },

  boardShow: function (id) {
    var board = this.boards.getOrFetch(id);
    var boardView = new TrelloClone.Views.BoardShow({
      model: board
    });
    this._swapView(boardView);
  },

  _swapView: function (newView) {
    if (this._currentView) {
      this._currentView.remove();
    }

    this.$rootEl.html(newView.render().$el);

    this._currentView = newView;
  },


});
