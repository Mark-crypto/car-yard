import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../slicers/CartSlicer";

const Checkout = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart);

  return (
    <>
      <div>
        <h4>Checkout</h4>
        <button onClick={() => dispatch(addItem())}>+</button>
        <p>{data.itemAmount}</p>
        <button onClick={() => dispatch(removeItem())}>-</button>
        <h4>Total</h4>
        <p>{data.totalPrice}</p>
      </div>
    </>
  );
};
export default Checkout;
