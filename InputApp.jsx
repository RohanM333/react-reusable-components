// src/App.js
import React, { useState } from 'react';
import Input from './components/Input';

const App = () => {
  const [inputValues, setInputValues] = useState({
    text: '',
    password: '',
    email: '',
    number: '',
    date: '',
  });

  const handleInputChange = (type) => (event) => {
    setInputValues({
      ...inputValues,
      [type]: event.target.value,
    });
  };

  return (
    <div>
      <h1>Reusable Input Component</h1>
      <div>
        <h2>Text Input</h2>
        <Input
          type="text"
          value={inputValues.text}
          onChange={handleInputChange('text')}
          placeholder="Enter text"
        />
      </div>
      <div>
        <h2>Password Input</h2>
        <Input
          type="password"
          value={inputValues.password}
          onChange={handleInputChange('password')}
          placeholder="Enter password"
        />
      </div>
      <div>
        <h2>Email Input</h2>
        <Input
          type="email"
          value={inputValues.email}
          onChange={handleInputChange('email')}
          placeholder="Enter email"
        />
      </div>
      <div>
        <h2>Number Input</h2>
        <Input
          type="number"
          value={inputValues.number}
          onChange={handleInputChange('number')}
          placeholder="Enter number"
        />
      </div>
      <div>
        <h2>Date Input</h2>
        <Input
          type="date"
          value={inputValues.date}
          onChange={handleInputChange('date')}
          placeholder="Select date"
        />
      </div>
    </div>
  );
};

export default App;
