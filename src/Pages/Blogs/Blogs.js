import React from 'react';

const Blogs = () => {
    return (
        <div className='px-5 my-12'>

            {/* Blog Card  */}

            <div class="my-5 max-w-4xl px-8 py-4 mx-auto bg-white rounded-lg shadow-2xl dark:bg-gray-800">
                <div class="flex items-center justify-between">
                    <span class="text-sm font-light text-gray-600 dark:text-gray-400">Apr 15, 2022</span>
                    <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">React</a>
                </div>
                <div class="mt-2">
                    <h2 class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">How will you improve the performance of a React Application?</h2>
                    <p class="mt-2 text-gray-600 dark:text-gray-300">React already given us single page application features by default. But nowadays in production level there are some improvement needed for more faster with good user experience. Lazy loading is a great technique for optimizing and speeding up the render time. The idea of lazy loading is to load a component only when it is needed. React.memo is a great way of optimizing performance as it helps cache functional components. Memoizing React components to prevent unnecessary re-renders. </p>
                </div>
                <div class="flex items-center justify-between mt-4">
                    <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">Read more ⟶</a>
                    <div class="flex items-center">
                        <img src="https://i.ibb.co/vk7mjcr/ben-den-engelsen.jpg" alt="Author Photo" class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                        <a class="font-bold text-gray-700 cursor-pointer dark:text-gray-200">John Doe</a>
                    </div>
                </div>
            </div>


            {/* Blog Card  */}

            <div class="my-5 max-w-4xl px-8 py-4 mx-auto bg-white rounded-lg shadow-2xl dark:bg-gray-800">
                <div class="flex items-center justify-between">
                    <span class="text-sm font-light text-gray-600 dark:text-gray-400">Mar 18, 2022</span>
                    <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">React State</a>
                </div>
                <div class="mt-2">
                    <h2 class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">What are the different ways to manage a state in a React application?</h2>
                    <p class="mt-2 text-gray-600 dark:text-gray-300">
                        There are four main types of state you need to properly manage in your React apps:
                        1.Local state: Local state is data we manage in one or another component.
                        2.Global state: Global state is data we manage across multiple components.
                        3.Server state: Data that comes from an external server that must be integrated with our UI state.
                        4.URL state: Data that exists on our URLs, including the pathname and query parameters.
                    </p>
                </div>
                <div class="flex items-center justify-between mt-4">
                    <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">Read more ⟶</a>
                    <div class="flex items-center">
                        <img src="https://i.ibb.co/H4TnzX3/foto-sushi.jpg" alt="Author Photo" class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                        <a class="font-bold text-gray-700 cursor-pointer dark:text-gray-200">Sushi</a>
                    </div>
                </div>
            </div>
            {/* Blog Card  */}

            <div class="my-5 max-w-4xl px-8 py-4 mx-auto bg-white rounded-lg shadow-2xl dark:bg-gray-800">
                <div class="flex items-center justify-between">
                    <span class="text-sm font-light text-gray-600 dark:text-gray-400">Feb 21, 2022</span>
                    <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">JavaScript</a>
                </div>
                <div class="mt-2">
                    <h2 class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">How does prototypical inheritance work?</h2>
                    <p class="mt-2 text-gray-600 dark:text-gray-300">
                        Prototypical inheritance refers to the ability to access object properties from another object. To add new properties and methods to an existing object constructor, we utilize a JavaScript prototype. We may tell our JS code to inherit properties from a prototype in this way. Through a reference pointer function, prototypical inheritance allows us to reuse properties or methods from one JavaScript object to another.
                    </p>
                </div>
                <div class="flex items-center justify-between mt-4">
                    <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">Read more ⟶</a>
                    <div class="flex items-center">
                        <img src="https://i.ibb.co/FsfGzdx/christina.jpg" alt="Author Photo" class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                        <a class="font-bold text-gray-700 cursor-pointer dark:text-gray-200">Christina</a>
                    </div>
                </div>
            </div>
            {/* Blog Card  */}

            <div class="my-5 max-w-4xl px-8 py-4 mx-auto bg-white rounded-lg shadow-2xl dark:bg-gray-800">
                <div class="flex items-center justify-between">
                    <span class="text-sm font-light text-gray-600 dark:text-gray-400">Feb 10, 2022</span>
                    <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">React State</a>
                </div>
                <div class="mt-2">
                    <h2 class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h2>
                    <p class="mt-2 text-gray-600 dark:text-gray-300">
                        It should not update directly because If you update it directly, executing setState() thereafter may just overwrite your changes. This.state is not changed instantly when you directly update the state. Instead, it generates a pending state transition, which will only yield the current value if accessed after using this function. You'll lose control of the state in all of your components.
                    </p>
                </div>
                <div class="flex items-center justify-between mt-4">
                    <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">Read more ⟶</a>
                    <div class="flex items-center">
                        <img src="https://i.ibb.co/vzRVqBR/jonas.jpg" alt="Author Photo" class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                        <a class="font-bold text-gray-700 cursor-pointer dark:text-gray-200">Jonas</a>
                    </div>
                </div>
            </div>
            {/* Blog Card  */}

            <div class="my-5 max-w-4xl px-8 py-4 mx-auto bg-white rounded-lg shadow-2xl dark:bg-gray-800">
                <div class="flex items-center justify-between">
                    <span class="text-sm font-light text-gray-600 dark:text-gray-400">Jan 15, 2022</span>
                    <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">Unit Test</a>
                </div>
                <div class="mt-2">
                    <h2 class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">What is a unit test? Why should write unit tests?</h2>
                    <p class="mt-2 text-gray-600 dark:text-gray-300">
                        Unit testing allows the programmer to rewrite code later and ensure that the module continues to function properly . The practice is to create test cases for all functions and methods so that any changes that cause a problem can be swiftly discovered and corrected. Before code is deployed, unit testing verifies that it meets quality standards. This ensures a stable engineering environment that promotes quality.
                    </p>
                </div>
                <div class="flex items-center justify-between mt-4">
                    <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">Read more ⟶</a>
                    <div class="flex items-center">
                        <img src="https://i.ibb.co/r2FkqGT/edward.jpg" alt="Author Photo" class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                        <a class="font-bold text-gray-700 cursor-pointer dark:text-gray-200">Edward</a>
                    </div>
                </div>
            </div>




        </div>

    );
};

export default Blogs;