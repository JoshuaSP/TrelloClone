# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list

json.extract! @board, :id, :title
json.lists @board.lists do |list|
  json.extract! list, :id, :title, :ord
  json.cards list.cards, :id, :title, :description, :ord
end
