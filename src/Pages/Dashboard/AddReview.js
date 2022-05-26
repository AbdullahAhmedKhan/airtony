import React from 'react';
import { toast } from 'react-toastify';

const AddReview = () => {

    const handleAddReview = e => {
        e.preventDefault();
        const reviews = {
            name: e.target.name.value,
            img: e.target.img.value,
            review: e.target.review.value,
            ratings: e.target.ratings.value
        }
        console.log(reviews);
        fetch('https://fathomless-reaches-02788.herokuapp.com/review', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Successfully added your review');
                    console.log(data);
                    e.target.reset();
                }
            })
    }

    return (
        <div className='mx-5'>
            <div class="container mx-auto">
                <div class="max-w-xl p-5 mx-auto my-5 bg-white rounded-md shadow-xl rounded-lg">
                    <div class="text-center">
                        <h1 class="my-3 text-3xl font-semibold text-gray-700">Add a review</h1>
                        <p class="text-gray-400">Fill up the form to send us a review</p>
                    </div>
                    <div>
                        <form onSubmit={handleAddReview}>
                            <div class="mb-6">
                                <label for="name" class="block mb-2 text-sm text-gray-600">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                />
                            </div>
                            <div class="mb-6">
                                <label for="email" class="block mb-2 text-sm text-gray-600">Your Image</label>
                                <input
                                    type="text"
                                    name="img"
                                    placeholder="Image Link"
                                    required
                                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                />
                            </div>
                            <div class="mb-6">
                                <label for="phone" class="text-sm text-gray-600">Ratings(Out of 5)</label>
                                <input
                                    type="number"
                                    min='1'
                                    max='5'
                                    name="ratings"
                                    placeholder="Give us ratings"
                                    required
                                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                />
                            </div>
                            <div class="mb-6">
                                <label for="message" class="block mb-2 text-sm text-gray-600">Your Message</label>

                                <textarea
                                    rows="5"
                                    name="review"
                                    placeholder="Your Message"
                                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" required></textarea>
                            </div>
                            <div class="mb-6">
                                <button
                                    type="submit"
                                    class="w-full px-2 py-4 text-white btn btn-primary rounded-md  focus:bg-indigo-600 focus:outline-none">
                                    Send Review
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;