TrelloClone.Views.BoardsIndex = Backbone.View.extend({
  template: JST['board_index'],
  addBoardForm: JST['add_board_form'],

  events: {
    "click .add-board": "renderBoardForm",
    "submit .add-board-form": "addBoard",
    "click .add-board-form .cancel": "removeBoardForm",
    // "blur .add-board-form": "removeBoardForm"
  },

  initialize: function () {
    this.listenTo (this.collection, 'sync', this.render);
    this.$addBoardForm = $(this.addBoardForm());
  },

  remove: function () {
    Backbone.View.prototype.remove.apply(this);
    $(document).off();
  },

  render: function () {
    var content = this.template( {boards: this.collection} );
    this.$el.html(content);
    return this;
  },

  renderBoardForm: function () {
    if (this.boardForm) { return; }
    this.boardForm = true;
    var self = this;
    this.$('.add-board-container').append(this.$addBoardForm);
    this.$addBoardForm.find('.title').focus();
    setTimeout(function() {
      self.$addBoardForm.css('opacity', 1);
      $(document).on('click', function(event) {
        if (!$(event.target).closest(self.$addBoardForm).length) {
          self.removeBoardForm();
        }
      });
    }, 0);
  },

  removeBoardForm: function (event) {
    this.boardForm = false;
    $(document).off();
    this.$addBoardForm.css('opacity', 0);
    setTimeout(function () {
      this.$addBoardForm.remove();
    }.bind(this), 200);
  },

  addBoard: function () {
    // this.$
  }
});
