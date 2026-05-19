'use client'

import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

interface StoreProviderProp {
  children: React.ReactNode
}

export default function StoreProvider({ children }: StoreProviderProp) {
  return (
    <Provider store={store}>
      { children }
    </Provider>
  )
}
