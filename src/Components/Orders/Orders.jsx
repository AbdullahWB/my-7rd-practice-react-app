import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import ReviewItems from '../Review/ReviewItems';

const Orders = () => {
    const cart = useLoaderData();
    return (
        <div className='shop-container'>
            <div className=''>
                {
                    cart.map(product => <ReviewItems
                        key={product.id}
                        product={product}
                    ></ReviewItems>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;