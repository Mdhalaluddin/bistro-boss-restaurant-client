import { loadStripe } from "@stripe/stripe-js";
import Heading from "../../../Components/Hadding/Heading";
import { Elements } from "@stripe/react-stripe-js";
import ChackoutFrom from "./ChackoutFrom";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_METOTH)
const Payment = () => {
    return (
        <div>
            <Heading heading='Payment' subHeading='Get to many'></Heading>
            <div>
                <Elements stripe={stripePromise}>
                    <ChackoutFrom />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;