TrelloClone.Views.List = Backbone.CompositeView.extend ({
  template: JST['list'],

  initialize: function () {
    this.listenTo(this.model.cards(), "add", this.addCard);
    this.listenTo(this.model.cards(), "remove", this.removeCard);
    this.$cards = this.$('.cards-container');

    this.model.cards().each(this.addCard.bind(this));
  },

  render: function () {
    var content = this.template({ list: this.model });

    this.$el.html(content);
    this.attachSubviews();

    return this;
  },

  addCard: function (card) {
    var cardView = new TrelloClone.Views.Card (card);
    this.addSubview(this.$cards, cardView);
  },

  removeCard: function (card) {
    var cardView = _.find(this.subviews(), function(subview) {
      subview.model === card;
    });
    this.removeSubview(this.$cards, cardView);
  }
});
