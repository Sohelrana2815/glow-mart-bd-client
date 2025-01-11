import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useTheme from "../../../Hooks/useTheme";

const Checkout = () => {
  const { isDarkMode } = useTheme();

  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const navigate = useNavigate();
  const totalPrice = cart.reduce((acc, curr) => acc + curr.productPrice, 0);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", {
          price: totalPrice,
        })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      // if no stripe and no element
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error.message);
      console.log("[error]", error);
    } else {
      setError("");
      console.log("[paymentMethod]", paymentMethod);
    }

    // confirm card payment

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("[confirm error]", confirmError);
    } else {
      console.log("[payment intent]", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        console.log("Transaction Id", paymentIntent.id);
        // now save the payment in the database
        const payment = {
          email: user?.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(), // utc date convert. use moment js to convert the live time
          cartIds: cart.map((product) => product._id),
          productIds: cart.map((product) => product.productId),
          status: "pending",
        };

        const res = await axiosSecure.post("/payments", payment);
        console.log("payment saved", res.data);
        refetch();
        if (res.data.paymentResult.insertedId) {
          Swal.fire({
            title: "Payment Success!",
            text: "Thank you for ordering",
            icon: "success",
          });
          navigate("/dashboard/paymentHistory");
        }
      }
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
        {/* Form Container */}
        <form
          className="lg:w-1/2 md:w-3/4 w-full py-12 px-6 mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          {/* Payment Form Header */}
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
            Checkout
          </h2>

          {/* Card Element */}
          <div className="mb-6">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "18px",
                    color: isDarkMode ? "#FFF" : "#003161",
                    lineHeight: "2",
                    padding: "20px",
                    borderRadius: "8px", // Rounded corners
                    backgroundColor: isDarkMode ? "#212121" : "#f9f9f9", // Light background for the card input
                    "::placeholder": {
                      color: isDarkMode ? "#AAA" : "#003161", // Lighter placeholder text
                    },
                  },
                  invalid: {
                    color: "#9e2146", // Red color for invalid input
                    iconColor: "#9e2146", // Red color for invalid icon
                  },
                },
              }}
            />
          </div>

          {/* Pay Button */}
          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 disabled:bg-gray-400"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay Now
          </button>

          {/* Error Message */}
          {error && <p className="text-red-600 text-center mt-4">{error}</p>}

          {/* Success Message with Transaction ID */}
          {transactionId && (
            <p className="text-green-600 text-center mt-4">
              Transaction Successful! <br />
              Transaction Id: {transactionId}
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default Checkout;
