// src/App.js
import React, { useState } from 'react';
import RadioButton from './components/RadioButton';

const App = () => {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');

  const options1 = [
    { label: 'Option 1A', value: '1A' },
    { label: 'Option 1B', value: '1B' },
    { label: 'Option 1C', value: '1C' },
  ];

  const options2 = [
    { label: 'Option 2A', value: '2A' },
    { label: 'Option 2B', value: '2B' },
    { label: 'Option 2C', value: '2C' },
  ];

  return (
    <div>
      <h1>Reusable Radio Button Component</h1>
      <div>
        <h2>First Radio Group</h2>
        <RadioButton
          name="group1"
          options={options1}
          selectedValue={selectedOption1}
          onChange={setSelectedOption1}
        />
        <p>Selected: {selectedOption1}</p>
      </div>
      <div>
        <h2>Second Radio Group</h2>
        <RadioButton
          name="group2"
          options={options2}
          selectedValue={selectedOption2}
          onChange={setSelectedOption2}
        />
        <p>Selected: {selectedOption2}</p>
      </div>
    </div>
  );
};

export default App;
