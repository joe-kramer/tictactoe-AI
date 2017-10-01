var originalBoard;
const humanPlayer = "X";
const aiPlayer = "O"
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]

$("table").on('click', '.space', function(event) {
  var space = $(event.currentTarget);
  var id = space[0]["id"];
  if (player1.turn === true) {

  }
});

function startGame() {
  $(".cell").text("");
}

// jQuery/frontend
$(document).ready(function() {
  $("#resetButton").click(function() {
    startGame();
});

  $("table").on('click', '.cell', function(event) {
    console.log(event.currentTarget);
  });
});
