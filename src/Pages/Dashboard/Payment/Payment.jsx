import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";
// TODO ADD PUBLISHABLE KEY
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);
const Payment = () => {
  return (
    <div>
      <div className="dark:bg-black dark:text-white">
        <SectionTitle heading="Pay to eat" subHeading="Payment" />
      </div>

      <div>
        <Elements stripe={stripePromise}>
          <Checkout />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
