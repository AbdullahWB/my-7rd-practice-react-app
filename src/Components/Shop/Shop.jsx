import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link, useLoaderData } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const Shop = () => {
    const { totalProduct } = useLoaderData();
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    // const itemsPerPage = 10;
    const totalPages = Math.ceil(totalProduct / itemsPerPage);

    const pageNumbers = [...Array(totalPages).keys()]
    console.log(totalProduct);

    useEffect(() => {
        fetch('http://localhost:3000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:3000/product?page=${currentPage}&limit=${itemsPerPage}`)
            const data = await response.json();
            setProducts(data);
        }
        fetchData()
    }, [currentPage, itemsPerPage])

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
    const options = [5, 10, 20]
    const handleSelectChange = event => {
        setItemsPerPage(parseInt(event.target.value))
        setCurrentPage(0)
    }
    return (
        <>
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
            {/* pagination */}
            <div className="pagination">
                <div className="btn-group">
                    <p>Current page: {currentPage} Items Per Page: {itemsPerPage}</p>
                    {
                        pageNumbers.map(number => <button
                            key={number}
                            className={currentPage === number ? 'btn btn-active btn-primary mx-1' : 'btn mx-1'
                            }
                            onClick={() => setCurrentPage(number)}
                        >
                            {number}
                        </button>)
                    }
                </div>
                <select value={itemsPerPage} onChange={handleSelectChange}>
                    {
                        options.map(option => (
                            <option
                                key={option}
                                value={option}
                            >
                                {option}
                            </option>
                        ))
                    }
                </select>
            </div>
        </>
    );
};

export default Shop;