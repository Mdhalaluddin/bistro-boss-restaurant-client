import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const ChackoutFrom = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState();
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)
        if (card == null) {
            return;
        }
        // const {error, paymentMethod}= await stripe.createPaymentMethod({
        //     type: 'card',
        //     card,

        // })
        // if(error){
        //     console.log('payment error', error);
        //     setError(error.message)
        // }else{
        //     console.log('paymentMethod', paymentMethod);
        //     setError('')
        // }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
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
                <button className="btn btn-outline btn-primary my-2" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </div>
            <p>{error}</p>
        </form>
    );
};

export default ChackoutFrom;