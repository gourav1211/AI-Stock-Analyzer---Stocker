import React from 'react'
import Nav from './components/Nav'
import Mainroutes from './routes/Mainroutes'

const App = () => {
  return (
    <div className='bg-white h-screen w-screen text-black overflow-auto '>
      <Nav/>
      <Mainroutes/>

    </div>
  )
}

export default App

