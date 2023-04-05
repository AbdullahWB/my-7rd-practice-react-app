import React from 'react';

const ReviewItems = ({ product }) => {
    const { id, name, price, img, shipping } = product;
    console.log(product);
    return (
        <div className='w-[571px] h-[107px] ml-20'>
            <div className='w-[91px] h-[91px]'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default ReviewItems;