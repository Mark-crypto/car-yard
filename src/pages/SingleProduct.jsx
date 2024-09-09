import React, { useEffect, useState } from "react";
import dodge from "../assets/dodge.jpg";
import { useParams } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Footers } from "../components/Footers";

export const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetch(`https://freetestapi.com/api/v1/cars/${id}`);
        const response = await data.json();

        setProduct(response);
      };
      fetchData();
    } catch (error) {
      console.error("Error: ", error.name);
    }
  }, []);

  return (
    <>
      <NavBar />
      <div className="single-product">
        <div className="single-product-image">
          <img
            src={dodge}
            alt={product.make}
            style={{ width: "500px", height: "350px", borderRadius: "10px" }}
          />
        </div>
        <div className="single-product-info">
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>{product.make}</p>
          <p>
            <span style={{ fontWeight: "bold" }}>Price: </span>${product.price}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Model: </span>
            {product.model}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Mileage: </span>
            {product.mileage}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Engine: </span>
            {product.engine}
          </p>
          <button type="button" onClick={() => setShow(!show)}>
            {show ? <h4>0712345678</h4> : <h4>Contact Dealer</h4>}
          </button>
        </div>
      </div>

      <section className="single-product-description">
        <h4 style={{ textAlign: "center", textDecoration: "underline" }}>
          FULL CAR DETAILS
        </h4>
        <div className="desc">
          <div className="desc-1">
            <p>
              {" "}
              <span style={{ fontWeight: "bold" }}>Model: </span>
              {product.model}
            </p>
            <p>
              {" "}
              <span style={{ fontWeight: "bold" }}>Make: </span>
              {product.make}
            </p>
            <p>
              {" "}
              <span style={{ fontWeight: "bold" }}>Price: </span>$
              {product.price}
            </p>
            <p>
              {" "}
              <span style={{ fontWeight: "bold" }}>Engine: </span>{" "}
              {product.engine}
            </p>
            <p>
              {" "}
              <span style={{ fontWeight: "bold" }}>Mileage: </span>{" "}
              {product.mileage}
            </p>
            <p>
              {" "}
              <span style={{ fontWeight: "bold" }}>Features: </span>
              {product.features}
            </p>
          </div>
          <div className="desc-2">
            <p>
              {" "}
              <span style={{ fontWeight: "bold" }}>Year: </span>
              {product.year}
            </p>
            <p>
              {" "}
              <span style={{ fontWeight: "bold" }}>Color: </span>
              {product.color}
            </p>
            <p>
              {" "}
              <span style={{ fontWeight: "bold" }}>Fuel Type: </span>{" "}
              {product.fuelType}
            </p>
            <p>
              {" "}
              <span style={{ fontWeight: "bold" }}>Horsepower:</span>{" "}
              {product.horsepower}
            </p>
            <p>
              {" "}
              <span style={{ fontWeight: "bold" }}>Previous owners: </span>{" "}
              {product.owners}
            </p>
            <p>
              {" "}
              <span style={{ fontWeight: "bold" }}>Transmission: </span>{" "}
              {product.transmission}
            </p>
          </div>
        </div>
      </section>
      <Footers />
    </>
  );
};
