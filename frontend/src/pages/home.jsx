import React from "react";
import { Button, Grid, Typography, Box } from "@mui/material";
import CommonCard from "../components/shared/common-card";
import "../styles/home.css";
import CardComponent1 from "../components/card-1";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fab from "@mui/material/Fab";
import { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

//!Images
import backgroundImage from "../assets/images/hero-foot-print.png";
// import edu1 from "../assets/images/home/education_1.jpg";
// import edu2 from "../assets/images/home/education_2.jpg";
// import edu3 from "../assets/images/home/education_3.jpg";
// import ser1 from "../assets/images/home/services_1.avif";
// import ser2 from "../assets/images/home/services_2.jpg";
// import proj1 from "../assets/images/home/projects_1.avif";
// import proj2 from "../assets/images/home/projects_2.jpg";
// import proj3 from "../assets/images/home/projects_3.jpg";
import partner1 from "../assets/images/partners/NIROGI.png";
import partner2 from "../assets/images/partners/SLMA.png";
import partner3 from "../assets/images/partners/SLSVS.png";
import IconCapacityBuilding from "../assets/images/home/Icon- Capacity Building.png";
import IconPostheticLimb from "../assets/images/home/Icon- prosthetic_limb.jpg";
import IconResearchAndDevelopment from "../assets/images/home/Icon- Research_Dev.jpg";
import IconHealthEducation from "../assets/images/home/Icon- Health Education.jpg";
import IconDiagnoServices from "../assets/images/home/Icon- Diagno services.webp";
import IconStepSmart from "../assets/images/home/Icon- Step Smart.jpg";
import IconDiabeticShoe from "../assets/images/home/Icon- Diabetic Shoe.png";
import IconWoundCare from "../assets/images/home/Icon- Wound Care Clinic.png";

const Home = () => {
  const Navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Step Smart",
      url: IconStepSmart,
      description:
        "Personalized diabetic insoles: optimal support, comfort, and foot health.",
      navigationUrl: "/projects",
    },
    {
      id: 2,
      title: "Diabetic Shoe Project",
      url: IconDiabeticShoe,
      navigationUrl: "/projects#upcommingProjectSection",
    },
    {
      id: 3,
      title: "Prosthetic Limb Project",
      url: IconPostheticLimb,
      navigationUrl: "/projects#upcommingProjectSection",
    },
  ];

  const education = [
    {
      id: 1,
      name: "Capacity Building",
      url: IconCapacityBuilding,
      color: "#dbecf6",
      navigationUrl: "/education",
    },
    {
      id: 2,
      name: "Health Education",
      url: IconHealthEducation,
      color: "#65d2d9",
      navigationUrl: "/education#otherEducationSection",
    },
    {
      id: 3,
      name: "Research and Development",
      url: IconResearchAndDevelopment,
      color: "#e3e9ff",
      navigationUrl: "/education#otherEducationSection",
    },
  ];

  const services = [
    { id: 1, name: "Wound Care Clinic", url: IconWoundCare, color: "#dbecf6" },
    {
      id: 2,
      name: "Diagnostic Services",
      url: IconDiagnoServices,
      color: "#9ce5f0",
    },
  ];

  const partners = [
    { id: 1, url: partner1 },
    { id: 2, url: partner2 },
    { id: 3, url: partner3 },
  ];

  const { ref: firstSectionRef, inView: firstSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: firstSectionRef2, inView: firstSectionInView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: firstSectionRef3, inView: firstSectionInView3 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        // Adjust the scroll position as needed
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-start vh-100"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 80,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            zIndex: 1,
          }}
        ></div>
        <Box sx={{ p: 10, position: "relative", zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, x: -600 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <Typography variant="h2" color="white" textAlign="start">
              Paa-SAVIYA
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 600 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <Typography
              variant="h6"
              color="white"
              textAlign="start"
              className="mt-4"
              sx={{ fontStyle: "italic" }}
            >
              Limb Salvage and Innovations Alliance of University of Colombo
            </Typography>
          </motion.div>
        </Box>
      </div>

      <div
        style={{
          background:
            "linear-gradient(to bottom right, #103a6d, #1e5799, #2989d8, #7db9e8)",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={firstSectionInView ? { opacity: 1 } : {}}
          transition={{ duration: 2 }}
          ref={firstSectionRef}
        >
          <Box className="d-flex flex-column align-items-center" sx={{ p: 14 }}>
            <Typography variant="h5" color="white" textAlign="center">
              Wounds are an unavoidable part of our human journey, and healing
              is the lifeline that ensures our survival. Yet, in a few where
              this fascinating process is altered, complex wounds demand the
              delicate art of limb salvage and the tender touch of expert
              healing.
            </Typography>

            <Typography
              variant="h5"
              color="white"
              textAlign="center"
              className="mt-4"
            >
              Join us in our journey to transform wound care. Together, we can
              advance knowledge, save limbs and improve their quality of life.
            </Typography>
          </Box>
        </motion.div>
      </div>

      <div
        style={{
          paddingLeft: "8%",
          paddingRight: "8%",
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
        <Grid container spacing={1}>
          <Grid
            container
            xs={12}
            sm={6}
            md={4}
            lg={4}
            spacing={2}
            justifyContent={"space-evenly"}
            marginRight={"1rem"}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              className="d-flex flex-column align-items-center mb-5"
            >
              <Typography variant="h4" color="textPrimary">
                Our Partners
              </Typography>
            </Grid>

            {partners.map((partner, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={partner.id}
                className="d-flex justify-content-center"
              >
                <CommonCard
                  index={index}
                  style={{
                    position: "relative",
                    width: "6rem",
                    height: "6rem",
                  }}
                  className="d-flex flex-column align-items-center justify-content-center"
                >
                  <img
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src={partner.url}
                    alt={`Partner ${index + 1}`}
                  />
                </CommonCard>
              </Grid>
            ))}
          </Grid>

          <Grid
            xs={12}
            sm={6}
            md={8}
            lg={8}
            sx={{
              boxShadow: 1,
              padding: "1rem",
              backgroundColor: "lightblue",
            }}
          >
            <Typography
              variant="h6"
              color={"black"}
              style={{ fontWeight: 700 }}
            >
              Highlights
            </Typography>
            <List
              sx={{
                width: "100%",
                maxWidth: "100%",
                bgcolor: "lightblue",
                color: "black",
              }}
            >
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <CalendarMonthIcon />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography
                        variant="body1"
                        color="black"
                        component="span"
                        fontWeight={550}
                      >
                        Steps Against Diabetes: Walking the Pekoe Trail with
                        Seeni Colombo
                      </Typography>
                    </React.Fragment>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        variant="body2"
                        color="black"
                        component="span"
                      >
                        22nd July -16th August, 2024
                      </Typography>
                      <br />
                      <Typography
                        variant="body2"
                        color="black"
                        component="span"
                      >
                        Paa-SAVIYA will join hands with Seeni Colombo for “Steps
                        Against Diabetes: Walking the Pekoe Trail,” a
                        300-kilometer journey supporting diabetic foot care and
                        treatment. Donations from this project will be directed
                        to Paa-SAVIYA to enhance our efforts in providing
                        crucial care and support.
                      </Typography>
                      <br />
                    </React.Fragment>
                  }
                />
              </ListItem>
              {/* <Divider variant="inset" component="li" /> */}
            </List>
          </Grid>
        </Grid>
      </div>

      {/* Projects section */}
      <div
        style={{
          paddingLeft: "8%",
          paddingRight: "8%",
          paddingTop: "5rem",
          paddingBottom: "5rem",
          height: "90vh",
        }}
        className="bg-light"
      >
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            className="d-flex flex-column align-items-center mb-5"
          >
            <Typography variant="h2" color="textPrimary">
              Our Projects
            </Typography>
            <Typography variant="body1" color="textSecondary" align="center">
              Explore our ongoing and completed projects to see how we are
              making a difference in the healthcare landscape.
            </Typography>
          </Grid>
        </Grid>

        <CardComponent1 images={projects} />
      </div>

      {/* Education section */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={firstSectionInView2 ? { opacity: 1 } : {}}
        transition={{ duration: 3 }}
        ref={firstSectionRef2}
        style={{
          paddingLeft: "12%",
          paddingRight: "12%",
          paddingTop: "5rem",
          paddingBottom: "5rem",
          height: "90vh",
        }}
      >
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            className="d-flex flex-column align-items-center mb-5"
          >
            <Typography variant="h2" color="textPrimary">
              Education
            </Typography>
            <Typography variant="body1" color="textSecondary" align="center">
              We aim to conduct educational and clinical training for
              undergraduate, postgraduate students and healthcare professionals
              as well as offer comprehensive research training and engage in
              collaborative research with members, institutes, and international
              universities.
            </Typography>
          </Grid>

          {education.map((edu, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              className="d-flex align-items-center justify-content-center mt-3"
            >
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <CommonCard
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        borderRadius: "10px",
                      }}
                      className="d-flex flex-column align-items-center justify-content-center"
                    >
                      <img
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        src={edu.url}
                        alt="Education Image"
                      />
                    </CommonCard>
                  </div>
                  <div className="flip-card-back">
                    <CommonCard
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        backgroundColor: edu.color,
                        borderRadius: "10px",
                      }}
                      className="d-flex flex-column align-items-center justify-content-center"
                    >
                      <Typography
                        variant="h5"
                        color="textPrimary"
                        style={{
                          position: "absolute",
                          top: "30%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          color: "black",
                          padding: "5px 10px",
                          borderRadius: "5px",
                          fontWeight: "600",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {edu.name}
                      </Typography>
                      <Button
                        variant="outlined"
                        className="mt-5"
                        color="primary"
                        onClick={() => {
                          Navigate(edu.navigationUrl);
                        }}
                      >
                        Explore
                      </Button>
                    </CommonCard>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      {/* Service section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={firstSectionInView3 ? { opacity: 1 } : {}}
        transition={{ duration: 2 }}
        ref={firstSectionRef3}
        style={{
          paddingLeft: "15%",
          paddingRight: "15%",
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
        className="bg-light"
      >
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            className="d-flex flex-column align-items-center mb-5"
          >
            <Typography variant="h2" color="textPrimary">
              Our Services
            </Typography>
            <Typography variant="body1" color="textSecondary" align="center">
              Delivering comprehensive and specialized care through our Wound
              Care Clinic and advanced diagnostic services, ensuring precise
              treatment and enhanced healthcare outcomes for all.
            </Typography>
          </Grid>

          {services.map((serv, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={6}
              className="d-flex align-items-center justify-content-center mt-3"
            >
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <CommonCard
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                      }}
                      className="d-flex flex-column align-items-center justify-content-center"
                    >
                      <img
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                        src={serv.url}
                      />
                    </CommonCard>
                  </div>
                  <div className="flip-card-back">
                    <CommonCard
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        backgroundColor: serv.color,
                      }}
                      className="d-flex flex-column align-items-center justify-content-center"
                    >
                      <Typography
                        variant="h6"
                        color="textPrimary"
                        style={{
                          position: "absolute",
                          top: "30%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          color: "black",
                          padding: "5px 10px",
                          borderRadius: "5px",
                          fontWeight: "600",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {serv.name}
                      </Typography>
                      <Button
                        variant="outlined"
                        className="mt-5"
                        color="primary"
                        onClick={() => {
                          Navigate("/services");
                        }}
                      >
                        Explore
                      </Button>
                    </CommonCard>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      {/* <div className="floating-new-button">
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Box>
      </div> */}
      <div className={`scroll-top-button ${visible ? "visible" : "hidden"}`}>
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Fab color="primary" aria-label="add" onClick={handleScrollToTop}>
            <KeyboardArrowUpIcon />
          </Fab>
        </Box>
      </div>
    </>
  );
};

export default Home;
