import React, { createContext , useReducer, useEffect} from 'react'

import BookReducer from '../reducers/book-reducer';

export const BookContext = createContext();

export default function BookContextProvider  ({children}) {
    const [books, dispatch] = useReducer(BookReducer, [], () => {
      const result = localStorage.getItem('books');
      return result? JSON.parse(result): [];
    });
    useEffect(() => {
      localStorage.setItem('books', JSON.stringify(books));
    }, [books])

  return (
    <BookContext.Provider value={{books, dispatch}}>
        {children}
    </BookContext.Provider>
  )
}
