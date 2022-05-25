import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SingleReview = ({ perReview }) => {
    const { name, img, review, ratings } = perReview;
    const IntRatings = parseInt(ratings);
    let n = IntRatings;
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                <div class="card-body">
                    <div class="avatar flex items-center mb-3">
                        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} />
                        </div>
                        <h2 className='px-8 text-xl font-bold text-primary'>{name}</h2>
                    </div>
                    <p className='py-2 border-y-2'>
                        <FontAwesomeIcon className='text-5xl pr-3 text-gray-400' icon={faQuoteLeft}></FontAwesomeIcon>
                        {review}</p>

                    <div class="card-actions justify-end">
                        {[...Array(n)].map((elementInArray, index) => (
                            <div className="" key={index}>  <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon></div>
                        )
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;