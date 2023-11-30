import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Define your animations using keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

// Define a map of animations
const animations = {
  fadeIn,
  slideIn,
  // Add more animations as needed
};

// Define a list of fonts
const fonts = ['Arial, sans-serif', 'Times New Roman, serif', 'Courier New, monospace', 'Verdana, sans-serif'];

const TemplateContainer = styled.div`
  width: 200px;
  height: 100px;
  border: 1px solid #ccc;
  margin: 20px;
  padding: 10px;
  animation: ${({ selectedAnimation }) => selectedAnimation} 1s ease-in-out;
  font-family: ${({ selectedFont }) => selectedFont};
`;

const TemplateMaker = () => {
  const [selectedAnimation, setSelectedAnimation] = useState(null);
  const [selectedFont, setSelectedFont] = useState('');

  const handleAnimationChange = (animation) => {
    setSelectedAnimation(animation);
  };

  const handleFontChange = (font) => {
    setSelectedFont(font);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission, e.g., update a backend with the selected options
  };

  return (
    <div>
      <h2>Template Maker</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="animation">Select Animation:</label>
          <select
            id="animation"
            onChange={(e) => handleAnimationChange(e.target.value)}
          >
            <option value="">None</option>
            {Object.keys(animations).map((animation) => (
              <option key={animation} value={animation}>
                {animation}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="font">Select Font:</label>
          <select
            id="font"
            onChange={(e) => handleFontChange(e.target.value)}
          >
            <option value="">Default</option>
            {fonts.map((font) => (
              <option key={font} value={font}>
                {font}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <TemplateContainer selectedAnimation={animations[selectedAnimation]} selectedFont={selectedFont}>
        Your Template
      </TemplateContainer>
    </div>
  );
};

export default TemplateMaker;
