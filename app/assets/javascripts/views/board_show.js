TrelloClone.Views.BoardShow = Backbone.CompositeView.extend ({
  template: JST['board-show'],

  initialize: function () {
    this.model.lists().each(function(list) {
      this.addList(list);
    })
  },

  addList: function (list) {
    var newList = new TrelloClone.Views.Lists({ model: list });
    this.addSubview('.lists-container', newList);
  },

  render: function () {
    this.attachSubviews();
    return this;
  }
})
