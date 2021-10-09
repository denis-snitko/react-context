import React, { useReducer, useEffect } from 'react'

import { reducer, initialState, appContext } from './store/appContext'
import { getData } from './api/api'

import { WrapperOne } from './components/WrapperOne'

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    getData('https://jsonplaceholder.typicode.com/users/')
    .then((data) =>
      dispatch({ type: 'ADD', payload: data || [] }),
    )
  }, [])

  
  const style = {
    'padding': '8px',
  }

  return (
    <div style={style}>
      <appContext.Provider value={{ state, dispatch }}>
        App
        <WrapperOne />
      </appContext.Provider>
    </div>
  )
}
