import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const singleClass = useLoaderData()
    const price = singleClass.price
 console.log(price,singleClass);


  return (
    <div className="w-1/2">
      <h2 className="text-2xl font-bold mb-5">Proceed to payment</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price} singleClass={singleClass}/>
      </Elements>
    </div>
  );
};

export default Payment;
