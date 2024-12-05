// src/components/CheckboxGroup.js
import React, { useState } from 'react';

const CheckboxGroup = ({ options, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (value) => {
    const newSelectedOptions = selectedOptions.includes(value)
      ? selectedOptions.filter(option => option !== value)
      : [...selectedOptions, value];

    setSelectedOptions(newSelectedOptions);
    onChange(newSelectedOptions);
  };

  const handleSelectAllChange = (isChecked) => {
    const newSelectedOptions = isChecked ? options.map(option => option.value) : [];
    setSelectedOptions(newSelectedOptions);
    onChange(newSelectedOptions);
  };

  const isAllSelected = selectedOptions.length === options.length;

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isAllSelected}
          onChange={(e) => handleSelectAllChange(e.target.checked)}
        />
        Select All
      </label>
      {options.map(option => (
        <label key={option.value}>
          <input
            type="checkbox"
            value={option.value}
            checked={selectedOptions.includes(option.value)}
            onChange={() => handleCheckboxChange(option.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default CheckboxGroup;
