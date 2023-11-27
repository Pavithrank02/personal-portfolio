import React, { useState } from 'react';

const FontSelector = ({ selectedFont, onSelectFont }) => {
  const fontOptions = [
    'Arial',
    'Times New Roman',
    'Verdana',
    'Georgia',
    // Add more font options as needed
  ];

  const handleFontChange = (e) => {
    const newFont = e.target.value;
    onSelectFont(newFont);
  };

  return (
    <div>
      <label htmlFor="fontSelector">Select Font:</label>
      <select
        id="fontSelector"
        value={selectedFont}
        onChange={handleFontChange}
      >
        {fontOptions.map((font, index) => (
          <option key={index} value={font}>
            {font}
          </option>
        ))}
      </select>

      <div style={{ marginTop: '20px', fontFamily: selectedFont }}>
        {/* Text to preview selected font */}
        <p>This is a sample text with the selected font.</p>
      </div>
    </div>
  );
};

export default FontSelector;
