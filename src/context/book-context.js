import React, { createContext , useState} from 'react'
import {v1 as uuid} from 'uuid'

export const BookContext = createContext();

export default function BookContextProvider  ({children}) {
    const [books, setBooks] = useState([{title:"Whispers of Eternity", author: "ma drilla", id: 1},{title:"The Great Gatsby", author: "ma drilla", id: 2},{title:"Echoes in the Mist", author: "ma drilla", id: 3},{title:"The Enigma Chronicle", author: "ma drilla", id: 4}])

    const addBook = (title, author) => {
        setBooks([
            ...books, 
            {title: title, author: author, id:uuid()}
        ])
    }

    const removeBook = (id) => {
        setBooks(
            books.filter(book => {
                return (book.id !== id)
            })
        )
    }
  return (
    <BookContext.Provider value={{books, addBook, removeBook}}>
        {children}
    </BookContext.Provider>
  )
}
