import delay from './delay';

const characters = [
  {
    id: '1',
    name: 'Fry',
    picture: ''
  },
  {
    id: '2',
    name: 'Leela',
    picture: ''
  },
  {
    id: '3',
    name: 'Bender',
    picture: ''
  },
  {
    id: '4',
    name: 'Professor Hubert',
    picture: ''
  },
  {
    id: '5',
    name: 'Zoidberg',
    picture: ''
  },
  {
    id: '6',
    name: 'Amy Wong',
    picture: ''
  },
  {
    id: '7',
    name: 'Hermes Conrad',
    picture: ''
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
