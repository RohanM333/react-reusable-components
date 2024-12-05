// src/App.js
import React, { useState } from 'react';
import CheckboxGroup from './components/CheckboxGroup';

const App = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <div>
      <h1>Reusable Checkbox Component with Select All</h1>
      <CheckboxGroup options={options} onChange={setSelectedOptions} />
      <p>Selected Options: {selectedOptions.join(', ')}</p>
    </div>
  );
};

export default App;
