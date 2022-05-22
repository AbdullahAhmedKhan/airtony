import { faFlag, faMoneyCheckDollar, faPeopleGroup, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Summary = () => {
    return (
        <div className='my-12 lg:my-24 text-center'>
            <h2 className='text-success text-2xl lg:text-4xl font-bold uppercase mb-3'>Million customers trust us</h2>
            <span className='text-md lg:text-xl border-b-2 border-b-success pb-2'>Try to understand customer's expectation</span>

            {/* Card section  */}

            <div className='my-8 mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-12'>

                <div class="card w-64 bg-base-100 mx-auto shadow-xl">
                    <figure class="px-10 pt-10">
                        <FontAwesomeIcon className='text-success text-2xl' icon={faFlag}></FontAwesomeIcon>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-5xl">17</h2>
                        <p className='text-success'>Countries</p>
                    </div>
                </div>
                <div class="card w-64 bg-base-100 mx-auto shadow-xl">
                    <figure class="px-10 pt-10">
                        <FontAwesomeIcon className='text-success text-2xl' icon={faMoneyCheckDollar}></FontAwesomeIcon>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-5xl">20+</h2>
                        <p className='text-success'>Investors</p>
                    </div>
                </div>
                <div class="card w-64 bg-base-100 mx-auto shadow-xl">
                    <figure class="px-10 pt-10">
                        <FontAwesomeIcon className='text-success text-2xl' icon={faPeopleGroup}></FontAwesomeIcon>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-5xl">223+</h2>
                        <p className='text-success'>Happy Clients</p>
                    </div>
                </div>
                <div class="card w-64 bg-base-100 mx-auto shadow-xl">
                    <figure class="px-10 pt-10">
                        <FontAwesomeIcon className='text-success text-2xl' icon={faThumbsUp}></FontAwesomeIcon>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-5xl">376+</h2>
                        <p className='text-success'>Feedbacks</p>
                    </div>
                </div>

                

            </div>

        </div>
    );
};

export default Summary;