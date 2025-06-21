import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Login from '../pages/Login'
import About from '../pages/About'
import Search from '../pages/Search'
import Contact from '../pages/Contact'

const Mainroutes = () => {
  return (
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
  )
}

export default Mainroutes
