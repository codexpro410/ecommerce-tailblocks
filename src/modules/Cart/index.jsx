import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import back from '../../assets/enter-2.2s-200px.svg'
export const Cart = () => {
    const navigate = useNavigate()
    const [total, setTotal] = useState(0)
    const taxes = total * .005
    const shipping = total *.001
    const net = total - taxes - shipping
    const [promoCode, setPromoCode] = useState()
    const promo = promoCode? total * .1:0;
    const handlePromoCode = (e) => { 
        const inputValue = e.target.value;
        if (inputValue.toLowerCase() === 'islam') {
            setPromoCode(inputValue)
        }else{
            setPromoCode('')
        }
     }
    const carts = JSON.parse(localStorage.getItem('cart')) || [];
    useEffect(() => {
        const total = carts.reduce((acc,item)=>{
            return acc + (item.price * item.quantity)
        }, 0)
        setTotal(total)
    }, [carts])
    

    const handleInc =(id) => { 
        const updateCart = carts.map(item =>{
            if (item.id === id) {
                return{
                    ...item,quantity: item.quantity +1
                }
            }
            return item
        })
        localStorage.setItem('cart',JSON.stringify(updateCart))
        navigate('/cart')
    }
    const handleDec =(id) => { 
        const updateCart = carts.map(item =>{
            if (item.id === id) {
                return{
                    ...item,quantity: item.quantity -1
                }
            }
            return item
        })
        localStorage.setItem('cart',JSON.stringify(updateCart))
        navigate('/cart')
    }
    const removeProduct =(id) => { 
        const updateCart = carts.filter(item => item.id !== id)
        localStorage.setItem('cart', JSON.stringify(updateCart))
        navigate('/cart')
    }
    if(!carts.length) return <div className='h-[49vh] flex justify-center items-center text-4xl'>Cart is Empty</div>
    // notworking
    // if(!carts.length) { <div>Cart is Empty</div> }
    // notworking
    // if(true)
    //      { <div>Cart is Empty</div>
    // } 
  return (
<div className="bg-gray-100 h-auto py-8 ">
    <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
        <div className="flex sm:justify-between ">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        <h1 className="text-2xl font-semibold mb-4  ">{carts?.length } items</h1>
        </div>
                <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-left font-semibold">Product</th>
                                <th className="text-left font-semibold">Price</th>
                                <th className="text-left font-semibold">Quantity</th>
                                <th className="text-left font-semibold">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                carts?.map(cart =>{
                                    return(
                                        <tr key={cart.id}>
                                            <td className="py-4">
                                                <div className="flex items-center">
                                                    <img className="h-16 w-16 mr-4" src={cart?.image} alt={cart?.title}/>
                                                    <div className="flex-col">

                                                    <p className="font-semibold">{cart?.title}</p>
                                                    <p className="">{cart?.category}</p>
                                                    <button className=" border-2 rounded  text-white bg-red-500 hover:text-red-500  hover:bg-white"
                                                    onClick={()=> removeProduct(cart?.id)}>Remove</button>
                                                   
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4">${cart?.price}</td>
                                            <td className="py-4">
                                                <div className="flex items-center">
                                                    <button className="border rounded-md py-2 px-4 mr-2 cursor-pointer" onClick={()=> handleDec(cart?.id)}>-</button>
                                                    
                                                    <span className="text-center w-8">{cart?.quantity}</span>
                                                    <button className="border rounded-md py-2 px-4 ml-2 cursor-pointer" onClick={()=> handleInc(cart?.id)}>+</button>
                                                </div>
                                            </td>
                                            <td className="py-4">${(cart?.price * cart?.quantity).toFixed(2)}</td>
                                        </tr>

                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
                <Link to='/products' className="flex align-center justify-left">
                    <img src={back} alt="nothing" width={'30'} height={'30'} className='hover:scale-125'/>
                <p className='text-purple-500 font-bold'>Continue Shopping..</p>

                </Link>
            </div>
            <div className="md:w-1/3">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Taxes</span>
                        <span>${taxes.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>${shipping.toFixed(2)}</span>
                    </div>
                    <hr className="my-2"/>
                    <div className="flex justify-between mb-2">
                        <span className="font-semibold">Total</span>
                        <span className="font-semibold">${net.toFixed(2)}</span>
                    </div>
                    <div className="flex lg:flex-row md:flex-col justify-between mb-2">
                        <span className="font-semibold ">Promo Code</span>
                        <input type='text' className="outline-black border-2 lg:w-1/2 md:w-full" placeholder='islam' onChange={handlePromoCode}/>
                    </div>

                    <button className="bg-red-500 text-white py-2 px-4 rounded-lg mt-4 lg:w-1/2 md:w-full">Apply</button>
                    <hr className="my-2"/>
                    <div className="flex justify-between mb-2">
                        <span className="font-semibold">Total Cost:</span>
                        <span className="font-semibold">${(net - promo).toFixed(2)}</span>
                    </div>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
