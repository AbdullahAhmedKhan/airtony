import React from 'react';

const Part = ({ part }) => {
    const { name, description, price, img, min } = part;
    return (
        <div class="card w-96 mx-auto bg-base-100 shadow-xl">
            <figure><img src={img} className="w-" alt="product" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p className='text-lg'>Price: <span className='font-bold text-warning'>{price}$</span></p>
                <p>Minimum Order: {min} </p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;