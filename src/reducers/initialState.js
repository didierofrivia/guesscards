// @flow

export type Card = {
  +id: string,
  +name: string,
  +picture: string,
}

export type State = {
  +deck: Array<Card>,
  +current: Card,
  +guess: string,
  +score: number,
  +loading: boolean,
  +finished: boolean
}

export const initialState: State = {
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
}
