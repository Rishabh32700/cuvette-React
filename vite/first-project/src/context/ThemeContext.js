import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [age, setAge] = useState(24);
  const [state, setState] = useState("state");
  function name() {
    console.log("hello");
  }
  const name2 = "rishabh"
  
  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, age, setAge, state, setState, name, name2, key: "tata"}}>
      {children}
      {/* <Comp1 />
      <Comp1 />
      <Comp1 />
      <Comp1 /> */}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
