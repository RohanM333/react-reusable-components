// src/components/RadioButton.js
import React from 'react';

const RadioButton = ({ name, options, selectedValue, onChange }) => {
  return (
    <div>
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
