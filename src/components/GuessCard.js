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
  apiUrl,
  deckLegth,
  loading,
  startGame,
  updateGuess,
  nextCard,
  showScore
}: {
  apiUrl: string,
  current: Card,
  guess: string,
  deckLegth: number,
  loading: boolean,
  startGame: () => StartGame,
  updateGuess: () => UpdateGuess,
  nextCard: () => NextCard,
  showScore: () => ShowScore
}) => {
  const nextVisible = (deckLegth > 0)
  const startVisible = (
    Object.keys(current).length === 0 && current.constructor === Object
  )
  const inputProps = {
    value: guess,
    onChange: updateGuess,
    className: (!startVisible) ? 'GuessCard-input' : 'GuessCard-input hidden',
    type: 'text',
    autoFocus: 'autofocus',
    placeHolder: 'Hank'
  }
  const nextButtonProps = {
    disabled: (guess.length === 0),
    className: `GuessCardButton GuessCardButton-next ${(nextVisible && !startVisible) ? '' : 'hidden'}`,
    onClick: nextCard
  }

  const startButtonProps = {
    className: `GuessCardButton GuessCardButton-start ${startVisible ? '' : 'hidden'}`,
    onClick: startGame,
    disabled: loading
  }
  const showScoreButtonProps = {
    className: `GuessCardButton GuessCardButton-score ${(!startVisible && !nextVisible) ? '' : 'hidden'}`,
    onClick: showScore
  }

  return (
    <article className='GuessCard-article'>
      <img className='GuessCard-image' src={`${apiUrl}/images/${current.picture}`} />
      <input className='GuessCard-input' {...inputProps} />
      <div className='GuessCard-buttons'>
        <button {...nextButtonProps}> Next ></button>
        <button {...startButtonProps}> Start!</button>
        <button {...showScoreButtonProps}> Last one!</button>
      </div>
    </article>
  )
}

export default GuessCard
