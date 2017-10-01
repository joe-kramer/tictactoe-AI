// Backend
const HUMANPLAYER = "X";
const AIPLAYER = "O"
const WINCOMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
];

var board;
var gameWon;
startGame()
function startGame() {
  $(".cell").text("");
  board = ["", "", "", "", "", "", "", "", ""];
  gameWon = false;
}

function turn(cellID, player) {
  if ($("#" + cellID).text() === "") {
    $("#" + cellID).text(player);
    board[cellID] = player;
    gameWon = checkWin(board, player);
  } else {
    alert("Space already marked " + $("#" + cellID).text());
  }
}

function checkWin(board, player) {
  loop:
  for (var i = 0; i < WINCOMBOS.length; i++) {
    var counter = 0;
    for (var j = 0; j < WINCOMBOS[i].length; j++) {
      if (board[WINCOMBOS[i][j]] === player) {
        counter++;
        if (counter === WINCOMBOS[i].length) {
          console.log("true");
          return true;
        }
      }
    }
  }
  console.log("false");
  return false;
}

// jQuery/frontend
$(document).ready(function() {
  $("#resetButton").click(function() {
    startGame();
  });

  $("table").on('click', '.cell', function(event) {
    turn(event.currentTarget.id, HUMANPLAYER);
  });











});
