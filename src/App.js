import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import FeedService from './FeedService';
import QuakeList from './QuakeList';

function App() {
  const [earthquakes, setEathquakes] = useState([]);
  useEffect(() => {
    FeedService.retrieveDaily().then((data) => {
      console.log(data);
      console.log(data.type);
      setEathquakes(data.features);
      console.log(earthquakes);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <QuakeList earthquakes={earthquakes} />
    </div>
  );
}

export default App;
