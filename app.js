const gameBoard = {
    players: ['X', 'O'],
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null] 
    ], 
    currentPlayer: 0
}
const board = document.getElementById('gameBoard');
console.log(board);
console.log(gameBoard)

board.addEventListener("click", onBoardClick)

function onBoardClick(event) {
   updateState()
   updateHTML()
  let win = checkWin()
  if(win){
      //do win thing 
  } else {changePlayer()}
  
}
function checkWin(){
    return 
}
function updateHTML(){
    //update DOM based on gameBoard.board
}
function updateState(){
    //change gameboard.board
}
function changePlayer(){
    if(gameBoard.currentPlayer === 0){
        gameBoard.currentPlayer = 1
    } else {
        gameBoard.currentPlayer = 0
    }
}
// console.log(event.target.innerText)
 //event.target.innerHTML = 'O'