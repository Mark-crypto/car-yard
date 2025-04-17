import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";

export const NavBar = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <h3 style={{ margin: "auto", color: "white" }}>
          <ul style={{ display: "flex", gap: "60px", alignItems: "center" }}>
            <li>DREAM</li>
            <li>BUY </li>
            <li>DRIVE AWAY</li>
            <li>{cart.length}</li>
          </ul>
        </h3>
      </Navbar>
    </>
  );
};
