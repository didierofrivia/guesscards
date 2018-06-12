import delay from './delay';

const characters = [
  {
    id: '1',
    name: 'Fry',
    picture: 'images/fry.png'
  },
  {
    id: '2',
    name: 'Leela',
    picture: 'images/leela.png'
  },
  {
    id: '3',
    name: 'Bender',
    picture: 'images/bender.png'
  },
  {
    id: '4',
    name: 'Professor Hubert',
    picture: 'images/hubert.png'
  },
  {
    id: '5',
    name: 'Zoidberg',
    picture: 'images/zoidberg.png'
  },
  {
    id: '6',
    name: 'Amy Wong',
    picture: 'images/amy.png'
  },
  {
    id: '7',
    name: 'Hermes Conrad',
    picture: 'images/hermes.png'
  }
]

class FuturamaCharactersApi {
  static getCharacters() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], characters))
      }, delay)
    });
  }
}

export default FuturamaCharactersApi;
