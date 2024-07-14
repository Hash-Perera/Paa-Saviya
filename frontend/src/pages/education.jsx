import { Button, Grid, Typography, Box, Card, CardMedia } from "@mui/material";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SharedModal from "../components/shared/modal-popup";
import Paper from "@mui/material/Paper";
import { useLocation } from "react-router-dom";

//! Images
import projectImage01 from "../assets/images/limb_salvage/projectImage-01.jpeg";
import projectImage02 from "../assets/images/limb_salvage/projectImage-02.jpeg";
import projectImage03 from "../assets/images/limb_salvage/projectImage-03.jpeg";
import projectImage04 from "../assets/images/limb_salvage/projectImage-04.jpeg";
import projectImage05 from "../assets/images/limb_salvage/projectImage-05.jpeg";
import projectImage06 from "../assets/images/limb_salvage/projectImage-06.jpeg";
import projectImage07 from "../assets/images/limb_salvage/projectImage-07.jpeg";
import projectImage08 from "../assets/images/limb_salvage/projectImage-08.jpeg";
import projectImage09 from "../assets/images/limb_salvage/projectImage-09.jpeg";
import projectImage10 from "../assets/images/limb_salvage/projectImage-10.jpeg";
import projectImage11 from "../assets/images/limb_salvage/projectImage-11.jpeg";
import projectImage12 from "../assets/images/limb_salvage/projectImage-12.jpeg";
import projectImage13 from "../assets/images/limb_salvage/projectImage-13.jpeg";
import projectImage14 from "../assets/images/limb_salvage/projectImage-14.jpeg";
import projectImage15 from "../assets/images/limb_salvage/projectImage-15.jpeg";
import projectImage16 from "../assets/images/limb_salvage/projectImage-16.jpeg";
import projectImage17 from "../assets/images/limb_salvage/projectImage-17.jpeg";
import projectImage18 from "../assets/images/limb_salvage/projectImage-18.jpeg";
import projectImage19 from "../assets/images/limb_salvage/projectImage-19.jpeg";
import projectImage20 from "../assets/images/limb_salvage/projectImage-20.jpeg";
import projectImage21 from "../assets/images/limb_salvage/projectImage-21.jpeg";

import edu1 from "../assets/images/home/education_1.jpg";
import edu2 from "../assets/images/projects/EducationMain.jpg";
import edu3 from "../assets/images/home/education_3.jpg";

const Education = () => {
  //! Handle the modal popup
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const imageSet = [
    { id: 1, image: projectImage01 },
    { id: 2, image: projectImage02 },
    { id: 3, image: projectImage03 },
    { id: 4, image: projectImage04 },
    { id: 5, image: projectImage05 },
    { id: 6, image: projectImage06 },
    { id: 7, image: projectImage07 },
    { id: 8, image: projectImage08 },
    { id: 9, image: projectImage09 },
    { id: 10, image: projectImage10 },
    { id: 11, image: projectImage11 },
    { id: 12, image: projectImage12 },
    { id: 13, image: projectImage13 },
    { id: 14, image: projectImage14 },
    { id: 15, image: projectImage15 },
    { id: 16, image: projectImage16 },
    { id: 17, image: projectImage17 },
    { id: 18, image: projectImage18 },
    { id: 19, image: projectImage19 },
    { id: 20, image: projectImage20 },
    { id: 21, image: projectImage21 },
  ];

  const otherImages = [
    { id: 1, title: "Health Education", image: edu1 },
    { id: 2, title: "Research & Development", image: edu3 },
  ];

  const { ref: firstSectionRef, inView: firstSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: secondSectionRef, inView: secondSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <div style={{ marginTop: "4.5rem" }}>
        <motion.div
          ref={firstSectionRef}
          initial={{ opacity: 0 }}
          animate={firstSectionInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.7 }}
        >
          <Typography variant="h2" textAlign={"center"}>
            Capacity Building
          </Typography>
          <Grid
            container
            spacing={2}
            marginTop={"5.5rem"}
            marginBottom={"5.5rem"}
            paddingLeft={"8rem"}
            paddingRight={"8rem"}
          >
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography variant="h5" letterSpacing={2}>
                Certificate Course in Wound Care and Limb Salvage
              </Typography>

              <Typography
                variant="body1"
                marginTop={4}
                letterSpacing={2}
                lineHeight={"1.7rem"}
              >
                With the participation of multiple healthcare professionals,
                extending from doctors to nursing officers from different
                districts of the country, the first certificate course in wound
                care and limb salvage was held on January 2024. This marked the
                pivotal first step in disseminating wound care knowledge to
                hospital settings with limited resources across borders.
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                sx={{ marginTop: 5 }}
                onClick={handleOpen}
              >
                See Photos
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card sx={{ maxWidth: "26rem", maxHeight: "26rem" }}>
                <CardMedia
                  sx={{ height: "26rem", width: "26rem" }}
                  image={edu2}
                  title=""
                />
              </Card>
            </Grid>
          </Grid>
        </motion.div>

        <div id="otherEducationSection"></div>
        <motion.div
          ref={secondSectionRef}
          initial={{ opacity: 0 }}
          animate={secondSectionInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.7 }}
        >
          <Grid
            container
            spacing={2}
            marginTop={"5rem"}
            paddingTop={"3rem"}
            paddingBottom={"5rem"}
            className="bg-light"
          >
            {otherImages.map((image) => (
              <Grid
                container
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                key={image.id}
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: "100%" }}
              >
                <div style={{ textAlign: "center" }}>
                  <Typography variant="h4" marginBottom={"3rem"}>
                    {image.title}
                  </Typography>
                  <Card sx={{ width: "20rem", height: "20rem" }}>
                    <CardMedia
                      sx={{ width: "20rem", height: "20rem" }}
                      image={image.image}
                      title=""
                    />
                  </Card>
                </div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        <SharedModal open={open} onClose={handleClose}>
          <Grid container spacing={2}>
            {imageSet.map((image) => (
              <Grid item xs={12} sm={12} md={4} lg={4} key={image.id}>
                <Paper sx={{ height: "18rem" }}>
                  <img
                    src={image.image}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </SharedModal>
      </div>
    </>
  );
};

export default Education;
