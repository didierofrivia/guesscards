import React from 'react'

const Card = ({card}) => {
  return (
    <div>
      <img width='500' src={require(`../images/${card.picture}`)} />
      <h1>{card.name}</h1>
    </div>
  )
}

export default Card
