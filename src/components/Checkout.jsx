import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../slicers/CartSlicer";

const Checkout = () => {
  const dispatch = useDispatch();
  const { itemAmount, totalPrice } = useSelector(
    (state) => state.cart.cartItems
  );
  return (
    <>
      <div>
        <h4>Checkout</h4>
        <button onClick={() => dispatch(addItem())}>+</button>
        <p>{itemAmount}</p>
        <button onClick={() => dispatch(removeItem())}>-</button>
        <h4>Total</h4>
        <p>{totalPrice}</p>
      </div>
    </>
  );
};
export default Checkout;
