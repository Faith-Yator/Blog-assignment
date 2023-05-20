import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Blogs from './pages/Blogs'
import Error from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/'element={<Home/>} ></Route>
      <Route path='/about'element={<About/>} ></Route>
      <Route path='/blogs'element={<Blogs/>} ></Route>
      <Route path='*'element={<Error/>} ></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
