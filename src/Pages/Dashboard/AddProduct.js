import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault();
        const product = {
            name: e.target.name.value,
            img: e.target.img.value,
            price: e.target.price.value,
            description: e.target.description.value,
            min: e.target.min.value,
            quantity: e.target.quantity.value
        }
        console.log(product);
        fetch('http://localhost:5000/addproduct', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Successfully added');
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
                        <h1 class="my-3 text-3xl font-semibold text-gray-700">Add Product</h1>
                        <p class="text-gray-400">Fill up the form to add a new product</p>
                    </div>
                    <div>
                        <form onSubmit={handleAddProduct}>
                            <div class="mb-6">
                                <label for="name" class="block mb-2 text-sm text-gray-600">Product Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Product Name"
                                    required
                                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                />
                            </div>
                            <div class="mb-6">
                                <label for="email" class="block mb-2 text-sm text-gray-600">Product Image</label>
                                <input
                                    type="text"
                                    name="img"
                                    placeholder="Image Link"
                                    required
                                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                />
                            </div>
                            <div class="mb-6">
                                <label for="phone" class="text-sm text-gray-600">Price</label>
                                <input
                                    type="number"
                                    name="price"
                                    placeholder="Price"
                                    required
                                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                />
                            </div>
                            <div class="mb-6">
                                <label for="message" class="block mb-2 text-sm text-gray-600">Product Details</label>

                                <textarea
                                    rows="5"
                                    name="description"
                                    placeholder="Product Details"
                                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" required>
                                </textarea>
                            </div>
                            <div class="mb-6">
                                <label for="phone" class="text-sm text-gray-600">Minimum Order</label>
                                <input
                                    type="number"
                                    name="min"
                                    placeholder="Min Order"
                                    required
                                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                />
                            </div>
                            <div class="mb-6">
                                <label for="phone" class="text-sm text-gray-600">Available Quantity</label>
                                <input
                                    type="number"
                                    name="quantity"
                                    placeholder="Available"
                                    required
                                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                />
                            </div>
                            <div class="mb-6">
                                <button
                                    type="submit"
                                    class="w-full px-2 py-4 text-white btn btn-primary rounded-md  focus:bg-indigo-600 focus:outline-none">
                                    Add Product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;