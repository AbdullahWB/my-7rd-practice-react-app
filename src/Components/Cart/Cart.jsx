import React from 'react';
import './Cart.css'
import { TrashIcon } from '@heroicons/react/24/solid'
const Cart = ({ cart, handleClearCart, children }) => {
    // const Cart = props.cart
    // const {cart} = props

    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // if (product.quantity === 0) {
        //     product.quantity = 1;
        // }
        // product.quantity = product.quantity || 1;
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping
        quantity = quantity + product.quantity;
    }
    const tax = total * 7 / 100;
    const grandTotal = total + totalShipping + tax;
    return (
        <div className='cart'>
            <h1>Order Summary</h1>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge:  ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
            <button onClick={handleClearCart} className='mt-10 flex w-[232px] h-[48px] bg-red-500 pl-[56px] text-white text-xl'>
                Clear cart <TrashIcon className="h-5 w-5 mt-1  " />
            </button>
            {
                children
            }
        </div>
    );
};

export default Cart;