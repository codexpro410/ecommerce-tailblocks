// import { useState } from 'react'

import './App.css'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
import { Home } from './modules/Home'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Product } from './modules/Product'
import { Products } from './modules/Products'
import { CategoryProducts } from './modules/CategoryProducts'
import { Cart } from './modules/Cart'

function App() {
// https://www.youtube.com/watch?v=m2fFde492Ew
// https://tailblocks.cc/

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={ <Home/>}/> 
        <Route path='/products/:id' element={ <Product/>}/> 
        <Route path='/products' element={ <Products/>}/> 
        <Route path='/about' element={ <Products/>}/> 
        <Route path='/contact' element={ <Products/>}/> 
        <Route path='/categories/:name' element={ <CategoryProducts/>}/> 
        <Route path='/cart' element={ <Cart/>}/> 
        <Route path='*' element={ <div>404</div>}/> 
      </Routes>
     
      <Footer/>
    </BrowserRouter>
  )
}

export default App
