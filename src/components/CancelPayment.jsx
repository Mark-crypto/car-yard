import React from "react";

const CancelPayment = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#ffe6e6",
    textAlign: "center",
    padding: "20px",
  };

  const iconStyle = {
    fontSize: "80px",
    color: "#dc3545",
  };

  const headingStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#c82333",
    marginTop: "20px",
  };

  const textStyle = {
    color: "#555",
    marginTop: "10px",
  };

  const buttonStyle = {
    marginTop: "30px",
    padding: "12px 24px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <div style={containerStyle}>
      <div style={iconStyle}>❌</div>
      <h1 style={headingStyle}>Payment Cancelled</h1>
      <p style={textStyle}>
        Your payment was not completed. You can try again later.
      </p>
      <button style={buttonStyle} onClick={() => (window.location.href = "/")}>
        Return Home
      </button>
    </div>
  );
};

export default CancelPayment;
