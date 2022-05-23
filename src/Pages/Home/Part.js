import React from 'react';

const Part = ({ part }) => {
    const { name, description, price, img, min,quantity } = part;
    return (
        <div class="card w-96 mx-auto bg-base-100 shadow-2xl">
            <figure><img src={img} className="w-48" alt="product" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p className='text-lg'>Price: <span className='font-bold text-warning'>{price}$</span></p>
                <span className='w-32 btn btn-xs text-xs p-1 btn-outline'>Minimum Order: {min} </span>
                <span>Quantity: {quantity}</span>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;