
// state
let initialState;

function buildInitialState() {
    const gameState = {
        players: ['X', 'O'],
        board: [
            [null, null, null],
            [null, null, null],
            [null, null, null] 
        ]
    }

}

// render
function renderState() {

}

// maybe a dozen or so helper functions for tiny pieces of the interface

// listeners
function onBoardClick(event) {
  console.log(event.target.innerText)
  event.target.innerHTML = 'O'


}
const board = document.getElementById('gameBoard');
console.log(board);

board.addEventListener("click", onBoardClick)