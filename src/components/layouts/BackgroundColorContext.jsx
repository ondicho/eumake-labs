// BackgroundColorContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';

const BackgroundColorContext = createContext();

export const BackgroundColorProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Set a default color

  return (
    <BackgroundColorContext.Provider value={{ backgroundColor }}>
      {children}
    </BackgroundColorContext.Provider>
  );
};

export const useBackgroundColor = () => {
  const context = useContext(BackgroundColorContext);
  if (!context) {
    throw new Error('useBackgroundColor must be used within a BackgroundColorProvider');
  }
  return context;
};
