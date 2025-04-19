import { useDispatch, useSelector } from "react-redux";
import { NavBar } from "../components/NavBar";
import { useEffect } from "react";
import { calculateTotal } from "../slicers/CartSlicer";

const Payment = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(calculateTotal());
  // }, [dispatch]);
  return (
    <>
      <NavBar />
      <h4>Total cost: {cart.totalPrice}</h4>
    </>
  );
};
export default Payment;
