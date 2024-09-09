import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Loading } from "./Loading";
import "./components.css";
import dodge from "../assets/dodge.jpg";

export const ProductCard = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetch("https://freetestapi.com/api/v1/cars");
        const response = await data.json();
        const newData = response.slice(0, 8);
        setData(newData);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      console.error("You have encountered an error:", error.message);
    }
  }, []);
  const handleClick = (id) => {
    window.location.href = `/product/${id}`;
  };
  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  if (isError) {
    return <p>Error encountered</p>;
  }
  return (
    <>
      {data.map((car) => {
        const { id, engine, make, mileage, model, price } = car;
        return (
          <Card style={{ width: "18rem", textAlign: "center" }} key={id}>
            <Card.Img variant="top" src={dodge} alt={make} />
            <Card.Body>
              <Card.Title style={{ fontWeight: "bold" }}>{make}</Card.Title>
              <Card.Text>
                <p>
                  <span style={{ fontWeight: "bold" }}>Price: </span>${price}{" "}
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Mileage: </span>
                  {mileage} Km
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Engine: </span> {engine}{" "}
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Make: </span> {model}{" "}
                </p>
              </Card.Text>
              <Button
                variant="primary"
                style={{ width: "100%" }}
                onClick={() => handleClick(id)}
              >
                Car Details
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};
