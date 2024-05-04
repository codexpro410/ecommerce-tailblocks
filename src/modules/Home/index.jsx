import React, { useEffect, useState } from 'react'
import { Hero } from '../../Components/Home'
import { ProductsCart } from '../../Components/ProductsCart'
import { FeatureCard } from '../../Components/FeatureCard'
import { StatesCard } from '../../Components/StatesCard'
import { Categories } from '../../Components/Categories'

export const Home = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchAllProducts = async()=>{
      const res = await fetch('https://fakestoreapi.com/products?limit=12')
      const data = await res.json()
      console.log(data)
      setProducts(data)
    }
    fetchAllProducts()
  }, [])
  
  return (
    <>
     <Hero/> 
     <Categories/>
     <h2 className='text-6xl text-center font-bold mt-20'>Products</h2>
      <div className="flex flex-col text-center w-full mt-5">
        <h2 className="text-xs text-purple-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Master Cleanse Reliac Heirloom</h1>
      </div>
      {
        products.length > 0 ?
        <ProductsCart products={products}/>
        : <div className="Loading text-center">Loading...</div>
      }
     {/* <Products/>   */}
     <h2 className='text-6xl text-center font-bold mt-20'>Features</h2>
     {/* <FeatureCard/> */}
     <StatesCard/>
    </>
  )
}
