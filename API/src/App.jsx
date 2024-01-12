import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [API, setAPI] = useState([]);

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books", {
      headers: { 'Authorization': 'whatever-you-want' }
    })
      .then((response) => {
        const data = response.data.books;
        setAPI(data);
      });
  }, []); 

  return (
    <div>
      {API.map((item) => (~
        <div className='box' key={item.id}>
          <div className='box2'>
            <h3>{item.title}</h3>
            <img src={item.imageLinks.smallThumbnail} alt={item.title} />
            <div>{item.authors}</div>
          </div>
          <article>{item.description}</article>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default App;
