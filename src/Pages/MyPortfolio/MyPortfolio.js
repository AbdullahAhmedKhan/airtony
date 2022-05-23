import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import abdullah from '../../images/abdullah.jpg';
const MyPortfolio = () => {
    return (
        <div className='my-24 '>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto ">
                <div class="card-body">
                    <div class="avatar mx-auto">
                        <div class="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2  ">
                            <img src={abdullah} className='-top-5' />
                        </div>
                    </div>
                    <h2 class="card-title text-center">Abdullah Ahammed Khan</h2>
                    <p>
                        <FontAwesomeIcon className='mr-2' icon={faEnvelope}></FontAwesomeIcon>
                        abdullahahmedkhan100@gmail.com
                    </p>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;