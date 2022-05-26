import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ManageAllProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/part', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/part/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
        })

            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success("Deleted");
                }
            });
    }

    return (
        <div className='m-2 lg:m-12'>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Product Image</th>
                            <th>Product</th>
                            <th>Available Quantity</th>
                            <th>Price</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.map(product => <>
                                <tr>
                                    <th><img className='w-12' src={product.img} alt="Product Image" /></th>
                                    <td>{product.name}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.price}$</td>
                                    {/* <td><button onClick={() => handleDelete(product._id)} className='btn btn-error btn-sm'>Delete</button></td> */}
                                    <td><label for="deleteModal" class="btn modal-button btn-error btn-sm">Delete</label></td>
                                </tr>


                                <input type="checkbox" id="deleteModal" class="modal-toggle" />

                                <div class="modal">
                                    <div class="modal-box">
                                        <h3 class="font-bold text-error text-lg">Are you want to Delete?</h3>
                                        <p class="py-4">Once you delete it will deleted permanently!</p>
                                        <div class="modal-action">
                                            <label onClick={() => handleDelete(product._id)} for="deleteModal" class="btn">OK</label>

                                            <label for="deleteModal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                        </div>
                                    </div>
                                </div>

                            </>


                            )




                        }

                    </tbody>
                </table>
            </div>







        </div >
    );
};

export default ManageAllProduct;