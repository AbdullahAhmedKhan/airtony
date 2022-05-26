import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { async } from "@firebase/util";

const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [cardError, setCardError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");
    const [success, setSuccess] = useState("");

    const { _id, placePrice, customerName, customerEmail } = order;

    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${ localStorage.getItem("accessToken") }`,
      },
        body: JSON.stringify({ placePrice }),
    })
      .then((res) => res.json())
    .then((data) => {
        if (data?.clientSecret) {
            setClientSecret(data.clientSecret);
        }
    });
  }, [placePrice]);

const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
        return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
        return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card,
    });

    if (error) {
        setCardError(error?.message);
    } else {
        setCardError("");
    }
    setSuccess("");
    setProcessing(true);

    // confirm card payment
    const { paymentIntent, error: intentError } =
        await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: customerName,
                    email: customerEmail,
                },
            },
        });

    if (intentError) {
        setCardError(intentError?.message);
        setProcessing(false);
    } else {
        setCardError("");
        setTransactionId(paymentIntent.id);
        console.log(paymentIntent);
        setSuccess("Congrats! Your payment is completed");

        //store payment on database
        const payment = {
            order: _id,
            transactionId: paymentIntent.id,
        };

        fetch(`http://localhost:5000/placeorder/${_id}`, {
            method: "PATCH",
            headers: {
            "content-type": "application/json",
            authorization: `Bearer ${ localStorage.getItem("accessToken") }`,
        },
    body: JSON.stringify(payment),
      })
        .then((res) => res.json())
    .then((data) => {
        setProcessing(false);
        console.log(data);
    });
    }
  };

return (
    <>
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: "16px",
                            color: "#424770",
                            "::placeholder": {
                                color: "#aab7c4",
                            },
                        },
                        invalid: {
                            color: "#9e2146",
                        },
                    },
                }}
            />
            <button
                disabled={!stripe || !clientSecret}
                className="btn btn-sm btn-success mt-5"
                type="submit"
            >
                Pay
            </button>
        </form>
        {cardError && <p className="text-red-500">{cardError}</p>}
        {success && (
            <div className="text-green-500">
                <p>{success}</p>
                <p>
                    Your Transaction Id:{" "}
                    <span className="text-orange-500">{transactionId}</span>
                </p>
            </div>
        )}
    </>
);
};

export default CheckoutForm;