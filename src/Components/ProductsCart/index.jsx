import React from 'react'
import { Link } from 'react-router-dom'

export const ProductsCart = ({products =[]}) => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        {
          products.map((product)=>{
            const { id, title, price, description, category, image} = product
            return(
            <Link to={`/products/${id}`} className="lg:w-1/4  md:w-1/2  w-full border-2 mt-2 cursor-pointer" key={id}>
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-contain object-center w-full h-full block" src={image}/>
              </a>
              <div className="mt-4 m-2">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
                <h2 className="text-gray-900 title-font text-xl font-bold uppercase">{title}</h2>
                <p className="mt-1 text-md font-semibold">${price}</p>
              </div>
            </Link>

            )
          })
        }
        

      </div>
    </div>
  </section>
  )
}
