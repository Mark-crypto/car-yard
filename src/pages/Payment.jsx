import { useSelector } from "react-redux";
import { NavBar } from "../components/NavBar";
import { Footers } from "../components/Footers";
import { CheckoutButton } from "../components/CheckoutButton";

const Payment = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <NavBar />
      <h4>Total cost: {cart.totalPrice}</h4>
      <CheckoutButton />
      <Footers />
    </>
  );
};
export default Payment;
