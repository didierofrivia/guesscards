import React from 'react'
import { render } from 'react-dom'
import Root from './components/Root'
import configureStore from './store/configureStore'
import { initialState } from './reducers/initialState'
import { fetchCards } from './actions/index'

const store = configureStore(initialState)
const apiUrl = process.env.API_URL

store.dispatch(fetchCards(apiUrl))

render(<Root apiUrl={apiUrl} store={store} />, document.getElementById('app'))
