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

function updateObject (oldObj, newObj) {
  return Object.assign({}, oldObj, newObj)
}

function updateScore (state, action) {
  return updateObject(state, {score: state.score + action.score})
}

const rootReducer = createReducer(initialState, {
  'UPDATE_DECK': (state, action) => updateObject(state, {deck: action.deck}),
  'DRAW_CARD': (state, action) => updateObject(state, {current: action.current}),
  'UPDATE_SCORE': updateScore,
  'UPDATE_GUESS': (state, action) => updateObject(state, {guess: action.guess}),
  'TOGGLE_LOADING': (state, action) => updateObject(state, {loading: action.loading})
})

export default rootReducer
