import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [user, loading] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/placeorder?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user])
    return (
        <div className='m-5'>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Product</th>
                            <th>quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map((order, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{order.placeOrderProductName}</td>
                                    <td>{order.placeOrderQuantity}</td>
                                    <td>{order.placePrice}$</td>
                                    <td><button className='btn btn-error btn-xs'>Delete</button></td>
                                    <td><button className='btn btn-success btn-sm text-white'>Pay</button></td>

                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;