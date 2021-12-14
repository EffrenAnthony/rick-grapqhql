import React, { useContext, useReducer } from 'react'

export const RickAppContext = React.createContext({})

export function useRickAppContext() {
  return useContext(RickAppContext)
}

const initState = {
  characters: []
}

const RickAppReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CHARACTER':
      return {
        ...state,
        character: {...action.payload}
      }
    case 'SET_CHARACTER_LIST':
      return {
        ...state,
        characters: [...action.payload]
      }
    default:
      break;
  }
}

export const RickAppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(RickAppReducer, initState)
  
  const value = {
    state,
    dispatch
  }

  return (
    <RickAppContext.Provider value={value}>
      {children}
    </RickAppContext.Provider>
  )
}