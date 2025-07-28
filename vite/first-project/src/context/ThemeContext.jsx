import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>{
    setTheme((prev)=>{
        return prev === "light" ? "dark" : "light"
    })
  }
  
  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
