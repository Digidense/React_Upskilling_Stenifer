


import React, { useState, createContext } from "react";
import UseContext from "./hooks/UseContext";

export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <UseContext />
    </ThemeContext.Provider>
  );
};

export default App;
