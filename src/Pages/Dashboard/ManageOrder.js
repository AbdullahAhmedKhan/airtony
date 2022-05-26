import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);
    const [ship, setShip] = useState(false);
    useEffect(() => {
        fetch('https://fathomless-reaches-02788.herokuapp.com/orders', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const handleShip = id => {
        fetch(`https://fathomless-reaches-02788.herokuapp.com/order/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
        })

            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success("Successfully Order Shipped");
                    setShip(true);
                }
                else {
                    setShip(false);
                }
            });

    }

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
                                    <td><button className='btn btn-secondary rounded-full btn-sm text-white'>Paid</button></td>
                                    <td>
                                        {
                                            ship ? <button className='btn btn-success rounded-full btn-sm text-white'>Shipped</button> : <button onClick={() => handleShip(order._id)} className='btn btn-success rounded-full btn-sm text-white'>Pending</button>
                                        }

                                        <button onClick={() => handleShip(order._id)} className='ml-3 btn btn-error rounded-full btn-sm text-white'>cancel</button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrder;