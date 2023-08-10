/*----------------------------------------------------------------------------*/
/*                                CONSTANTS                                   */
/*----------------------------------------------------------------------------*/

const GAME_STATE_KEY = 'tic-tac-toe-game-state';
const PLAYER_ONE_SYMBOL = 'X';
const PLAYER_TWO_SYMBOL = 'O';

/*----------------------------------------------------------------------------*/
/*                            INITIAL GAME STATE                              */
/*----------------------------------------------------------------------------*/

const initialState = {
  currentPlayerSymbol: PLAYER_ONE_SYMBOL,
  squareValues: ['', '', '', '', '', '', '', '', ''],
  gameStatus: ''
};

// Possible Game Statuses:
// ''     => game is still being played
// 'None' => game is over and there is a draw, no winner
// 'X'    => game is over and Player 1 won
// 'O'    => game is over and Player 2 won

/*----------------------------------------------------------------------------*/
/*                               DATA STORAGE                                 */
/*----------------------------------------------------------------------------*/

function saveGameState(state) {
  window.localStorage.setItem(GAME_STATE_KEY, JSON.stringify(state));
}

function loadGameState() {
  const savedState = window.localStorage.getItem(GAME_STATE_KEY);
  // if there is no previously saved game state, create the game state
  if (!savedState) return initialState;

  const state = JSON.parse(savedState);
  return state;
}

/*----------------------------------------------------------------------------*/
/*                               GAME LOGIC                                   */
/*----------------------------------------------------------------------------*/

function giveUp(state) {
  // winner of the game is not the current player
  state.gameStatus = state.currentPlayerSymbol === PLAYER_ONE_SYMBOL ?
    PLAYER_TWO_SYMBOL : PLAYER_ONE_SYMBOL;
}

function playTurn(state, squareIndex) {
  if (!validEmptySquare(state, squareIndex)) return;
  const { squareValues, currentPlayerSymbol } = state;
  // if the turn is valid, add the current player's mark to the selected square
  squareValues[squareIndex] = currentPlayerSymbol;

  // update the state of the game when the turn is over
  updateGameStatus(state);
  // switch the current player to the other player if the game is not over
  if (!state.gameStatus) switchPlayer(state);
}

function resetGame(state) {
  // reset the state of the game to the initial state
  state.currentPlayerSymbol = PLAYER_ONE_SYMBOL;
  state.squareValues = ['', '', '', '', '', '', '', '', ''];
  state.gameStatus = '';
}

function switchPlayer(state) {
  // switch the current player on the state
  state.currentPlayerSymbol = state.currentPlayerSymbol === PLAYER_ONE_SYMBOL ?
    PLAYER_TWO_SYMBOL : PLAYER_ONE_SYMBOL;
}

function updateGameStatus(state) {
  const { squareValues } = state;
  // Check rows
  for (let i = 0; i < 9; i += 3) {
    if (squareValues[i] !== '' && squareValues[i] === squareValues[i + 1] && squareValues[i] === squareValues[i + 2]) {
      return state.gameStatus = squareValues[i].toUpperCase();
    }
  }

  // Check columns
  for (let i = 0; i < 3; i += 1) {
    if (squareValues[i] !== '' && squareValues[i] === squareValues[i + 3] && squareValues[i] === squareValues[i + 6]) {
      return state.gameStatus = squareValues[i].toUpperCase();
    }
  }

  // Check the diagonals
  if (squareValues[0] !== '' && squareValues[0] === squareValues[4] && squareValues[0] === squareValues[8]) {
    return state.gameStatus = squareValues[0].toUpperCase();
  }

  if (squareValues[2] !== '' && squareValues[2] === squareValues[4] && squareValues[2] === squareValues[6]) {
    return state.gameStatus = squareValues[2].toUpperCase();
  }

  // check if there is a draw by seeing if the entire grid is filled
  for (let i = 0; i < 9; i += 1) {
    if (squareValues[i] === '') {
      return state.gameStatus = '';
    }
  }
  return state.gameStatus = 'None';
}

function validEmptySquare(state, squareIndex) {
  const { gameStatus, squareValues } = state;
  // if the game is over then invalidate the turn
  if (gameStatus !== '') return false;
  // if the square is occupied then invalidate the turn
  if (squareValues[squareIndex] !== '') return false;

  return true;
}

/*----------------------------------------------------------------------------*/
/*                           ELEMENT MANIPULATION                             */
/*----------------------------------------------------------------------------*/

function render(state) {
  // render the game
  const { squareValues, gameStatus } = state;
  renderBoard(squareValues);
  renderGameStatus(gameStatus);
  renderNewGameBtn(gameStatus);
  renderGiveUpBtn(gameStatus);
}

function renderBoard(squareValues) {
  // render the board based on the state of the game
  for (let i = 0; i < 9; i += 1) {
    const square = document.getElementById(`square-${i}`);
    let img = document.querySelector(`#square-${i} > img`);

    if (squareValues[i] !== '') {
      // add 'X' or 'O' image if the square is occupied
      if (!img) {
        img = document.createElement('img');
        square.appendChild(img);
      }
      img.src = `https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-${squareValues[i].toLowerCase()}.svg`;
    } else if (img) {
      // remove the image if the square is not occupied
      img.remove();
    }
  }
}

function renderNewGameBtn(gameStatus) {
  // disable button if game is still being played
  document
    .getElementById('new-game')
    .disabled = !gameStatus;
}

function renderGiveUpBtn(gameStatus) {
  // disable button if game is over
  document
    .getElementById('give-up')
    .disabled = !!gameStatus;
}

function renderGameStatus(gameStatus) {
  // show the winner if the game is over
  document
    .getElementById('game-status')
    .innerHTML = !!gameStatus ?  `Winner: ${gameStatus}` : '';
}

/*----------------------------------------------------------------------------*/
/*                     GAME FLOW AND EVENT HANDLING                           */
/*----------------------------------------------------------------------------*/

function attachBoardClick(state) {
  // handle click on the tic tac toe board
  document
    .getElementById('tic-tac-toe-board')
    .addEventListener('click', (e) => {
      // find the index of the selected square
      const squareId = e.target.id;
      if (!squareId || !squareId.startsWith('square-')) return;
      const squareIndex = squareId.split('-')[1];

      // play the turn on the selected square
      playTurn(state, squareIndex);
      // render the board, game status, and buttons
      render(state);
      // save the game state
      saveGameState(state);
    });
}

function attachNewGameBtnClick(state) {
  // handle click on the new game button
  document
    .getElementById('new-game')
    .addEventListener('click', () => {
      // reset the state of the game
      resetGame(state);
      // render the board, game status, and buttons
      render(state);
      // save the game state
      saveGameState(state);
    });
}

function attachGiveUpBtnClick(state) {
  // handle click on the give up button
  document
    .getElementById('give-up')
    .addEventListener('click', () => {
      // the current player gives up and the game is over
      giveUp(state);
      // render the board, game status, and buttons
      render(state);
      // save the game state
      saveGameState(state);
    });
}

function initializeGameBoard() {
  // load the game state
  const state = loadGameState();

  // initial render of the board
  render(state);

  // attach click listeners to the board, new game and give up buttons
  attachBoardClick(state);
  attachNewGameBtnClick(state);
  attachGiveUpBtnClick(state);
}

// initialize the game when the DOM is finish loading
document.addEventListener('DOMContentLoaded', initializeGameBoard);