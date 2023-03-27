import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const {img, name, seller, quantity, price} = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h1>{name}</h1>
                <h3>${price}</h3>
                <p>Manufacturer : {seller}</p>
                <p>Rating :  {quantity}</p>
            </div>
            <button>Add to Cart</button>
        </div>
    );
};

export default Product;