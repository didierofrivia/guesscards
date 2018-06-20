import {
  updateScore,
  drawCard,
  updateDeck,
  calculateScore,
  updateGuess,
  endGame
} from '../actions/index'

function calculate (cardName, guess) {
  return (cardName.toUpperCase() === guess.toUpperCase()) ? 10 : 0
}

function dealGame (deck, dispatch) {
  var deckCopy = Object.assign([], deck) // TODO: find a better way of doing this
  dispatch(drawCard(deckCopy.pop()))
  dispatch(updateDeck(deckCopy))
}

const cardsMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  const state = getState()
  const deck = state.deck
  switch (action.type) {
    case 'CALCULATE_SCORE':
      dispatch(updateScore(calculate(state.current.name, state.guess)))
      break
    case 'START_GAME':
      dealGame(deck, dispatch)
      break
    case 'NEXT_CARD':
      dispatch(calculateScore())
      dispatch(updateGuess(''))
      dealGame(deck, dispatch)
      break
    case 'SHOW_SCORE':
      dispatch(calculateScore())
      dispatch(endGame())
      break
    default:
      return next(action)
  }
}

export { cardsMiddleware }
