import FuturamaCharactersApi from '../api/futurama_characters'

function fetchCards () {
  return function (dispatch) {
    FuturamaCharactersApi.getCharacters().then(response => {
      dispatch(updateDeck(response))
    })
  }
}

function startGame () {
  return { type: 'START_GAME' }
}

function nextCard () {
  return { type: 'NEXT_CARD' }
}

function updateDeck (deck) {
  return { type: 'UPDATE_DECK', deck }
}

function drawCard (current) {
  return { type: 'DRAW_CARD', current }
}

function updateGuess (guess) {
  return { type: 'UPDATE_GUESS', guess }
}

function calculateScore () {
  return { type: 'CALCULATE_SCORE' }
}

function updateScore (score) {
  return { type: 'UPDATE_SCORE', score }
}

function showScore () {
  return { type: 'SHOW_SCORE' }
}

function endGame () {
  return { type: 'END_GAME' }
}

export {
  fetchCards,
  updateDeck,
  drawCard,
  nextCard,
  updateScore,
  updateGuess,
  calculateScore,
  startGame,
  showScore,
  endGame
}
