import React from "react";
import { Button, Card } from "react-bootstrap";
import dodge from "../assets/dodge.jpg";

export const Posts = ({ currentPosts, handleClick }) => {
  return (
    <>
      {currentPosts
        .sort((a, b) => a.make.localeCompare(b.make))
        .map((car) => {
          const { id, engine, make, mileage, model, price } = car;
          return (
            <Card style={{ width: "15rem", height: "fit-content" }} key={id}>
              <Card.Img variant="top" src={dodge} alt={make} />
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold" }}>{make}</Card.Title>

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

                <Button
                  variant="primary"
                  type="button"
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
