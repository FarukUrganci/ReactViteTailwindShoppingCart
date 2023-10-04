import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'

const CartIcon = (props) => {
  return (
    <div className="relative cursor-progress"> 
      {/* hapis işlemi relative */}
        <FiShoppingCart className="text-2xl"/>
        {props.cart.length > 0 && <span
        className="bg-red-600 text-white w-5 h-5 
        flex justify-center align-center rounded-full 
        absolute -top-3 -right-3 text-sm">
          {props.cart.length}
        </span> }
    </div>
  )
}

export default CartIcon;