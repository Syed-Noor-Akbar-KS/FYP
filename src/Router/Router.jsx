import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Product from '../Pages/Product'
import Contact from '../Pages/Contact'
import Services from '../Pages/Services'
import Cart from '../Pages/Cart'
import ProductDetail from '../Pages/ProductDetail'
function Router() {
  return (

   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>} />
    <Route path='/products' element={<Product/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/services' element={<Services/>} />
    <Route path='/productDetail/:id' element={<ProductDetail/>}/>
    <Route path='/cart' element={<Cart/>} />
   </Routes>
  )
}

export default Router