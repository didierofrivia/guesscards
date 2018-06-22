import rootReducer from './index'

describe('RootReducer', () => {
  it('should return the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual({
      deck: [],
      current: {
        id: '0',
        name: 'Bender',
        picture: 'bender.png'
      },
      guess: '',
      score: 0,
      loading: true,
      finished: false
    })
  })

  it('should update the deck', () => {
    const deck = [
      {id: '0', name: 'Rick', picture: 'rick.png'},
      {id: '1', name: 'Morty', picture: 'morty.png'}
    ]
    expect(rootReducer(undefined, { type: 'UPDATE_DECK', deck })).toEqual(
      {
        deck,
        current: {
          id: '0',
          name: 'Bender',
          picture: 'bender.png'
        },
        guess: '',
        score: 0,
        loading: true,
        finished: false
      }
    )
  })

  it('should draw a card', () => {
    const current = {id: '0', name: 'Rick', picture: 'rick.png'}

    expect(rootReducer(undefined, { type: 'DRAW_CARD', current })).toEqual(
      {
        deck: [],
        current: {
          id: '0',
          name: 'Rick',
          picture: 'rick.png'
        },
        guess: '',
        score: 0,
        loading: true,
        finished: false
      }
    )
  })

  it('should update the score', () => {
    const score = 42

    expect(rootReducer(undefined, { type: 'UPDATE_SCORE', score })).toEqual(
      {
        deck: [],
        current: {
          id: '0',
          name: 'Bender',
          picture: 'bender.png'
        },
        guess: '',
        score: 42,
        loading: true,
        finished: false
      }
    )
  })

  it('should update the guess', () => {
    const guess = 'Birdperson'

    expect(rootReducer(undefined, { type: 'UPDATE_GUESS', guess })).toEqual(
      {
        deck: [],
        current: {
          id: '0',
          name: 'Bender',
          picture: 'bender.png'
        },
        guess: 'Birdperson',
        score: 0,
        loading: true,
        finished: false
      }
    )
  })

  it('should toggle loading', () => {
    const loading = false

    expect(rootReducer(undefined, { type: 'TOGGLE_LOADING', loading })).toEqual(
      {
        deck: [],
        current: {
          id: '0',
          name: 'Bender',
          picture: 'bender.png'
        },
        guess: '',
        score: 0,
        loading: false,
        finished: false
      }
    )
  })

  it('should end the game', () => {
    const finished = true

    expect(rootReducer(undefined, { type: 'END_GAME', finished })).toEqual(
      {
        deck: [],
        current: {
          id: '0',
          name: 'Bender',
          picture: 'bender.png'
        },
        guess: '',
        score: 0,
        loading: true,
        finished: true
      }
    )
  })
})
