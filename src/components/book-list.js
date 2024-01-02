import React, { useContext } from 'react'
import { BookContext } from '../context/book-context'
import BookDetails from './book-details';
export default function BookList() {

    const {books} = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
        <ul>
            {books.map(book =>{
                return (<BookDetails book = {book} key = {book.id}/>)
            })}
        </ul>
    </div>
  ) : (
    <div className="empty">No Books to read!</div>
  )
}
