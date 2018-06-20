// @flow

import React from 'react'

import type { Card } from '../reducers/initialState'
import type {
  StartGame,
  UpdateGuess,
  NextCard,
  ShowScore
} from '../actions/index'

const GuessCard = ({
  current,
  guess,
  deck,
  loading,
  startGame,
  updateGuess,
  nextCard,
  showScore
}: {
  current: Card,
  guess: string,
  deck: Array<Card>,
  loading: boolean,
  startGame: () => StartGame,
  updateGuess: () => UpdateGuess,
  nextCard: () => NextCard,
  showScore: () => ShowScore
}) => {
  const nextVisible = (deck.length > 0)
  const startVisible = (
    Object.keys(current).length === 0 && current.constructor === Object
  )
  const inputProps = {
    value: guess,
    onChange: updateGuess,
    className: (!startVisible) ? 'GuessCard-input' : 'GuessCard-input hidden',
    type: 'text'
  }
  const nextButtonProps = {
    disabled: (guess.length === 0),
    className: `GuessCard-button ${(nextVisible && !startVisible) ? '' : 'hidden'}`,
    onClick: nextCard
  }

  const startButtonProps = {
    className: `GuessCard-button ${startVisible ? '' : 'hidden'}`,
    onClick: startGame,
    disabled: loading
  }
  const showScoreButtonProps = {
    className: `GuessCard-button ${(!startVisible && !nextVisible) ? '' : 'hidden'}`,
    onClick: showScore
  }

  return (
    <div className='GuessCard-container'>
      <img className='GuessCard-image' src={require(`../images/${current.picture}`)} />
      <input {...inputProps} />
      <div className='GuessCard-buttons'>
        <button {...nextButtonProps}> Next ></button>
        <button {...startButtonProps}> Start!</button>
        <button {...showScoreButtonProps}> Last one!</button>
      </div>
    </div>
  )
}

export default GuessCard
