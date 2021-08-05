import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JL8cYBj4ZfzHCo2I65dcNPM9Fz7NtBPyjmIXiaaopeo6hJc3mZtAFH4p5hGst08XWcpiShO4skEL8EKjYctuYxJ00its4970w";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successfully")
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;