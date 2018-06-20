// @flow

import { initialState } from './initialState'

import type { State } from './initialState'
import type {
  ReducerAction,
  UpdateDeck,
  DrawCard,
  UpdateScore,
  UpdateGuess,
  ToggleLoading,
  EndGame
} from '../actions/index'

function createReducer (initialState: State, handlers: any): (State, ReducerAction) => State {
  return function reducer (state: State = initialState, action: ReducerAction): State {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

function updateObject (oldObj: Object, newObj: Object): Object {
  return Object.assign({}, oldObj, newObj)
}

const rootReducer = createReducer(initialState, {
  'UPDATE_DECK': (state: State, action: UpdateDeck) => updateObject(state, {deck: action.deck}),
  'DRAW_CARD': (state: State, action: DrawCard) => updateObject(state, {current: action.current}),
  'UPDATE_SCORE': (state: State, action: UpdateScore) => updateObject(state, {score: state.score + action.score}),
  'UPDATE_GUESS': (state: State, action: UpdateGuess) => updateObject(state, {guess: action.guess}),
  'TOGGLE_LOADING': (state: State, action: ToggleLoading) => updateObject(state, {loading: action.loading}),
  'END_GAME': (state: State, action: EndGame) => updateObject(state, {finished: true})
})

export default rootReducer
