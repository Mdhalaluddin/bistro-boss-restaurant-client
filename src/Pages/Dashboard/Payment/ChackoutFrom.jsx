import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxios from "../../../hooks/useAxios";
import useCarts from "../../../hooks/useCarts";
import UseAuth from "../../../hooks/UseAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ChackoutFrom = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState();
    const [transaction, setTransaction] = useState();
    const axiosSecure = useAxios();
    const [clientSecret, setClientSecret] = useState();
    const [cart, refetch] = useCarts();
    const { user } = UseAuth();
    const navigate = useNavigate()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, totalPrice])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError(' ')
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('confirm Error');
        }
        else {
            console.log('payment Intent', paymentIntent);
        }
        if (paymentIntent.status === 'succeeded') {
            console.log('transaction id', paymentIntent.id);
            setTransaction(paymentIntent.id);

            // payment method
            const payment = {
                email: user.email,
                price: totalPrice,
                transactionId: paymentIntent.id,
                data: new Date(),
                cartIds: cart.map(item => item._id),
                menuItemIds: cart.map(item => item.menuId),
                status: 'pending'
            }
            console.log(payment);
            const res = await axiosSecure.post('/payments', payment)
            refetch()
            console.log(res.data);
            if(res.data?.paymentResult?.insertedId){
                Swal.fire({
                    icon: "success",
                    title: "Thanks You",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/dashboard/paymentHistory')
            }
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement className="p-20"
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <div className="flex items-center justify-center">
                <button className="btn btn-outline btn-primary my-2" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </div>
            <p>{error}</p>
            {
                transaction && <p className="text-green-500">Your transaction id: {transaction}</p>
            }
        </form>
    );
};

export default ChackoutFrom;