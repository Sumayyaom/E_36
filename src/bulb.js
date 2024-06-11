import React from 'react';

const Bulb = ({ isOn }) => {
  const bulbStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: isOn ? 'yellow' : 'blue',
    margin: '20px auto',
  };

  return <div style={bulbStyle}></div>;
};

export default Bulb;
