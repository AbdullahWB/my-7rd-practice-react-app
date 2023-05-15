import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'

const ReviewItems = ({ product, handleRemoveCart }) => {
    const { _id, name, price, img, shipping } = product;
    console.log(product);
    return (
        <div className='w-[571px] h-[107px] ml-20 mb-[25px] border border-gray-300 flex items-center rounded-md'>
            <div className='w-[91px] h-[91px] m-2'>
                <img src={img} alt="" />
            </div>
            <div className='m-4'>
                <h1>{name}</h1>
                <p>Price: ${price}</p>
                <p>Shipping Charge : ${shipping}</p>
            </div>
            <div onClick={() => handleRemoveCart(_id)} className='flex justify-center items-center ml-auto w-14 h-14 bg-red-100 rounded-full mr-5 cursor-pointer'>
                <TrashIcon className="h-6 w-6 text-red-500 " />
            </div>
        </div>
    );
};

export default ReviewItems;