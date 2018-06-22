// @flow

import React from 'react'
import { Provider } from 'react-redux'
import App from './App'

import type { Store } from 'redux'

export default function Root (props: {store: Store, apiUrl: string}) {
  const { store, apiUrl } = props

  return (
    <Provider store={store}>
      <App apiUrl={apiUrl} store={store} />
    </Provider>
  )
}
