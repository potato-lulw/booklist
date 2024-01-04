import React, { useContext, useEffect} from 'react'
import { BookContext } from '../context/book-context'



export default function Navbar() {
    const {books} = useContext(BookContext);
    useEffect(() => {
      
    }, [books])
      
    
  return (
    <div className="navbar">
        <h1>Reading List</h1>
        <p>Books pending : {books.length}</p>
    </div>
  )
}
