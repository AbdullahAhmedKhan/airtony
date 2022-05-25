import { faEnvelope, faGraduationCap, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import abdullah from '../../images/abdullah.jpg';
import fruits from '../../images/the_fruits.png';
import ict from '../../images/ict_tutor.png';
import product from '../../images/product.png';
const MyPortfolio = () => {
    return (
        <div className='my-24 px-12 grid grid-cols-1 lg:grid-cols-2 gap-5'>



            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body flex">

                    <div class="avatar mx-auto">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={abdullah} />
                        </div>
                    </div>
                    <h2 class="card-title text-2xl">Abdullah Ahammed Khan</h2>
                    <p className='text-sm'>
                        <FontAwesomeIcon className='mr-2' icon={faEnvelope}></FontAwesomeIcon>
                        abdullahahmedkhan100@gmail.com
                    </p>
                    <p className='text-sm'>
                        <FontAwesomeIcon className='mr-2' icon={faPhone}></FontAwesomeIcon>
                        +880 1521224536
                    </p>
                    <p className='text-sm'>
                        <FontAwesomeIcon className='mr-2' icon={faLocationDot}></FontAwesomeIcon>
                        Dhaka, Bangladesh
                    </p>
                    <div class="card-actions justify-end">
                        <a href="https://drive.google.com/file/d/1UKgPyCAFvsdx9pDJEX9P6FBanK1aHRyB/view?usp=sharing" target="_blank" class="btn btn-primary">RESUME</a>
                    </div>
                </div>
            </div>




            <div class="card bg-base-100 shadow-xl">
                <div class="card-body flex">


                    <h2 class="card-title text-2xl">EDUCATION</h2>
                    <hr className='border border-primary' />
                    <span className='text-lg lg:text-xl font-bold'>
                        <FontAwesomeIcon className='mr-2' icon={faGraduationCap}></FontAwesomeIcon>
                        B.Sc in Computer Science and Engineering
                    </span>
                    <div className='grid grid-cols-1 gap-2 ml-3 lg:ml-12'>
                        <span className='text-sm lg:text-lg font-bold'>International Islamic University Chittagong</span>
                        <small className='text-xs'> October 2017 - March 2018</small>
                        <span className='text-sm lg:text-lg font-bold'>Green University of Bangladesh</span>
                        <small className='text-xs'> April 2018- December 2021</small>
                    </div>

                </div>
            </div>




            <div class="card bg-base-100 shadow-xl">
                <div class="card-body flex">


                    <h2 class="card-title text-2xl">PROJECTS</h2>
                    <hr className='border border-primary' />
                    <span className='text-lg lg:text-xl font-bold'>
                        The Fruits
                    </span>

                    <div class="w-80 lg:w-96">
                        <img src={fruits} className="rounded-xl shadow-md" />
                    </div>
                    <a target="_blank" href="https://the-fruits.web.app/" className='w-24 btn btn-primary btn-outline btn-sm'>Live Site</a>


                    <span className='text-lg lg:text-xl font-bold'>
                        Product Analysis
                    </span>

                    <div class="w-80 lg:w-96">
                        <img src={product} className="rounded-xl shadow-md" />
                    </div>
                    <a target="_blank" href="https://productanalysis.netlify.app/" className='w-24 btn btn-primary btn-outline btn-sm'>Live Site</a>


                    <span className='text-lg lg:text-xl font-bold'>
                        ICT Tutor
                    </span>

                    <div class="w-80 lg:w-96">
                        <img src={ict} className="rounded-xl shadow-md" />
                    </div>
                    <a target="_blank" href="https://ict-tutor-a1a22.web.app/" className='w-24 btn btn-primary btn-outline btn-sm'>Live Site</a>


                </div>
            </div>
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body flex">


                    <h2 class="card-title text-2xl">SKILLS & TECHNOLOGIES</h2>
                    <hr className='border border-primary' />
                    <span className='font-bold'>Experties: </span>  Javascript (ES6), REST API, React.js, React Router, HTML5, CSS3, SCSS <br />
                    <span className='font-bold'>Comfortable: </span>  C, Javascript(ES6), Node.js, Express.js <br />
                    <span className='font-bold'>Familiar: </span>   Mongodb, Express.js, React Query <br />
                    <span className='font-bold'>CSS Library: </span>   Tailwind CSS, Bootstrap 5, DaisyUI <br />
                    <span className='font-bold'>Tools: </span>   Firebase, Figma, Github, Netlify, Heroku
                    <br />


                </div>
            </div>







        </div>
    );
};

export default MyPortfolio;