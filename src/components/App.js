import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Card from './Card'
import * as actions from '../actions/index'

const mapStateToProps = (state) => {
  return {
    deck: state.deck,
    current: state.current,
    score: state.score
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    boundActionCreators: bindActionCreators(actions, dispatch)
  }
}

const card = {name: 'fry'}
const CardsApp = ({deck, current, score, boundActionCreators}) => {
  return (
    <div>
      <Card card={current}/>
      <button onClick={() => boundActionCreators.nextCard(deck)} />
    </div>
  )
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsApp)



export default hot(module)(App)
