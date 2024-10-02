import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";
// TODO ADD PUBLISHABLE KEY
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);
const Payment = () => {
  return (
    <div>
      <SectionTitle heading="Pay to eat" subHeading="Payment" />

      <div>
        <Elements stripe={stripePromise}>
          <Checkout />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
