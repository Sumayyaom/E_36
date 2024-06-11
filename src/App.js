import React, { useState } from 'react';
import Bulb from './bulb';
import './App.css';

function App() {
  const [isOn, setIsOn] = useState(false);

  const toggleBulb = () => {
    setIsOn(!isOn);
  };
  return (
    <div className="App">
      <h1>Bulb On/Off</h1>
      <Bulb isOn={isOn} />
      <button onClick={toggleBulb}>
        Turn {isOn ? 'Off' : 'On'}
      </button>
    </div>
  );
}

export default App;
