import React from 'react';

const Blogs = () => {
    return (
        <div className='px-5 my-12'>

            {/* Blog Card  */}

            <div class="my-5 max-w-4xl px-8 py-4 mx-auto bg-white rounded-lg shadow-2xl dark:bg-gray-800">
                <div class="flex items-center justify-between">
                    <span class="text-sm font-light text-gray-600 dark:text-gray-400">Jan 15, 2022</span>
                    <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">JavaScript</a>
                </div>
                <div class="mt-2">
                    <h2 class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">How will you improve the performance of a React Application?</h2>
                    <p class="mt-2 text-gray-600 dark:text-gray-300">React already given us single page application features by default. But nowadays in production level there are some improvement needed for more faster with good user experience. </p>
                </div>
                <div class="flex items-center justify-between mt-4">
                    <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">Read more ⟶</a>
                    <div class="flex items-center">
                        <img src="https://stackdiary.com/140x100.png" alt="Author Photo" class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                        <a class="font-bold text-gray-700 cursor-pointer dark:text-gray-200">John Doe</a>
                    </div>
                </div>
            </div>


            {/* Blog Card  */}

            <div class="my-5 max-w-4xl px-8 py-4 mx-auto bg-white rounded-lg shadow-2xl dark:bg-gray-800">
                <div class="flex items-center justify-between">
                    <span class="text-sm font-light text-gray-600 dark:text-gray-400">Jan 15, 2022</span>
                    <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">JavaScript</a>
                </div>
                <div class="mt-2">
                    <h2 class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">What are the different ways to manage a state in a React application?</h2>
                    <p class="mt-2 text-gray-600 dark:text-gray-300">Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu.</p>
                </div>
                <div class="flex items-center justify-between mt-4">
                    <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">Read more ⟶</a>
                    <div class="flex items-center">
                        <img src="https://stackdiary.com/140x100.png" alt="Author Photo" class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                        <a class="font-bold text-gray-700 cursor-pointer dark:text-gray-200">John Doe</a>
                    </div>
                </div>
            </div>




        </div>

    );
};

export default Blogs;