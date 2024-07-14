import React from "react";
import { Grid, Typography } from "@mui/material";
import Logo from "../assets/images/logo-small.png";

const Footer = () => {
  return (
    <>
      <Grid container className="bg-dark text-white p-5">
        <Grid item sm={10} xs={12} md={4} lg={4}>
          <img src={Logo} alt="organization logo" style={{ height: "18rem" }} />
        </Grid>
        <Grid item sm={10} xs={12} md={4} lg={4}>
          <Typography
            variant="h3"
            color="white"
            className="mb-4"
            letterSpacing={2}
          >
            Get in Touch
          </Typography>
          <Typography
            variant="body2"
            color="white"
            lineHeight={"1.7rem"}
            letterSpacing={2}
          >
            13th floor of UCFM Tower,
          </Typography>
          <Typography
            variant="body2"
            color="white"
            lineHeight={"1.7rem"}
            letterSpacing={2}
          >
            Faculty of Medicine,
          </Typography>
          <Typography
            variant="body2"
            color="white"
            lineHeight={"1.7rem"}
            letterSpacing={2}
          >
            University of Colombo,
          </Typography>
          <Typography
            variant="body2"
            color="white"
            lineHeight={"1.7rem"}
            letterSpacing={2}
          >
            Maradana Road, Colombo 07.
          </Typography>
          <Typography
            variant="body2"
            color="white"
            className="mt-3"
            lineHeight={"1.7rem"}
            letterSpacing={2}
          >
            Contact :
          </Typography>
          <Typography
            variant="body2"
            color="white"
            lineHeight={"1.7rem"}
            letterSpacing={2}
          >
            Email : paa-saviya@srg.cmb.ac.lk
          </Typography>
        </Grid>
        <Grid item sm={10} xs={12} md={4} lg={4}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.759191450235!2d79.86994867454109!3d6.919366118437443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259b37a209583%3A0x807a441fc81cbb56!2sUCFM%20Tower%20(Faculty%20of%20Medicine%2C%20UOC)!5e0!3m2!1sen!2slk!4v1720772151008!5m2!1sen!2slk"
            width="400rem"
            height="300rem"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
