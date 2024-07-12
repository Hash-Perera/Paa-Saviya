import { Button, Grid, Typography, Box } from "@mui/material";
import CommonCard from "../components/shared/common-card";
import backgroundImage from "../assets/images/sample-hero.jpg";
import "../styles/home.css";
import CardComponent1 from "../components/card-1";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

//!Images
import edu1 from "../assets/images/home/education_1.jpg";
import edu2 from "../assets/images/home/education_2.jpg";
import edu3 from "../assets/images/home/education_3.jpg";
import ser1 from "../assets/images/home/services_1.avif";
import ser2 from "../assets/images/home/services_2.jpg";
import proj1 from "../assets/images/home/projects_1.avif";
import proj2 from "../assets/images/home/projects_2.jpg";
import proj3 from "../assets/images/home/projects_3.jpg";

const Home = () => {
  const projects = [
    {
      id: 1,
      title: "Step Smart",
      url: proj1,
    },
    {
      id: 2,
      title: "Pāda Diabetic Shoe Project",
      url: proj2,
    },
    {
      id: 3,
      title: "Prosthetic Limb Project",
      url: proj3,
    },
  ];

  const education = [
    {
      id: 1,
      name: "Capacity Building",
      url: edu2,
      color: "#dbecf6",
    },
    {
      id: 2,
      name: "Health Education",
      url: edu1,
      color: "#65d2d9",
    },
    {
      id: 3,
      name: "Research and Development",
      url: edu3,
      color: "#e3e9ff",
    },
  ];

  const services = [
    { id: 1, name: "Wound Care Clinic", url: ser1, color: "#dbecf6" },
    { id: 2, name: "Diagnostic Services", url: ser2, color: "#9ce5f0" },
  ];

  // const aboutUs = ["Our Vision", "Our Founders", "Our Services"];

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
        <Box sx={{ p: 14 }}>
          <motion.div
            initial={{ opacity: 0, x: -600 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <Typography variant="h3" color="textPrimary" textAlign="start">
              Paa-Saviya Foundation
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 600 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <Typography
              variant="h6"
              color="textPrimary"
              textAlign="start"
              className="mt-4"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              <br /> Deleniti ducimus cumque natus esse itaque voluptatum sequi
              porro quos,
              <br /> consectetur atque.
            </Typography>
          </motion.div>
        </Box>
      </div>

      <div
        style={{
          height: "60vh",
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
              is the lifeline that ensures our survival. In the tapestry of
              life, the body's remarkable ability to mend itself often goes
              unnoticed, a silent marvel we rarely appreciate until it's
              challenged.
            </Typography>

            <Typography
              variant="h5"
              color="white"
              textAlign="center"
              className="mt-4"
            >
              Join us in our journey to transform wound care. Together, we can
              advance knowledge, improve outcomes, and provide the highest
              quality of care to those in need.
            </Typography>
          </Box>
        </motion.div>
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

          {/* {projects.map((project, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              className="d-flex align-items-center justify-content-center mt-3"
            >
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
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
                        src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A6A0477DA809F962FBA9A54E53C40E66F6182B822AC8CF0AD1BCDFB8D8CBEC6A/scale?width=1200&aspectRatio=1.78&format=webp"
                      />
                    </CommonCard>
                  </div>
                  <div class="flip-card-back">
                    <CommonCard
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
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
                          // backgroundColor: "rgba(0, 0, 0, 0.5)",
                          color: "black",
                          padding: "5px 10px",
                          borderRadius: "5px",
                        }}
                      >
                        {project.name}
                      </Typography>
                      <Button
                        variant="outlined"
                        className="mt-5"
                        color="primary"
                      >
                        Explore
                      </Button>
                    </CommonCard>
                  </div>
                </div>
              </div>
            </Grid>
          ))} */}
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
              Explore our ongoing and completed projects to see how we are
              making a difference in the healthcare landscape.
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
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
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
                        src={edu.url}
                      />
                    </CommonCard>
                  </div>
                  <div class="flip-card-back">
                    <CommonCard
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        backgroundColor: edu.color,
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
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
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
                  <div class="flip-card-back">
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
    </>
  );
};

export default Home;
