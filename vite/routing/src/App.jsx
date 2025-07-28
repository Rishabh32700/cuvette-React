import './App.css'

// BrowserRouter
// Routes
// Route

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'

function App() {

  return (
    <>

        <nav>
          <ul style={{ listStyle: "none", display: "flex" }} >
            <Link to="/home"><li><button>Home</button> </li></Link>
            <Link to={"/about"} ><li><button>About</button> </li></Link>
            <Link to={"/contact"}><li><button>Contact</button> </li></Link>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/home' element={<Home />} ></Route>
          <Route path='/contact' element={<Contact />} ></Route>
          <Route path='/about' element={<About />} ></Route>
        </Routes>
    </>
  )
}

export default App
