// @flow

import React from 'react'
import { Provider } from 'react-redux'
import App from './App'

import type { Store } from 'redux'

export default function Root (props: {store: Store}) {
  const { store } = props

  return (
    <Provider store={store}>
      <App store={store} />
    </Provider>
  )
}
