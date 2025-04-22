const PaymentSuccess = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#e6ffed",
    textAlign: "center",
    padding: "20px",
  };

  const iconStyle = {
    fontSize: "80px",
    color: "#28a745",
  };

  const headingStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#218838",
    marginTop: "20px",
  };

  const textStyle = {
    color: "#555",
    marginTop: "10px",
  };

  const buttonStyle = {
    marginTop: "30px",
    padding: "12px 24px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <div style={containerStyle}>
      <div style={iconStyle}>✅</div>
      <h1 style={headingStyle}>Payment Successful!</h1>
      <p style={textStyle}>
        Thank you for your purchase. A confirmation email has been sent.
      </p>
      <button style={buttonStyle} onClick={() => (window.location.href = "/")}>
        Go to Dashboard
      </button>
    </div>
  );
};

export default PaymentSuccess;
