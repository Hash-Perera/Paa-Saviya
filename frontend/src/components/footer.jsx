import React from "react";
import { Grid, Typography } from "@mui/material";
import Logo from "../assets/images/logo-small.png";

const Footer = () => {
  return (
    <>
      <div
        className="d-flex align-items-center bg-dark text-white p-5"
        style={{ height: "50vh" }}
      >
        <div style={{ width: "25%" }}>
          <img src={Logo} alt="organization logo" style={{ height: "20rem" }} />
        </div>

        <div
          style={{ width: "75%" }}
          className="d-flex align-items-center justify-content-center"
        >
          <div>
            <Typography variant="h3" color="white" className="mb-2">
              Get in Touch
            </Typography>
            <Typography variant="body2" color="white">
              13th floor of UCFM Tower,
            </Typography>
            <Typography variant="body2" color="white">
              Faculty of Medicine,
            </Typography>
            <Typography variant="body2" color="white">
              University of Colombo,
            </Typography>
            <Typography variant="body2" color="white">
              Maradana Road, Colombo 07.
            </Typography>
            <Typography variant="body2" color="white" className="mt-3">
              Contact : 01125588794
            </Typography>
            <Typography variant="body2" color="white">
              Email : paa-saviya@srg.cmb.ac.lk
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
