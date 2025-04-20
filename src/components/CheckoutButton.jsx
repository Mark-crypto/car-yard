import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useSelector } from "react-redux";
import { FaMoneyBillWave } from "react-icons/fa";

const stripePromise = loadStripe(
  "pk_test_51RFrK4P4tL8oJoCB8anvN2MPSVhrd6a3g6nwlPtxnTfjiQ9PGXQOgniZPk9EhqEZS5fI8o08EppB50tmN2hxBPNm00NynvUq31"
);

export const CheckoutButton = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const itemsNo = useSelector((state) => state.cart.itemAmount);
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    // const items = cartItems;
    const response = await axios.post(
      "http://localhost:5000/create-checkout-session",
      {
        items: cartItems,
      }
    );

    if (response.data.url) {
      window.location.href = response.data.url;
    }
  };

  return (
    <button
      onClick={handleCheckout}
      style={{
        padding: "12px 24px",
        background: "#1e90ff",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      Checkout <FaMoneyBillWave />
    </button>
  );
};
