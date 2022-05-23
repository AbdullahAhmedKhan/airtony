import React from 'react';
import ac from '../../images/ac-parts.png';
import lg from '../../images/brands/lg.png';
import carrier from '../../images/brands/carrier.png';
import gree from '../../images/brands/gree.png';
import Hitachi from '../../images/brands/Hitachi.jpg';
import panasonic from '../../images/brands/panasonic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
const Brands = () => {
    return (
        <div>
            <h1 class="text-xl lg:text-3xl font-bold text-center text-gray-500">
                <FontAwesomeIcon className='mr-3' icon={faAngleRight}></FontAwesomeIcon>
                We are approved Installers and offer a 10-Year Warranty On All These Parts</h1>
            <div class="hero min-h-screen lg:px-12">
                <div class="hero-content flex-col lg:flex-row-reverse mx-auto">
                    <img src={ac} class="max-w-md" />
                    <div className='max-w-2xl'>


                        <p class="py-6 text-xl">Our Clients</p>
                        <hr className='' />
                        <div className='flex justify-evenly'>
                            <div className='w-50'>
                                <img className='w-20' src={lg} alt="" />
                                <img className='w-24' src={gree} alt="" />
                                <img className='w-20' src={carrier} alt="" />
                            </div>
                            <div className='w-50'>
                                <img className='w-36' src={panasonic} alt="" />
                                <img className='w-20 py-5' src={Hitachi} alt="" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brands;