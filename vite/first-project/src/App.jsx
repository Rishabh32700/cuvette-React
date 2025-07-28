import { useState } from 'react';
import './App.css'
import Comp1 from './components/Comp1'
import ThemeProvider from './context/ThemeContext';

const App = () => {
  
  return (
    <>
      <ThemeProvider>
        <Comp1 />
      </ThemeProvider>
    </>
  )
}
export default App
