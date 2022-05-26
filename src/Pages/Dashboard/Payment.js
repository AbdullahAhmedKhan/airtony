import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";
import auth from "../../firebase.init";

const stripePromise = loadStripe(
    "pk_test_51L1xiKGAvdj4AleZ0D28l8OjuapgOGlXP78648gvVmdiX9Q1gaGY4Wv762IlFPk9HESwW8j5OF1mOPWSiiOBhshg00uqD0mwes"
);

const Payment = () => {
    const [user] = useAuthState(auth);
    const { paymentId } = useParams();
    const url = `https://fathomless-reaches-02788.herokuapp.com/placeorder/${paymentId}`;
    const { data: order, isLoading } = useQuery(["order", paymentId], () =>
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            }
        }).then((res) => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div className="px-6 lg:px-12">
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-xl text-secondary">Hello, {user.displayName} ☺</p>
                    <h2 class="card-title">
                        Please pay for{" "}
                        <span className="font-bold">{order.placeOrderProductName}</span>
                    </h2>

                    <p>
                        Please Pay:{" "}
                        <span className="text-orange-500">${order.placePrice}</span>
                    </p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;