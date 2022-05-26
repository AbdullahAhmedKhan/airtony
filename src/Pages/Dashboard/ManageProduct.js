import React, { useEffect, useState } from 'react';

const ManageProduct = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div className='m-2 lg:m-12'>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Product</th>
                            <th>Customer Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Payment Status</th>
                            <th>Shipping Status</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map((order, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{order.placeOrderProductName}</td>
                                    <td>{order.customerName}</td>
                                    <td>{order.placePrice}$</td>
                                    <td>{order.placeOrderQuantity}</td>
                                    <td><button className='btn btn-success btn-sm'>Paid</button></td>
                                    <td><button className='btn btn-info btn-sm text-white'>Ship</button></td>

                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;