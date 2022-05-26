import { parse } from '@fortawesome/fontawesome-svg-core';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
const Checkout = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { _id, name, img, description, quantity, min, price } = product;
    const [qError, setqError] = useState('');

    const navigate = useNavigate();

    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        const url = `https://fathomless-reaches-02788.herokuapp.com/part/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId])
    if (loading) {
        <Loading></Loading>
    }

    const [Tprice, setTprice] = useState('');

    const handleQuantity = e => {
        const InputQuantity = e.target.value;
        setTprice(price * InputQuantity);

        if (InputQuantity < min) {
            setqError(`Please order minimum ${min} parts to purchased`);
        }
        else if (InputQuantity > quantity) {
            setqError(`Please order less than ${quantity} parts to purchased`);
        }
        else {
            setqError('');
        }
    }
    const handlePlaceOrder = e => {
        e.preventDefault();
        const placeOrder = {
            placeOrderProduct: _id,
            placeOrderProductName: name,
            customerEmail: user.email,
            customerName: user.displayName,
            phone: e.target.phone.value,
            address: e.target.address.value,
            placePrice: Tprice,
            placeOrderQuantity: e.target.Iquantity.value
        }
        if (qError) {
            return;
        }
        else {
            fetch('https://fathomless-reaches-02788.herokuapp.com/placeOrder', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(placeOrder)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success('Your order successfully added');
                        navigate('/dashboard');
                    }
                })
        }

    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div class="lg:m-24 m-12 max-w-xl card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-48' src={img} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <p className='text-md text-warning font-bold'>Price {price}$</p>
                    <p>Available Quantity: {quantity}</p>
                    <p className='btn btn-warning w-36 btn-outline btn-xs shadow-xl'>Minimum Order: {min}</p>
                </div>
            </div>


            <div class="shadow-xl rounded-xl py-12">

                <div class="bg-white p-10  mx-auto">

                    <form onSubmit={handlePlaceOrder}>
                        <div class="flex items-center mb-5">

                            <label for="name" class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Name</label>
                            <input type="text" id="name" name="name" value={user.displayName}
                                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600
                      outline-none" disabled />
                        </div>
                        <div class="flex items-center mb-5">

                            <label for="name" class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Email</label>
                            <input type="text" id="name" name="email"
                                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600" value={user.email} disabled />
                        </div>
                        <div class="flex items-center mb-5">

                            <label for="name" class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Product</label>
                            <input type="text" id="name" name="name" value={name}
                                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600
                      outline-none" disabled />
                        </div>
                        <div class="flex items-center mb-5">

                            <label for="name" class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Quantity</label>
                            <input onChange={handleQuantity} type="number" name="Iquantity" placeholder="Quantity"
                                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none" defaultValue={min} />


                        </div>
                        <p className='ml-28 text-error text-xs'>{qError}</p>


                        <div class="flex items-center mb-5">

                            <label for="name" class="inline-block w-20 mr-6 text-right font-bold text-gray-600">Price</label>
                            <input type="number" name="Iprice" placeholder="Price"
                                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-40 text-gray-600 placeholder-gray-400 outline-none" value={Tprice} disabled />
                        </div>

                        <div class="flex items-center mb-5">

                            <label for="name" class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Phone</label>
                            <input type="text" id="name" name="phone" placeholder="Contact No."
                                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400
                      outline-none" required />
                        </div>
                        <div class="flex items-center mb-5">

                            <label for="name" class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Address</label>
                            <input type="text" id="name" name="address" placeholder="Address"
                                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none" required />
                        </div>



                        <div class="text-right">

                            {
                                qError ? <button class="btn btn-primary font-bold" disabled={true}>Place Order</button> : <button class="btn btn-primary font-bold" disabled={false}>Place Order</button>
                            }

                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;