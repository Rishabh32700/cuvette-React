import { useState } from 'react';
import './App.css'
import Comp1 from './components/Comp1'
import ThemeProvider, { ThemeContext } from './context/ThemeContext';

const App = () => {
  
  return (
    <>
      <ThemeProvider>
        <Comp1 />
        <Comp1 />
        <Comp1 />
        <Comp1 />
      </ThemeProvider>
    </>
  )
}
export default App
