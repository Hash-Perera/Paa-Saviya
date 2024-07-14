import { Typography, Grid, Button, Card, CardMedia } from "@mui/material";
import { useState } from "react";
import SharedModal from "../components/shared/modal-popup";
import Paper from "@mui/material/Paper";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

//! Images
import edu2 from "../assets/images/projects/projectsMain.jpg";
import ss1 from "../assets/images/step_smart/step_smart_1.jpeg";
import ss2 from "../assets/images/step_smart/step_smart_2.jpeg";
import ss3 from "../assets/images/step_smart/step_smart_3.jpeg";
import ss4 from "../assets/images/step_smart/step_smart_4.jpeg";
import ss5 from "../assets/images/step_smart/step_smart_5.jpeg";
import ss6 from "../assets/images/step_smart/step_smart_6.jpeg";

const Projects = () => {
  //! Handle the modal popup
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const ssImageList = [
    { id: 1, image: ss1 },
    { id: 2, image: ss2 },
    { id: 3, image: ss3 },
    { id: 4, image: ss4 },
    { id: 5, image: ss5 },
    { id: 6, image: ss6 },
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
          transition={{ duration: 2 }}
        >
          <Typography variant="h3" textAlign={"center"}>
            Our Projects
          </Typography>
          <Grid
            container
            spacing={2}
            marginTop={"5.5rem"}
            marginBottom={"9rem"}
            paddingLeft={"8rem"}
            paddingRight={"8rem"}
          >
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <Typography variant="h5" letterSpacing={1}>
                Step Smart
              </Typography>

              <Typography
                variant="body1"
                marginTop={4}
                textAlign={"justify"}
                letterSpacing={2}
                lineHeight={"1.7rem"}
              >
                Our customized insoles for diabetic feet offer personalized
                support and comfort tailored to your unique foot structure.
                Designed to provide optimal cushioning, arch support, and shock
                absorption, these insoles help prevent foot complications, heal
                existing ulcers, improve comfort, and promote overall foot
                health for those with diabetes
              </Typography>
              <Typography variant="body1" marginTop={2} letterSpacing={2}>
                Date: Every 1st and 3rd Wednesday of the month
              </Typography>
              <Typography
                variant="body1"
                marginTop={2}
                letterSpacing={2}
                lineHeight={"1.7rem"}
              >
                Location: 13th floor of UCFM Tower, Faculty of Medicine,
                University of Colombo, Maradana Road, Colombo 07.
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
              sm={12}
              md={12}
              lg={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card sx={{ maxWidth: "28rem", maxHeight: "28rem" }}>
                <CardMedia
                  sx={{ height: "28rem", width: "28rem" }}
                  image={edu2}
                  title=""
                />
              </Card>
            </Grid>
          </Grid>
        </motion.div>

        <motion.div
          ref={secondSectionRef}
          initial={{ opacity: 0 }}
          animate={secondSectionInView ? { opacity: 1 } : {}}
          transition={{ duration: 2 }}
          style={{
            marginLeft: "8rem",
            marginRight: "8rem",
            minHeight: "40vh",
          }}
        >
          <Typography variant="h4" textAlign={"start"} letterSpacing={2}>
            Upcomming Projects
          </Typography>
          <Typography variant="h5" marginTop={"4rem"} letterSpacing={1}>
            - Pāda diabetic shoe project
          </Typography>
          <Typography variant="h5" marginTop={"1rem"} letterSpacing={1}>
            - Prosthetic limb project
          </Typography>
        </motion.div>
      </div>

      <SharedModal open={open} onClose={handleClose}>
        <Grid container spacing={2}>
          {ssImageList.map((image) => (
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
    </>
  );
};

export default Projects;
