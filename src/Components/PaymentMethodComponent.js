import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Alert, Input, UncontrolledAlert } from "reactstrap";
import { CardElement } from "@stripe/react-stripe-js";
import { stripe } from "../config";
import { Elements } from "@stripe/react-stripe-js";
import { ThreeDots } from "react-loader-spinner";
const stripePromise = loadStripe(stripe.STRIPE_PUBLIC_KEY);
//const stripePromise = loadStripe("pk_test_51NxmYyJb6V3kqIJjThKyEiarx3PmxXuYgGbvtPVvl4tGgVWVdoTqLfE5w0bqkddVPKksuLQuohgMqLhdh4THS65W00fPmnZWGl");

const PaymentMethodComponent = ({
  clientSecret,
  customer,
  loadPaymentMethods,
  setOpen,
}) => {
  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm
            customer={customer}
            clientSecret={clientSecret}
            loadPaymentMethods={loadPaymentMethods}
            setOpen={setOpen}
          />
        </Elements>
      )}
    </div>
  );
};

const CheckoutForm = ({
  clientSecret,
  customer,
  loadPaymentMethods,
  setOpen,
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");

  useEffect(() => {
    if (!stripe) {
      return;
    }

    if (!clientSecret) {
      return;
    }
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // check if there is an error
    if (error) {
      toast.error(error.message);
      return;
    }

    // check all stripe errors
    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const cardElement = elements.getElement(CardElement);

    const result = await stripe.confirmCardSetup(clientSecret, {
      payment_method: {
        card: cardElement,
      },
    });

    if (result.error) {
      setError(result.error.message);
      // toast.error(result.error.message);
      setIsLoading(false);
      return;

      // Display a toast here based on the error type
    } else {
      axios
        .post("/api/stripe/storeCard", {
          customer: customer,
          paymentMethodId: result?.setupIntent?.payment_method,
          name: name,
        })
        .then(function (response) {
          // handle success
          console.log(response);
          toast.success("Payment method added successfully");
          loadPaymentMethods();
          setOpen(false);
          setIsLoading(false);
        });

      // Handle successful confirmation, e.g., navigate to the next step
    }
  };

  const paymentElementOptions = {
    layout: "tabs",
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const cardElementStyle = {
    style: {
      base: {
        iconColor: "red",
        color: "red",
        fontWeight: "500",
        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
        fontSize: "16px",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": {
          color: "#fce883",
        },
        "::placeholder": {
          color: "#87BBFD",
        },
        border: "1px solid red",
        borderRadius: "5px",
        padding: "10px",
        backgroundColor: "red",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      },
      invalid: {
        iconColor: "#FFC7EE",
        color: "#FFC7EE",
        border: "1px solid #FFC7EE",
        backgroundColor: "#fff3f4",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      },
    },
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      {error && (
        <div className="nb-3">
          <div
            class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <svg
              class="flex-shrink-0 inline w-4 h-4 me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <div>{error}</div>
          </div>
        </div>
      )}
      <div className="payment-form">
        <div className="tab-container">
          {/* Add more tabs for additional sections if needed */}
        </div>
        <div className="tab-content mt-4">
          <div className="tab-pane active">
            <Input
              type="text"
              className={
                "block w-full rounded-md border-0 py-1.5 text-dark shadow-sm ring-1 ring-inset ring-[#4c4c4c] placeholder:text-[#4c4c4c] focus:ring-2 focus:ring-inset focus:ring-dark sm:text-sm sm:leading-6 bg-transparent"
              }
              placeholder="Card Holder Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <div className="mt-5">
              <CardElement
                options={{ style: cardElementStyle }}
                className={
                  "block w-full rounded-md border-0 py-2.5 shadow-sm ring-1 ring-inset ring-[#4c4c4c] placeholder:text-[#4c4c4c] focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 bg-transparent px-3 text-white "
                }
              />
            </div>
          </div>
          {/* Add more tab panes for additional sections if needed */}

          <button
            disabled={!stripe || isLoading}
            className="font-semibold bg-[#323232] p-1 rounded hover:bg-white hover:text-black transition-all duration-300 text-white px-4 text-sm mt-5"
            type="submit"
          >
            {isLoading ? (
              <div className="flex justify-center items-center">
                <ThreeDots
                  visible={true}
                  height="20"
                  width="30"
                  color={"white"} // Change color based on hover state
                  radius="9"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            ) : (
              "Continue"
            )}
          </button>
        </div>
      </div>

      <div className="mt-3"></div>
    </form>
  );
};

export default PaymentMethodComponent;
