import { createContext } from 'react'

export const appContext = createContext()

export const initialState = []

export function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...action.payload]

    case 'DELETE': {
      const id = action.payload
      return state.filter(item => item.id !== id)
    }

    default:
      return state
  }
}
