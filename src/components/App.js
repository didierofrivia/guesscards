import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Card from './Card'
import * as actions from '../actions/index'
import '../styles/styles.css';

const mapStateToProps = (state) => {
  return {
    deck: state.deck,
    current: state.current,
    score: state.score,
    guess: state.guess,
    playing: state.playing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    boundActionCreators: bindActionCreators(actions, dispatch)
  }
}

const CardsApp = ({deck, current, score, guess, boundActionCreators}) => {
  const nextVisible = (deck.length > 0)
  const startVisible = (Object.keys(current).length === 0 && current.constructor === Object)
  const startGame = (_ev) => {
    boundActionCreators.startGame()
  }
  const nextCard = (_ev) => {
    boundActionCreators.nextCard()
  }
  const updateGuess = (ev) => {
    boundActionCreators.updateGuess(ev.target.value)
  }
  const showScore = (_ev) => {
    boundActionCreators.showScore()
  }
  const inputProps = {
    value: guess,
    onChange: updateGuess,
    className: (nextVisible && !startVisible) ? '' : 'hidden',
    type: 'text'
  }
  const nextButtonProps = {
    disabled: (guess.length === 0) ? true : false,
    className: (nextVisible && !startVisible) ? '' : 'hidden',
    onClick: nextCard
  }

  const startButtonProps = {
    className: startVisible ? '' : 'hidden',
    onClick: startGame
  }
  const showScoreButtonProps = {
    className: (!startVisible && !nextVisible) ? '' : 'hidden',
    onClick: showScore
  }
  return (
    <div>
      <Card card={current}/>
      <input {...inputProps} />
      <button {...nextButtonProps}> Next ></button>
      <button {...startButtonProps}> Start!</button>
      <button {...showScoreButtonProps}> Show Score!</button>
    </div>
  )
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsApp)



export default hot(module)(App)
