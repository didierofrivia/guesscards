// @flow

import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import GuessCard from './GuessCard'
import * as actions from '../actions/index'
import { addHiddenClass } from '../utils/index'
import 'reset-css'
import '../styles/styles.scss'

import type { State, Card } from '../reducers/initialState'
import type { Action, Dispatch } from '../actions/index'

const mapStateToProps = (state: State, props: {apiUrl: string}) => {
  const {apiUrl} = props
  return {
    apiUrl,
    deck: state.deck,
    current: state.current,
    score: state.score,
    guess: state.guess,
    loading: state.loading,
    finished: state.finished
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    boundActionCreators: bindActionCreators(actions, dispatch)
  }
}

const GuessCardsApp = ({
  apiUrl,
  deck,
  current,
  score,
  guess,
  loading,
  finished,
  boundActionCreators
}: {
  apiUrl: string,
  deck: Array<Card>,
  current: Card,
  score: number,
  guess: string,
  loading: boolean,
  finished: boolean,
  boundActionCreators: () => Action
}) => {
  const cardProps = {
    apiUrl,
    current,
    deckLegth: deck.length,
    loading,
    guess,
    startGame: (_ev) => boundActionCreators.startGame(),
    nextCard: (_ev) => boundActionCreators.nextCard(),
    updateGuess: (ev) => boundActionCreators.updateGuess(ev.target.value),
    showScore: (_ev) => boundActionCreators.showScore()
  }

  const loadingImageProps = {
    className: addHiddenClass(loading, 'GuessCards-loading'),
    src: require('../images/loading.gif')
  }

  const scoreProps = {
    className: addHiddenClass(finished, 'GuessCards-score-container')
  }

  const containerProps = {
    className: addHiddenClass((!loading && !finished), 'GuessCard-container')
  }

  return (
    <div className='GuessCards-container'>
      <div className="GuessCards-loading-container">
        <img {...loadingImageProps} />
      </div>
      <div {...containerProps}>
        <GuessCard {...cardProps} />
      </div>
      <div {...scoreProps}>
        <p className='GuessCards-score'>
          Your score is: <span>{score}</span>
        </p>
      </div>
    </div>
  )
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(GuessCardsApp)

export default hot(module)(App)
