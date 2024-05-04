import React, { useEffect, useState } from 'react'
import { FeatureCard } from '../FeatureCard'

export const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
      const fetchCategories = async()=>{
        const res = await fetch('https://fakestoreapi.com/products/categories')
        const data = await res.json()
        console.log(data,'data')
        setCategories(data)
      }
      fetchCategories()
    }, [])
    if (categories.length === 0) return <div className="div">Loading....</div>
    return (
        <FeatureCard cards={categories}/>
    )
}
