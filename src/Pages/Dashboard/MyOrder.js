import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrder = () => {
    const [user, loading] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://fathomless-reaches-02788.herokuapp.com/placeorder?email=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user])
    if (loading) {
        <Loading></Loading>
    }
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
                                    <td>{order.placePrice && !order.paid && (
                                        <Link to={`/dashboard/payment/${order._id}`}>
                                            <button className="btn btn-xs btn-secondary lg:px-5">
                                                Pay
                                            </button>
                                        </Link>
                                    )}
                                        {order.placePrice && order.paid && (
                                            <div>
                                                <button className="btn btn-xs btn-success disabled text-white lg:px-4">
                                                    Paid
                                                </button>
                                                <p>
                                                    Transaction id:{" "}
                                                    <span className="text-primary">
                                                        {order.transactionId}
                                                    </span>
                                                </p>
                                            </div>
                                        )}
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

export default MyOrder;