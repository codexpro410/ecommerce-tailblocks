import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductsCart } from '../../Components/ProductsCart'

export const CategoryProducts = () => {
    const {name} = useParams()
    const [products, setProducts] = useState([])
    useEffect(() => {
      const fetchAllProducts = async()=>{
        const res = await fetch(`https://fakestoreapi.com/products/category/${name}`)
        const data = await res.json()
        console.log(data)
        setProducts(data)
      }
      fetchAllProducts()
    }, [])
    if (products.length === 0) return <div className="div">Loading....</div>
  return (
    <ProductsCart products={products}/>
  )
}
