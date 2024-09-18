// src/components/QuoteGenerator.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';


const Generator=()=>{
  const [quote,setQuote]=useState('');
  const [author,setAuthor]=useState('');

  // Fetch a random quote from the API
  const fetchQuote=async()=>{
    try{
      const response=await axios.get('https://dummyjson.com/quotes/random');
      const {quote,author}=response.data;
      setQuote(quote);
      setAuthor(author);
    }catch(error){
      console.error("Error fetching the quote: ",error);
    }
  };

  // Fetch an initial quote when the component mounts
  useEffect(()=>{
    fetchQuote();
  },[]);

  console.log(quote);
  console.log(author);
  

  return (
    <div className='App'>
        <div className='container'>
          <h1 style={{textAlign:'center'}}>Quote Of The Day</h1>
          <p style={{fontStyle:'italic',textAlign:'center'}}>{quote}</p>
          <p style={{fontWeight:'bold',textAlign:'end',marginRight:'100px'}}>-{author}</p>
          <button onClick={fetchQuote}>
          <FontAwesomeIcon icon={faSync} size="2x" />
          </button>
        </div>
    </div>
  );
};

export default Generator;
