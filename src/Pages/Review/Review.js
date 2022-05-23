import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='my-20'>
            <h2 className='my-12 text-2xl lg:text-4xl font-bold text-center text-primary'>
                <FontAwesomeIcon className='px-2' icon={faAnglesRight}></FontAwesomeIcon>
                Our Satisfied Customers Says</h2>

            <div className='mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-12'>
                {
                    reviews.map(perReview => <SingleReview
                        key={perReview._id}
                        perReview={perReview}
                    ></SingleReview>)
                }
            </div>
        </div>
    );
};

export default Review;