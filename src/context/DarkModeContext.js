// src/context/DarkModeContext.js
import { createContext, useState, useContext } from "react";

// Create the context
const DarkModeContext = createContext();

// Custom hook to use dark mode context
export const useDarkMode = () => useContext(DarkModeContext);

// Create a provider component
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => setDarkMode((prevMode) => !prevMode);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
