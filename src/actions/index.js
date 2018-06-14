import FuturamaCharactersApi from '../api/futurama_characters'

function fetchCards () {
  return function (dispatch) {
    FuturamaCharactersApi.getCharacters().then(response => {
      dispatch(updateDeck(response))
    })
  }
}

function nextCard (deck) {
  const tmp = Object.assign([], deck)
  return function (dispatch) {
    dispatch(drawCard(tmp.pop()))
    dispatch(updateDeck(tmp))
  }
}

function updateDeck (cards) {
  return { type: 'UPDATE_DECK', cards }
}

function drawCard (card) {
  return { type: 'DRAW_CARD', card }
}

export {
  fetchCards,
  updateDeck,
  drawCard,
  nextCard
}
