import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import GuessCard from './GuessCard'

Enzyme.configure({ adapter: new Adapter() })

describe('GuessCard Component', () => {
  function setup () {

    const props = {
      apiUrl: 'http://fancyapi.rocks',
      current: { id: '0', name: 'Jake the Dog', picture: 'jake.png' },
      guess: 'Finn',
      deckLegth: 7,
      loading: false,
      startGame: jest.fn(),
      updateGuess: jest.fn(),
      nextCard: jest.fn(),
      showScore: jest.fn()
    }

    const GuessCardWrapper = mount(<GuessCard {...props} />)

    return {
      props,
      GuessCardWrapper
    }
  }

  it('should render self', () => {
    const {GuessCardWrapper} = setup()
    expect(GuessCardWrapper.find('.GuessCard-container').exists()).toEqual(true)
    expect(GuessCardWrapper.find('.GuessCard-image').prop('src')).toEqual('http://fancyapi.rocks/images/jake.png')
    expect(GuessCardWrapper.find('input').hasClass('GuessCard-input')).toEqual(true)
    expect(GuessCardWrapper.find('.GuessCard-buttons').children()).toHaveLength(3)
  })

  it('should have the right action buttons', () => {
    const {GuessCardWrapper, props} = setup()

    const startButton = GuessCardWrapper.find('.GuessCardButton-start')
    expect(startButton.text()).toBe(' Start!')
    startButton.simulate('click')
    expect(props.startGame.mock.calls.length).toBe(1)

    const nextButton = GuessCardWrapper.find('.GuessCardButton-next')
    expect(nextButton.text()).toBe(' Next >')
    nextButton.simulate('click')
    expect(props.nextCard.mock.calls.length).toBe(1)

    const scoreButton = GuessCardWrapper.find('.GuessCardButton-score')
    expect(scoreButton.text()).toBe(' Last one!')
    scoreButton.simulate('click')
    expect(props.showScore.mock.calls.length).toBe(1)
  })
})
