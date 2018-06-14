import { combineReducers } from 'redux'
import { initialState } from './initialState'

function createReducer (initialState, handlers) {
  return function reducer (state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

function updateDeck (state, action) {
  return Object.assign([], state.cards, action.cards)
}

function drawCard (state, action) {
  return action.card
}

const DeckReducer = createReducer(initialState.deck, {
  'UPDATE_DECK': updateDeck
})

const CurrentCardReducer = createReducer(initialState.current, {
  'DRAW_CARD': drawCard
})

const rootReducer = combineReducers({
  deck: DeckReducer,
  current: CurrentCardReducer
})

export default rootReducer
