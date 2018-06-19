import React from 'react'

const Card = ({
  current,
  guess,
  deck,
  loading,
  startGame,
  updateGuess,
  nextCard,
  showScore
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
    disabled: (guess.length === 0) ? true : false,
    className: (nextVisible && !startVisible) ? 'GuessCard-button' : 'GuessCard-button hidden',
    onClick: nextCard
  }

  const startButtonProps = {
    className: startVisible ? 'GuessCard-button' : 'GuessCard-button hidden',
    onClick: startGame,
    disabled: loading ? true : false
  }
  const showScoreButtonProps = {
    className: (!startVisible && !nextVisible) ? 'GuessCard-button' : 'GuessCard-button hidden',
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

export default Card
