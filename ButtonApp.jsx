// src/App.js
import React from 'react';
import Button from './components/Button';

const App = () => {
  const handleClick = (message) => {
    alert(message);
  };

  return (
    <div>
      <h1>Reusable Button Component</h1>
      <Button className="default" onClick={() => handleClick('Default Button Clicked')}>
        Default Button
      </Button>
      <Button className="primary" onClick={() => handleClick('Primary Button Clicked')}>
        Primary Button
      </Button>
      <Button className="danger" onClick={() => handleClick('Danger Button Clicked')}>
        Danger Button
      </Button>
    </div>
  );
};

export default App;
