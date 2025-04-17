import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../slicers/CartSlicer";

const Checkout = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart);
  const price = 300;

  return (
    <>
      <div>
        <h4>Checkout</h4>
        <button onClick={() => dispatch(addItem())}>+</button>
        <p>{data.itemAmount}</p>
        <button onClick={() => dispatch(removeItem())}>-</button>
        <h4>Total</h4>
        <p>{data.itemAmount * price}</p>
      </div>
    </>
  );
};
export default Checkout;
