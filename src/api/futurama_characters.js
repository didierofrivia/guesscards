import delay from './delay'

const characters = [
  {
    id: '1',
    name: 'Fry',
    picture: 'fry.png'
  },
  {
    id: '2',
    name: 'Leela',
    picture: 'leela.png'
  },
  {
    id: '3',
    name: 'Bender',
    picture: 'bender.png'
  },
  {
    id: '4',
    name: 'Hubert',
    picture: 'hubert.png'
  },
  {
    id: '5',
    name: 'Zoidberg',
    picture: 'zoidberg.png'
  },
  {
    id: '6',
    name: 'Amy',
    picture: 'amy.png'
  },
  {
    id: '7',
    name: 'Hermes',
    picture: 'hermes.png'
  }
]

class FuturamaCharactersApi {
  static getCharacters () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], characters))
      }, delay)
    })
  }
}

export default FuturamaCharactersApi
