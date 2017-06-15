function Player(turn) {
  this.type = "X";
  this.turn = turn;
}

function Space(row, column) {
  this.type = "";
  this.empty = true;
  this.row = row;
  this.column = column;
}

function Board() {
  this.counter = 0;
  this.spaces = [];
}

Board.prototype.initializeSpaces = function() {
  var spaces = [];
  for (var r = 0; r < 3; r++) {
    for (var c= 0; c < 3; c++) {
      var space = new Space(r, c);
      spaces.push(space);
    }
  }
  return spaces;
}

Board.prototype.threeInARow = function () {
  if(this.spaces[0].type === "X" && this.spaces[1].type === "X" && this.spaces[2].type === "X"){
    return true;
  }else if(this.spaces[3].type === "X" && this.spaces[4].type === "X" && this.spaces[5].type === "X"){
    return true;
  }else if(this.spaces[6].type === "X" && this.spaces[7].type === "X" && this.spaces[8].type === "X"){
    return true;
  }else if(this.spaces[0].type === "X" && this.spaces[3].type === "X" && this.spaces[6].type === "X"){
    return true;
  }else if(this.spaces[1].type === "X" && this.spaces[4].type === "X" && this.spaces[7].type === "X"){
    return true;
  }else if(this.spaces[2].type === "X" && this.spaces[5].type === "X" && this.spaces[8].type === "X"){
    return true;
  }else if(this.spaces[0].type === "X" && this.spaces[4].type === "X" && this.spaces[8].type === "X"){
    return true;
  }else if(this.spaces[2].type === "X" && this.spaces[4].type === "X" && this.spaces[6].type === "X"){
    return true;
  }else if(this.spaces[0].type === "O" && this.spaces[1].type === "O" && this.spaces[2].type === "O"){
    return true;
  }else if(this.spaces[3].type === "O" && this.spaces[4].type === "O" && this.spaces[5].type === "O"){
    return true;
  }else if(this.spaces[6].type === "O" && this.spaces[7].type === "O" && this.spaces[8].type === "O"){
    return true;
  }else if(this.spaces[0].type === "O" && this.spaces[3].type === "O" && this.spaces[6].type === "O"){
    return true;
  }else if(this.spaces[1].type === "O" && this.spaces[4].type === "O" && this.spaces[7].type === "O"){
    return true;
  }else if(this.spaces[2].type === "O" && this.spaces[5].type === "O" && this.spaces[8].type === "O"){
    return true;
  }else if(this.spaces[0].type === "O" && this.spaces[4].type === "O" && this.spaces[8].type === "O"){
    return true;
  }else if(this.spaces[2].type === "O" && this.spaces[4].type === "O" && this.spaces[6].type === "O"){
    return true;
  }
}

function Game() {
  winner = false;

}

$(document).ready(function(){
  var playerX = new Player(true);
  var playerO = new Player(false);

  var board = new Board();
  board.spaces = board.initializeSpaces();
  var game = new Game();


  $(".space1").click(function() {
    if(playerX.turn === true && board.spaces[0].empty === true) {
      $(".space1").text("X");
      playerO.turn = true;
      playerX.turn = false;
      board.spaces[0].empty = false;
      board.spaces[0].type = "X";
      $("#turnTracker").text("O's Turn");
      if(board.threeInARow()){
        $("#turnTracker").text("X Wins!");
      }

    } else if(playerO.turn === true && board.spaces[0].empty === true) {
      $(".space1").text("O");
      playerO.turn = false;
      playerX.turn = true;
      board.spaces[0].empty = false;
      board.spaces[0].type = "O";
      $("#turnTracker").text("X's Turn");
      if(board.threeInARow()){
        $("#turnTracker").text("O Wins!");
      }
    }
  });
  $(".space2").click(function() {
    if(playerX.turn === true && board.spaces[1].empty === true) {
      $(".space2").text("X");
      playerO.turn = true;
      playerX.turn = false;
      board.spaces[1].empty = false;
      board.spaces[1].type = "X";
      $("#turnTracker").text("O's Turn");
      if(board.threeInARow()){
        $("#turnTracker").text("X Wins!");
      }

    } else if(playerO.turn === true && board.spaces[1].empty === true) {
      $(".space2").text("O");
      playerO.turn = false;
      playerX.turn = true;
      board.spaces[1].empty = false;
      board.spaces[1].type = "O";
      $("#turnTracker").text("X's Turn");
      if(board.threeInARow()){
        $("#turnTracker").text("O Wins!");
      }
    }
  });
  $(".space3").click(function() {
    if(playerX.turn === true && board.spaces[2].empty === true) {
      $(".space3").text("X");
      playerO.turn = true;
      playerX.turn = false;
      board.spaces[2].empty = false;
      board.spaces[2].type = "X";
      $("#turnTracker").text("O's Turn");
      if(board.threeInARow()){
        $("#turnTracker").text("X Wins!");
      }

    } else if(playerO.turn === true && board.spaces[2].empty === true) {
      $(".space3").text("O");
      playerO.turn = false;
      playerX.turn = true;
      board.spaces[2].empty = false;
      board.spaces[2].type = "O";
      $("#turnTracker").text("X's Turn");
      if(board.threeInARow()){
        $("#turnTracker").text("O Wins!");
      }
    }
  });
  $(".space4").click(function() {
    if(playerX.turn === true && board.spaces[3].empty === true) {
      $(".space4").text("X");
      playerO.turn = true;
      playerX.turn = false;
      board.spaces[3].empty = false;
      board.spaces[3].type = "X";
      $("#turnTracker").text("O's Turn");
      if(board.threeInARow()){
        $("#turnTracker").text("X Wins!");
      }

    } else if(playerO.turn === true && board.spaces[3].empty === true) {
      $(".space4").text("O");
      playerO.turn = false;
      playerX.turn = true;
      board.spaces[3].empty = false;
      board.spaces[3].type = "O";
      $("#turnTracker").text("X's Turn");
      if(board.threeInARow()){
        $("#turnTracker").text("O Wins!");
      }
    }
  });
  $(".space5").click(function() {
    if(playerX.turn === true && board.spaces[4].empty === true) {
      $(".space5").text("X");
      playerO.turn = true;
      playerX.turn = false;
      board.spaces[4].empty = false;
      board.spaces[4].type = "X";
      $("#turnTracker").text("O's Turn");
      if(board.threeInARow()){
        $("#turnTracker").text("X Wins!");
      }

    } else if(playerO.turn === true && board.spaces[4].empty === true) {
      $(".space5").text("O");
      playerO.turn = false;
      playerX.turn = true;
      board.spaces[4].empty = false;
      board.spaces[4].type = "O";
      $("#turnTracker").text("X's Turn");
      if(board.threeInARow()){
        $("#turnTracker").text("O Wins!");
      }
    }
  });
  $(".space6").click(function() {
    if(playerX.turn === true && board.spaces[5].empty === true) {
      $(".space6").text("X");
      playerO.turn = true;
      playerX.turn = false;
      board.spaces[5].empty = false;
      board.spaces[5].type = "X";
      $("#turnTracker").text("O's Turn");
      if(board.threeInARow()){
        $("#turnTracker").text("X Wins!");
      }

    } else if(playerO.turn === true && board.spaces[5].empty === true) {
      $(".space6").text("O");
      playerO.turn = false;
      playerX.turn = true;
      board.spaces[5].empty = false;
      board.spaces[5].type = "O";
      $("#turnTracker").text("X's Turn");
      if(board.threeInARow()){
        $("#turnTracker").text("O Wins!");
      }
    }
  });
  $(".space7").click(function() {
    if(playerX.turn === true && board.spaces[6].empty === true) {
      $(".space7").text("X");
      playerO.turn = true;
      playerX.turn = false;
      board.spaces[6].empty = false;
      board.spaces[6].type = "X";
      $("#turnTracker").text("O's Turn");
      if(board.threeInARow()){
        $("#turnTracker").text("X Wins!");
      }

    } else if(playerO.turn === true && board.spaces[6].empty === true) {
      $(".space7").text("O");
      playerO.turn = false;
      playerX.turn = true;
      board.spaces[6].empty = false;
      board.spaces[6].type = "O";
      $("#turnTracker").text("X's Turn");
      if(board.threeInARow()){
        $("#turnTracker").text("O Wins!");
      }
    }

  });
  $(".space8").click(function() {
    if(playerX.turn === true && board.spaces[7].empty === true) {
      $(".space8").text("X");
      playerO.turn = true;
      playerX.turn = false;
      board.spaces[7].empty = false;
      board.spaces[7].type = "X";
      $("#turnTracker").text("O's Turn");
      if(board.threeInARow()){
        $("#turnTracker").text("X Wins!");
      }

    } else if(playerO.turn === true && board.spaces[7].empty === true) {
      $(".space8").text("O");
      playerO.turn = false;
      playerX.turn = true;
      board.spaces[7].empty = false;
      board.spaces[7].type = "O";
      $("#turnTracker").text("X's Turn");
      if(board.threeInARow()){
        $("#turnTracker").text("O Wins!");
      }
    }
  });
  $(".space9").click(function() {
    if(playerX.turn === true && board.spaces[8].empty === true) {
      $(".space9").text("X");
      playerO.turn = true;
      playerX.turn = false;
      board.spaces[8].empty = false;
      board.spaces[8].type = "X";
      $("#turnTracker").text("O's Turn");
      if(board.threeInARow()){
        $("#turnTracker").text("X Wins!");
      }

    } else if(playerO.turn === true && board.spaces[8].empty === true) {
      $(".space9").text("O");
      playerO.turn = false;
      playerX.turn = true;
      board.spaces[8].empty = false;
      board.spaces[8].type = "O";
      $("#turnTracker").text("X's Turn");
      if(board.threeInARow()){
        $("#turnTracker").text("O Wins!");
      }
    }
  });
});
