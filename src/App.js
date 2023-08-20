import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Buy from './pages/Buy'
import Rent from './pages/Rent'
import Search from './pages/Search'
import PropertyDetail from './pages/PropertyDetail'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='bg-neutral-900'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/rent' element={<Rent/>}/>
        <Route path='/buy' element={<Buy/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/propertydetail/:id' element={<PropertyDetail/>}/>
      </Routes>
    </div>
  )
}

export default App