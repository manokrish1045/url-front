import React, { useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleUrlShorten = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/shorten', { originalUrl });
      setShortUrl(response.data.shortUrl);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container1'>
      <h1 >URL Shortener</h1>
      <input
        type="text"
        placeholder="Enter a URL"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
      />
      <button onClick={handleUrlShorten}>Shorten</button>
      {shortUrl && (
        <div>
          <p>Short URL:</p>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
