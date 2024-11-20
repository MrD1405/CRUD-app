import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
const Books = () => {

    const [books,setBooks]=useState([]);
    useEffect(()=>{
        const fetchAllBooks= async ()=>{
            try{
            const res= await axios.get("http://localhost:8989/books");
            setBooks(res.data);
            }
            catch(err){
                console.log(err);
            }
            
        }
        fetchAllBooks();
    },[])

    const handleUpdate=(id)
  return (
    <div >
    <div id='body'>
        <h1>Dushyant book shop </h1>
    </div>
    <div className="books">
        {books.map((book)=>(
            <div className="book" key={book.id}>
                {book.cover && <img src={book.cover} alt="/" />}
                <h2>{book.title}</h2>
                <p>{book.desc}</p>
                <span>{book.price}</span>
                <button onClick={handleUpdate()}>Update</button>
                <button onClick={handleDelete()}>Delete</button>
            </div>

 
        ))}
    </div >
    <button id='body'><Link to="/add">add book</Link></button>
    </div >
  )
}

export default Books