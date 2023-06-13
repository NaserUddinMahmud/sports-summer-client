import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";


const CheckoutForm = ({price}) => {
    
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
      if (error) {
        console.log('[error]', error);
        setCardError(error.message);
      } else {
        setCardError('');
        console.log('[PaymentMethod]', paymentMethod);
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
      {cardError && <p className="text-sm text-red-500 mt-2">{cardError}</p>}
      <button className="btn btn-sm bg-green-300 mt-5" type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    
    </>
  );
};

export default CheckoutForm;
