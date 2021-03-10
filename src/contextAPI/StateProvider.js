import { createContext, useContext, useReducer } from 'react';

console.log(createContext());

// Prepares the dataLayer
 const StateContext = createContext();
  
 console.log('StateContext.Provider>>', StateContext.Provider)

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
  )
}

console.log('StateProvider>>', StateProvider)

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);