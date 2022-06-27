const gameBoard = {
    player1: ['X'],
    player2: ['O'],
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null] 
    ], 
    
}
const winCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [6, 4, 2],
    [2, 5, 8],
    [1, 4, 7],
    [0, 3, 6],
]
const player1 = 'X';
const player2 = "O";
let currentPlayer = player1;

const board = document.getElementById('gameBoard');

console.log(board);
console.log(gameBoard)


board.addEventListener("click", onBoardClick)

function getRow(board, rowId){
    return board[rowId]
   }
 function getColumn(board, columnId){
    let column =[];
    for (let i = 0; i < grid.length; i++){
      let row = grid[i];
      column.push(row[columnId]);
    }
    return column;
}
console.log(getRow())
 console.log(getColumn)

function onBoardClick(event) {  
    const id = event.target.id;
    if(currentPlayer === player1){
        event.target.innerHTML = 'X';
        currentPlayer = player2;
    } else if(currentPlayer === player2){
        event.target.innerHTML = 'O';
        currentPlayer = player1;
    }

console.log(document.getElementById('box'))
 console.log(id)
// //    updateState()
// //    updateHTML()
// //   let win = checkWin()
// //   if(win){
// //       //do win thing 
// //   } else {changePlayer()}
  
}
 function boardCheck(arr){
    for(let num = 0; num <= 9; num++)
    if(arr.indexOf(num) === -1)
    return false;
    return true;
}
function checkWin(board){
    // for (let i = 0; i < board.length; i++);
    // let letters = Object.values(board);
    //     if(letters === 'X'){
    //         return true
    //     }
    // return false
   
}
function updateHTML(){
    //update DOM based on gameBoard.board
}
function updateState(){
    //change gameBoard.board
}
// console.log(event.target.innerText)
