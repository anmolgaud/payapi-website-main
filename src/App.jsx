import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home, About, Pricing, Contact, NotFound} from './pages'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>} />
        <Route path='pricing' element={<Pricing/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App