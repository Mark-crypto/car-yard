import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { TiShoppingCart } from "react-icons/ti";
import "./components.css";

export const NavBar = () => {
  const itemsInCart = useSelector((state) => state.cart.cartItems.length);
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
        style={{
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <ul className="nav-list">
          <li>
            <h4>
              <a href="/">
                <i>Dreams Car Yard</i>
              </a>
            </h4>
          </li>
          <li>
            <a href="/products">
              <h5>Shopping Cart</h5>
              <TiShoppingCart style={{ fontSize: "25px" }} />{" "}
              <h5> {itemsInCart} </h5>
            </a>
          </li>
        </ul>
      </Navbar>
    </>
  );
};
