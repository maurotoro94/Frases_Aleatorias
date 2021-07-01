import React, { useState, useEffect } from 'react';



const Quotes = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
  
    useEffect(() => {
      getQuote()
    }, []);
  
    const getQuote = () => {
      let url = `https://my-json-server.typicode.com/maurotoro94/Api_frases/db`;
      fetch(url)
        .then(res => res.json())
        .then(data => {
          let dataQuotes = data.quotes;
          let randomNum = Math.floor(Math.random() * dataQuotes.length);
          let randomQuote = dataQuotes[randomNum];
  
          setQuote(randomQuote.quote);
          setAuthor(randomQuote.author);
        })
    }
  
    const handleClick = () => {
      getQuote();
    }
  
    return (
      <div id="quote-box">

        <div id="text"><p>{quote}</p></div>

        <div id="author"><p>{author}</p></div>
  
        <div id="buttons">
          <button onClick={handleClick} id="new-quote">Nueva Frase</button>
        </div>
      </div>
    )
  }
  
  export default Quotes;