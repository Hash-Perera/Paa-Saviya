import React from "react";
import "../styles/card-1.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CardComponent1 = ({ images }) => {
  const Navigate = useNavigate();

  return (
    <div className="wrapper">
      {images.map((image, index) => (
        <div className="card-home" key={index}>
          <img src={image.url} alt={image.alt} />
          <div className="info">
            <h1>{image.title}</h1>
            <p>{image.description}</p>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                color: "white",
                borderColor: "white",
              }}
              onClick={() => {
                Navigate(image.navigationUrl);
              }}
            >
              Read More
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent1;
