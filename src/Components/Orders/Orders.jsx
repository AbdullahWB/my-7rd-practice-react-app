import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import ReviewItems from '../Review/ReviewItems';
import { deleteShoppingCart, removeFromDb } from '../../../utilities/fakedb';

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
                ></Cart>
            </div>
        </div>
    );
};

export default Orders;