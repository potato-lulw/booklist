import React, { createContext , useReducer} from 'react'

import BookReducer from '../reducers/book-reducer';

export const BookContext = createContext();

export default function BookContextProvider  ({children}) {
    const [books, dispatch] = useReducer(BookReducer, []);

    

    
  return (
    <BookContext.Provider value={{books, dispatch}}>
        {children}
    </BookContext.Provider>
  )
}
