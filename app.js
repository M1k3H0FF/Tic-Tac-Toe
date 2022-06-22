
// state
let initialState;

function buildInitialState() {
    const gameState = {
        players: ['X', 'O'];
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
function onBoardClick() {
  // update state, maybe with another dozen or so helper functions...

  renderState() // show the user the new state
}
const board = document.getElementById('board');
board.addEventListener('click', onBoardClick); // etc