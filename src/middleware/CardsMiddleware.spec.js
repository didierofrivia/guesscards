import { cardsMiddleware } from './CardsMiddleware'
import { initialState } from '../reducers/initialState'

const create = () => {
  const store = {
    getState: jest.fn(() => (Object.assign({}, initialState, {guess: 'bender'}))),
    dispatch: jest.fn()
  }
  const next = jest.fn()
  const invoke = (action) => cardsMiddleware(store)(next)(action)

  return {store, next, invoke}
}

describe('PolicyChain Middleware', () => {
  it('Passes through non of middleware actions', () => {
    const { invoke, store, next } = create()
    const action = {type: 'TEST'}
    invoke(action)

    expect(next).toHaveBeenCalledWith(action)
  })

  it('Dispatches FETCH_CARDS_SUCCESS actions', () => {
    const { invoke, store, next } = create()
    invoke({
      type: 'FETCH_CARDS_SUCCESS',
      payload: [{id: '0', name: 'Marvin', picture: 'marvin.png'}]
    })

    expect(store.dispatch.mock.calls[0][0].type).toBe('UPDATE_DECK')
    expect(store.dispatch.mock.calls[0][0].deck).toEqual([{id: '0', name: 'Marvin', picture: 'marvin.png'}])

    expect(store.dispatch.mock.calls[1][0].type).toBe('START_GAME')

    expect(store.dispatch.mock.calls[2][0].type).toBe('TOGGLE_LOADING')
    expect(store.dispatch.mock.calls[2][0].loading).toBe(false)

  })

  it('Dispatches CALCULATE_SCORE action', () => {
    const { invoke, store, next } = create()
    invoke({type: 'CALCULATE_SCORE'})

    expect(store.dispatch.mock.calls[0][0].type).toBe('UPDATE_SCORE')
    expect(store.dispatch.mock.calls[0][0].score).toEqual(10)
  })

  it('Dispatches START_GAME actions', () => {
    const { invoke, store, next } = create()
    invoke({type: 'START_GAME'})

    expect(store.dispatch.mock.calls[0][0].type).toBe('DRAW_CARD')
    expect(store.dispatch.mock.calls[1][0].type).toBe('UPDATE_DECK')

  })

  it('Dispatches NEXT_CARD actions', () => {
    const { invoke, store, next } = create()
    invoke({type: 'NEXT_CARD'})

    expect(store.dispatch.mock.calls[0][0].type).toBe('CALCULATE_SCORE')
    expect(store.dispatch.mock.calls[1][0].type).toBe('UPDATE_GUESS')
    expect(store.dispatch.mock.calls[2][0].type).toBe('DRAW_CARD')
    expect(store.dispatch.mock.calls[3][0].type).toBe('UPDATE_DECK')
  })

  it('Dispatches SHOW_SCORE actions', () => {
    const { invoke, store, next } = create()
    invoke({type: 'SHOW_SCORE'})

    expect(store.dispatch.mock.calls[0][0].type).toBe('CALCULATE_SCORE')
    expect(store.dispatch.mock.calls[1][0].type).toBe('END_GAME')
  })
})
