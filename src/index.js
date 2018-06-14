import React from 'react'
import { render } from 'react-dom'
import Root from './components/Root'
import configureStore from './store/configureStore'
import { initialState } from './reducers/initialState'
import * as actions from './actions/index'

const store = configureStore(initialState)

render(<Root store={store} />, document.getElementById('app'))
