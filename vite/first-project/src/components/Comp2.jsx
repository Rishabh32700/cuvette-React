import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Comp2 = () => {
  const { theme, setTheme, age, setAge, state, setState, name, name2 } = useContext(ThemeContext)
  console.log(theme, age, state, name, name2, "<===== from comp2");

  return (
    <div>
      comp 2
    </div>
  )
}

export default Comp2
