import React from "react";
import { Spinner } from "react-bootstrap";

export const Loading = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "60px" }}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};
