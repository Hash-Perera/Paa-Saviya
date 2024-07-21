import {
  Button,
  Grid,
  Typography,
  Box,
  Card,
  CardMedia,
  CardActions,
  CardActionArea,
  CardContent,
} from "@mui/material";
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
import diabeticFootConference1 from "../assets/images/diabetic-foot-conferebce/1.png";
import diabeticFootConference2 from "../assets/images/diabetic-foot-conferebce/2.png";
import diabeticFootConference3 from "../assets/images/diabetic-foot-conferebce/3.png";
import IconLimbSalvage from "../assets/images/education/Icon- Certificate Course in Wound Care and Limb Salvage.png";
import IconHealthEducation from "../assets/images/education/Icon- Health Education.jpg";
import IconResearchDevelopment from "../assets/images/education/Icon- Research_Dev.jpg";
import IconConfernece from "../assets/images/education/Icon- Confernece.png";

const Education = () => {
  //! Handle the modal popup
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [modalImageSet, setModalImageSet] = useState([]);

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

  const diabeticFootConfImages = [
    { id: 1, image: diabeticFootConference1 },
    { id: 2, image: diabeticFootConference2 },
    { id: 3, image: diabeticFootConference3 },
  ];

  const otherImages = [
    {
      id: 1,
      title: "Health Education",
      image: IconHealthEducation,
      description:
        "We spread knowledge about foot care, footwear, diabetes, and ischemic foot through a range of channels, including articles, books, mass media, videos, and guidelines. By utilizing these diverse formats, we aim to educate and raise awareness among healthcare professionals and the public on best practices and advancements in foot health.",
    },
    {
      id: 2,
      title: "Research & Development",
      image: IconResearchDevelopment,
      description:
        "We intend to conduct extensive research and development in the fields of diabetic footwear, insoles, prosthetics, and orthotics to create innovative solutions tailored to the unique needs of our patients. By collaborating with experts in the fields of medicine, technology, engineering, and the sciences, we aim to leverage cutting-edge technology and interdisciplinary knowledge for our new developments that not only meet the highest standards of quality but also enhance the overall well-being of individuals with diabetes.",
    },
  ];

  const changeModalImageSet = (imageSet) => {
    setModalImageSet(imageSet);
    handleOpen();
  };

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
      <div>
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
              <Typography
                variant="h5"
                letterSpacing={2}
                style={{ fontWeight: 600, color: "#1f95f7" }}
              >
                Certificate Course in Wound Care and Limb Salvage
              </Typography>

              <Typography
                variant="body1"
                marginTop={4}
                letterSpacing={1}
                lineHeight={"1.7rem"}
              >
                With the participation of multiple healthcare professionals,
                extending from doctors to nursing officers from different
                districts of the country, the first certificate course in wound
                care and limb salvage was held on the January 2024. This marked
                the pivotal first step in disseminating wound care knowledge to
                hospital settings with limited resources across borders
              </Typography>

              <Button
                variant="outlined"
                color="primary"
                sx={{ marginTop: 5 }}
                onClick={() => changeModalImageSet(imageSet)}
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
                  image={IconLimbSalvage}
                  title=""
                />
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            marginTop={"5.5rem"}
            marginBottom={"5.5rem"}
            paddingLeft={"8rem"}
            paddingRight={"8rem"}
          >
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography
                variant="h5"
                letterSpacing={2}
                style={{ fontWeight: 600, color: "#1f95f7" }}
              >
                Colombo Diabetic Foot Conference
              </Typography>

              <Typography
                variant="body1"
                marginTop={4}
                letterSpacing={1}
                lineHeight={"1.7rem"}
              >
                Colombo Diabetic Foot Conference (CDFC) 2022 organized by
                Paa-SAVIYA and NIROGI Lanka of the SLMA was held successfully on
                the 1st of February 2022 at the Surgical Auditorium Complex,
                National Hospital Sri Lanka. The workshop consisted of lectures,
                case presentations and discussions, as well as hands-on skills
                sessions
              </Typography>

              {/*Outcomes*/}
              <Typography
                variant="body1"
                marginTop={4}
                letterSpacing={2}
                lineHeight={"1.7rem"}
                style={{ fontWeight: 600 }}
              >
                Outcomes of the Colombo Diabetic Foot Conference (CDFC)
              </Typography>
              <Typography variant="body1" marginTop={3} letterSpacing={2}>
                • Provided knowledge and skill training sessions for the
                management of diabetic foot ulceration for health care
                practitioners involved in the care of the diabetic foot.
              </Typography>
              <Typography variant="body1" marginTop={1} letterSpacing={2}>
                • Improved awareness on new concepts in diabetic foot risk
                stratification and the management of foot ulceration.
              </Typography>
              <Typography variant="body1" marginTop={1} letterSpacing={2}>
                • Initiation of establishment of a multidisciplinary diabetic
                foot ulcer service with joint input from endocrinologists,
                vascular surgeons, and other allied health professionals
              </Typography>

              {/*Feedback*/}
              <Typography
                variant="body1"
                marginTop={"4rem"}
                letterSpacing={1}
                lineHeight={"1.7rem"}
                style={{ fontWeight: 600 }}
              >
                Feedback
              </Typography>
              <Typography
                variant="body2"
                marginTop={5}
                letterSpacing={1}
                style={{ fontStyle: "italic" }}
              >
                “All of you did your parts very well and collectively made a
                well organized and a productive session by which all the
                participants really benefited, looking forward to many more of
                the same in the future.”
                <Typography variant="body2" marginTop={1}>
                  - Devin, Wound care practitioner
                </Typography>
              </Typography>
              <Typography
                variant="body2"
                marginTop={3}
                letterSpacing={2}
                style={{ fontStyle: "italic" }}
              >
                “A very informative and practical session, thank you all.”
                <Typography variant="body2" marginTop={1}>
                  - Lakmal, Nursing officer
                </Typography>
              </Typography>
              <Typography
                variant="body2"
                marginTop={3}
                letterSpacing={2}
                style={{ fontStyle: "italic" }}
              >
                “It was nicely organized. Very informative. Lectures and the
                team were very good. It is a great service to the country and
                society. Thank you to everyone.”
                <Typography variant="body2" marginTop={1}>
                  - Dr. Rishmal, Medical officer
                </Typography>
              </Typography>
              <Typography
                variant="body2"
                marginTop={3}
                letterSpacing={2}
                style={{ fontStyle: "italic" }}
              >
                “Thank you to the organizing committee for arranging this
                valuable workshop for us, and to the resource persons for
                sharing their knowledge on updates on wound management with us.”
                <Typography variant="body2" marginTop={1}>
                  - Rangika, Nursing officer
                </Typography>
              </Typography>
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
                flexDirection: "column",
              }}
            >
              <Card
                sx={{
                  maxWidth: "26rem",
                  maxHeight: "26rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardMedia
                  sx={{ height: "20rem", width: "26rem" }}
                  image={IconConfernece}
                  title=""
                />
                <CardActions>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => changeModalImageSet(diabeticFootConfImages)}
                  >
                    See Photos
                  </Button>
                </CardActions>
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
            spacing={5}
            marginTop={"5rem"}
            paddingTop={"3rem"}
            paddingBottom={"5rem"}
            className="bg-light"
            paddingLeft={"8rem"}
            paddingRight={"8rem"}
          >
            {otherImages.map((project) => (
              <Grid item xs={6} md={6} lg={6} key={project.id}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200rem"
                      image={project.image || edu2}
                      alt="green iguana"
                    />
                    <CardContent
                      sx={{
                        height: "15rem",
                        overflow: "auto",
                      }}
                    >
                      <Typography gutterBottom variant="h5" component="div">
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {project.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {modalImageSet.length > 0 && (
          <SharedModal open={open} onClose={handleClose}>
            <Grid container spacing={2}>
              {modalImageSet.map((image) => (
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
        )}
      </div>
    </>
  );
};

export default Education;
