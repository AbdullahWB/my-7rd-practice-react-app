import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import ReviewItems from '../Review/ReviewItems';
import { deleteShoppingCart, removeFromDb } from '../../../utilities/fakedb';
import { CreditCardIcon } from '@heroicons/react/24/solid'

const Orders = () => {
    const saveCart = useLoaderData();
    const [cart, setCart] = useState(saveCart)

    const handleRemoveCart = (id) => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart()
    }
    return (
        <div className='shop-container'>
            <div className='mt-[184px]'>
                {
                    cart.map(product => <ReviewItems
                        key={product.id}
                        product={product}
                        handleRemoveCart={handleRemoveCart}
                    ></ReviewItems>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handleClearCart={handleClearCart}
                >
                    <Link to="/checkout">
                        <button className='mt-10 flex w-[232px] h-[48px] bg-[#FF9900]  text-white pl-9'>Proceed Checkout
                            <CreditCardIcon className="h-5 w-5 mt-1  " /></button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;