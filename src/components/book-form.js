import React, { useContext, useState } from 'react'
import { BookContext } from '../context/book-context'


export default function BookForm() {

    const {addBook} = useContext(BookContext);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleClick = (e) => {

        e.preventDefault();
        addBook(title, author);
        setTitle("");
        setAuthor("");
    }
  return (
    <form >
        <input type="text" placeholder='Book Title' name="title" value={title} required onChange={(e)=>{setTitle(e.target.value)} }/>
        <input type="text" placeholder='Book Author' name="author" value={author} required onChange={(e)=>{setAuthor(e.target.value)}}/>
        <input type="submit" value="add book" onClick={handleClick} />
    </form>
  )
}
