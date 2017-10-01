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
startGame()
function startGame() {
  $(".cell").text("");
  board = ["", "", "", "", "", "", "", "", ""];
}

function turn(cellID, player) {
  if ($("#" + cellID).text() === "") {
    $("#" + cellID).text(player);
    board[cellID] = player;
    if (checkWin(board, player)) {
      gameOver(WINCOMBOS[i], player);
    }
  } else {
    alert("Space already marked " + $("#" + cellID).text());
  }
}

function checkWin(board, player) {
  var breakCheck = false;
  for (var i = 0; i < WINCOMBOS.length; i++) {
    var counter = 0;
    for (var j = 0; j < WINCOMBOS[i].length; j++) {
      if (board[WINCOMBOS[i][j]] === player) {
        counter++;
        if (counter === WINCOMBOS[i].length) {
          console.log("true");
          breakCheck = true;
          break;
        }
      }
    } if (breakCheck === true) {
      break;
    }
  }
  if (breakCheck) {
    return true;
  } else {
    return false;
  }
}

function gameOver(winningCombo, player) {
  for (var i = 0; i < winningCombo.length; i++) {
    if (player === "X") {
      $("#" + winningCombo[i]).addClass("blueWin");
    } else {
      $("#" + winningCombo[i]).addClass("redWin");
    }
  }
}

function checkTie() {
  for (var cell in board) {
    if (cell === "") {
      return false;
    }
  }
}

function minimax(newBoard, player) {
  var openSpots = possibleMoves(newBoard);
  if (checkWin(newBoard, HUMANPLAYER)) { return {score: -10}; }
  if (checkWin(newBoard, AIPLAYER)) { return {score: 10}; }
  if (openSpots.length === 0) { return {score: 0}; }

  var moves = [];
  for (var i = 0; i < openSpots.length; i++) {
    var move = {};
    move.index = openSpots[i];
    newBoard[openSpots[i]] = player;
    if (player === AIPLAYER) {
      var result = minimax(newBoard, HUMANPLAYER);
      move.score = result.score;
    } else if (player === HUMANPLAYER) {
      var result = minimax(newBoard, AIPLAYER);
      move.score = result.score;
    }
    newBoard[openSpots[i]] = "";
    moves.push(move);
  }

  var bestMove;
  if (player === AIPLAYER) {
    var bestScore = -100;
    for (var i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {
    var bestScore = 100;
    for (var i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

  return moves[bestMove];
}

function possibleMoves(newBoard) {
  var openSpots = [];
  for (var i = 0; i < newBoard.length; i++) {
    if (newBoard[i] === "") {
      openSpots.push(i);
    }
  }
  return openSpots;
}

// jQuery/frontend
$(document).ready(function() {
  $("#resetButton").click(function() {
    startGame();
  });

  $("table").on('click', '.cell', function(event) {
    turn(event.currentTarget.id, HUMANPLAYER);
    if (!checkTie()) {
      turn(minimax(board, AIPLAYER).index, AIPLAYER);
    } else {
      alert("TIE");
    }
  });
});
