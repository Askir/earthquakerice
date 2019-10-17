import React, { useState, useEffect } from 'react';
import './App.scss';
import FeedService from './FeedService';
import QuakeList from './QuakeList';
import Map from './Map';

function App() {
  const [earthquakes, setEathquakes] = useState([]);
  useEffect(() => {
    FeedService.retrieveDaily().then((data) => {
      setEathquakes(data.features);
    });
  }, []);

  return (
    <div className="App">
      <Map earthquakes={earthquakes} />
      <QuakeList earthquakes={earthquakes} />
    </div>
  );
}

export default App;
