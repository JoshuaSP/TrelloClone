TrelloClone.Views.BoardShow = Backbone.CompositeView.extend ({
  template: JST['board_show'],

  initialize: function () {
    this.listenTo(this.model.lists(), "add", this.addList);
    this.listenTo(this.model.lists(), "remove", this.removeList);

    this.model.lists().each(this.addList.bind(this));
  },

  addList: function (list) {
    var newList = new TrelloClone.Views.List({ model: list });
    this.addSubview('.lists-container', newList);
  },

  removeList: function (list) {
    var subview = _.find(
      this.subviews('.lists-container'),
      function (subview) {
        subview.model === list;
      }
    );

    this.removeSubview('.lists-container', subview);
  },

  render: function () {
    var content = this.template({
      board: this.model
    });

    this.$el.html(content);
    this.attachSubviews();

    return this;
  }
});
