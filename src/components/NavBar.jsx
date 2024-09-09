import Navbar from "react-bootstrap/Navbar";

export const NavBar = () => {
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
          </ul>
        </h3>
      </Navbar>
    </>
  );
};
