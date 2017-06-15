function Game() {
  var player1 = new Player("X", true);
  var player2 = new Player("Y", false);
}

function Player(type, turn) {
  this.type = type;
  this.turn = turn;
}

function Space() {
  this.xCoordinate: 0;
  this.yCoordinate: 0;
  this.markedBy: 0
}

Space.prototype.initialize = function (x, y) {
  this.xCoordinate = x;
  this.yCoordinate = y;
  this.markedBy = 0;
}

Space.prototype.mark = function(XO) {
  if(this.markedBy) {
    alert("already marked");
    return "already marked";
  } else {
    this.markedby = XO;
    return true;
  }
}

function Board() {
  this.spaces = [];
}

Board.prototype.initialize = function() {
  for (var r = 0; r < 3; r++) {
    for (var c = 0; c < 3; c++) {
      var currentSpace = Object.create(Space);
      this.grid[r][c] = '~';
    }
  }
}

Board.prototype.mark = function() {

}

function Space(r, c) {
  this.row = r;
  this.column = c;
}

var runGame = function() {
  var player1 = new Player("X", true);
  var player2 = new Player("Y", false);
  var board = new Board();
  console.log("end");
}

//FRONTEND
$(document).ready(function() {
  var currentPlayerToken = 'x';
  $(".board").on('click', ".space:not('.square-x, .square-o')", function(event) {
    var square = $(event.currentTarget);
    square.addClass('square-' + currentPlayerToken);
    if (currentPlayerToken === 'x') {
    currentPlayerToken = 'o';
    } else {
      currentPlayerToken = 'x';
    }
  });


  runGame();


});
