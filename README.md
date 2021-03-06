# Tic Tac Toe AI Minimax Algorithm

### Setup

* _Clone down repository_
* _cd to folder_
* _in terminal: $ open index.html_

### Minimax function

* _Takes an input of board and player. Since this function will be called recursively, we need to keep track of whos move it is and the modified board_
* _Get indexes of available spots on board_
* _Check for terminal states (Win, Loss, Tie), and return terminal values_
* _Make an array of moves, which will contain move objects that are the result of our minimax recursive call. From this information the next move is determined_
* _If the terminal states are not hit, the minimax function will be run with the parameters of the other player and the newly modified board until a terminal state is hit (recursive portion)_
* _Upon the return of these values, we will determine the best move. The best move is the lowest score when the Human Player is playing, and highest score when the AI Player is playing_
* _Mark the spot and continue_


### Known bugs

* _Clicking on marked square results in alert message and player losing their turn_
