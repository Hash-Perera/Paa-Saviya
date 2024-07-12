import React from "react";
import "../styles/card-1.css";
import { Button } from "@mui/material";

const CardComponent1 = ({ images }) => {
  return (
    <div className="wrapper">
      {images.map((image, index) => (
        <div className="card-home" key={index}>
          <img src={image.url} alt={image.alt} />
          <div className="info">
            <h1>{image.title}</h1>
            <p>
              Lorem Ipsum is simply dummy text from the printing and typeseting
              industry
            </p>
            <Button variant="outlined" color="primary">
              Read More
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent1;
