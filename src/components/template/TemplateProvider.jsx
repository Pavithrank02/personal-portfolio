import React, { createContext, useContext, useState } from 'react';

// Create a context
const TemplateContext = createContext();

// Create a provider component
export const TemplateProvider = ({ children }) => {
  const [selectedAnimation, setSelectedAnimation] = useState(null);
  const [selectedFont, setSelectedFont] = useState('');

  const setAnimation = (animation) => {
    setSelectedAnimation(animation);
  };

  const setFont = (font) => {
    setSelectedFont(font);
  };

  return (
    <TemplateContext.Provider value={{ selectedAnimation, selectedFont, setAnimation, setFont }}>
      {children}
    </TemplateContext.Provider>
  );
};

// Create a hook to use the context
export const useTemplate = () => {
  const context = useContext(TemplateContext);
  if (!context) {
    throw new Error('useTemplate must be used within a TemplateProvider');
  }
  return context;
};
