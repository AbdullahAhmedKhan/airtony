import React from 'react';
import bg from '../../images/banner.jpg';
const Banner = () => {
    return (
        <div class="hero min-h-[88vh]" style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                    <p class="mb-5">According to Mayo Clinic, running an A/C not only reduces humidity in your home, but can also lower the amount of pollen, mold, mildew and other airborne outdoor allergens that can potentially lead to asthma symptoms. Air conditioners can also lower your exposure to indoor allergens, like dust mites.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
