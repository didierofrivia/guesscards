// @flow

import {
  updateScore,
  drawCard,
  updateDeck,
  calculateScore,
  updateGuess,
  endGame
} from '../actions/index'

import type { Dispatch, GetState, MiddlewareAction } from '../actions/index'
import type { Card } from '../reducers/initialState'

function calculate (cardName: string, guess: string) {
  return (cardName.toUpperCase() === guess.toUpperCase()) ? 10 : 0
}

function dealGame (deck: Array<Card>, dispatch: Dispatch) {
  var deckCopy = deck.slice()
  dispatch(drawCard(deckCopy.pop()))
  dispatch(updateDeck(deckCopy))
}

const cardsMiddleware = ({ dispatch, getState }: { dispatch: Dispatch, getState: GetState}) => (next: any) => (action: MiddlewareAction) => {
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
