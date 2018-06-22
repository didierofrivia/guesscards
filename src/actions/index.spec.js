import { fetchCards } from './index'

describe('GuessCards actions', () => {
  it('should create an action to use the redux api middleware', () => {
    expect(fetchCards('http://fancyapi')).toEqual({
      '@@redux-api-middleware/RSAA': {
        endpoint: 'http://fancyapi/characters',
        method: 'GET',
        types: [
          {type: 'FETCH_CARDS_REQUEST'},
          {type: 'FETCH_CARDS_SUCCESS'},
          {type: 'FETCH_CARDS_ERROR'}
        ]
      }
    })
  })
})
