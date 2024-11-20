import React from 'react'
import { useState } from 'react';
import axios from 'axios';
const Add = () => {
  const [book,setBook]=useState();


  const changeBook=(e)=>{
    setBook(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  const addtoDataBase = async e=>{
    try{
      await axios.post("http://localhost:8989/books",book);
      
    }catch(err){
      console.log(err);
    }
  }

  
  return (
    
    <div>
    <input type='text' placeholder='title'  onChange={changeBook}name='title' />
    <input type='text' placeholder='desc' onChange={changeBook} name='desc' />
    <input type='number' placeholder='price' name='price' onChange={changeBook} />
    <input type='text' placeholder='Cover' name='cover' onChange={changeBook} />
    <button onClick={addtoDataBase}>Add</button>
    </div>
    
    
  )
}

export default Add