import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    useEffect(() => {
        const storedCart = getShoppingCart()
        const saveCart = []
        for (const id in storedCart) {
            const addedProduct = products.find(product => product._id === id);
            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                saveCart.push(addedProduct)
            }
            console.log(addedProduct)
        }
        setCart(saveCart)
    }, [products])
    const handleAddToCart = (product) => {
        // console.log('product added to cart', product)
        // const newCart = [...cart, product]
        let newCart = []
        const exists = cart.find(pd => pd._id === product._id)
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]
        } else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd._id !== product._id)
            newCart = [...remaining, exists]
        }
        setCart(newCart);
        addToDb(product._id)
    }
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart()
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handleClearCart={handleClearCart}
                >
                    <Link to="/orders">
                        <button className='mt-10 flex w-[232px] h-[48px] bg-[#FF9900]  text-white pl-14'>
                            Review Order
                            <ArrowRightIcon className="h-5 w-5 mt-1 " />
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;