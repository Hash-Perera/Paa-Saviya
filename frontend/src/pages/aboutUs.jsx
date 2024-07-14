import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Grid, Typography } from "@mui/material";
import "../styles/aboutUsPage.css";
import CommonCard from "../components/shared/common-card";
import Avatar from "@mui/material/Avatar";

//! Images
import doc1Image from "../assets/images/projects/doc1Image.png";
import doc3Image from "../assets/images/projects/doc3Image.png";
import visionImage from "../assets/images/projects/vision_01_resize.png";
import aimImage from "../assets/images/projects/vision_02_resize_02.png";

import HWDissanayake from "../assets/images/founders/Vidya_Jyothi_Professor_Vajira_H_W_Dissanayake.png";
import MandikaWijeyaratne from "../assets/images/founders/Prof_Mandika_Wijeyaratne.png";
import RezniCassim from "../assets/images/founders/Prof_Rezni_Cassim.png";
import JoelArudchelvam from "../assets/images/founders/Dr_Joel_Arudchelvam.png";
import ThushanGoonaratne from "../assets/images/founders/Dr_Thushan_Gooneratne.png";
import ChathurangaRanasinghe from "../assets/images/founders/Prof_Chathuranga_Ranasinghe.png";
import PrasadKatulanda from "../assets/images/founders/Prof_Vidya_Jyothi_Professor_Prasad_Katulanda.png";
import NalinDeSilva from "../assets/images/founders/Prof_Nalin_De_Silva.png";

const AboutUs = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.5,
      },
    }),
  };
  const founderList = [
    {
      name: "Vidya Jyothi Professor Vajira H. W Dissanayake",
      description:
        "Chair & Senior Professor of Anatomy, Department of Anatomy, Geneteics & Biomedical Informatics, Faculty of Medicine, University of Colombo",
      image: HWDissanayake,
    },
    {
      name: "Prof. Mandika Wijeyaratne",
      description:
        "Chair Professor of Surgery, Department of Surgery, Faculty of Medicine, University of Colombo.",
      image: MandikaWijeyaratne,
    },
    {
      name: "Prof. Rezni Cassim",
      description:
        "Consultant Vascular and Transplant Surgeon, Professor in Vascular Surgery, Department of Surgery, Faculty of Medicine, University of Colombo.",
      image: RezniCassim,
    },
    {
      name: "Dr Joel Arudchelvam",
      description:
        "Consultant Vascular and Transplant Surgeon, Senior Lecturer in Surgery, Department of Surgery, Faculty of Medicine, University of Colombo.",
      image: JoelArudchelvam,
    },
    {
      name: "Dr Thushan Goonaratne",
      description:
        "Consultant Vascular and Transplant Surgeon, Senior Lecturer in Surgery, Department of Surgery, Faculty of Medicine, University of Colombo.",
      image: ThushanGoonaratne,
    },
    {
      name: "Prof Chathuranga Ranasinghe",
      description:
        "Professor in Sport and Exercise Medicine, Department of Allied Health Sciences, Faculty of Medicine, University of Colombo",
      image: ChathurangaRanasinghe,
    },
    {
      name: "Vidya Jyothi Professor Prasad Katulanda",
      description:
        "Consultant Endocrinologist & Diabetologist, Professor in Medicine, Department of Clinical Medicine, Faculty of Medicine, University of Colombo",
      image: PrasadKatulanda,
    },
    {
      name: "Professor Nalin De Silva",
      description:
        "Chair Senior Professor of Chemistry, Head of the Department, Faculty of Science",
      image: NalinDeSilva,
    },
  ];

  const { ref: firstSectionRef, inView: firstSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: secondSectionRef, inView: secondSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: thirdSectionRef, inView: thirdSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: fourthSectionRef, inView: fourthSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: fifthSectionRef, inView: fifthSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const thirdContainerItem = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const thirdContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1.2,
        staggerChildren: 0.5,
      },
    },
  };

  const firstContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1.3,
        staggerChildren: 0.5,
        duration: 2,
      },
    },
  };
  const firstContainerItem = {
    hidden: { x: 300, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <>
      {/* What is Paada Saviya section */}
      <div
        style={{ marginTop: "100px" }}
        className="container-fluid bg-gray pb-5 "
      >
        <div className="row mb-4">
          <div className="col text-center">
            <motion.div
              ref={firstSectionRef}
              initial={{ opacity: 0, y: -100 }}
              animate={firstSectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2 }}
              style={{ fontSize: "4em" }}
              className="vision-text font-weight-bold"
            >
              <Typography
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                variant="h2"
                color="textPrimary"
              >
                What is Paa-Saviya <span className="question-mark ml-3">?</span>
              </Typography>
            </motion.div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 ml-3 ">
            <motion.img
              ref={firstSectionRef}
              initial={{ opacity: 0, x: -100 }}
              animate={firstSectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
              src={doc1Image}
              className="img-fluid"
            />
          </div>
          <motion.div
            initial="hidden"
            animate={firstSectionInView ? "visible" : "hidden"}
            variants={firstContainer}
            className="col-md-7 mr-auto"
          >
            <motion.div
              variants={firstContainerItem}
              className="about-us-custom-card-2 card border mb-5"
            >
              <div className="card-body d-flex align-items-center">
                <p
                  style={{
                    lineHeight: 2,
                    letterSpacing: "0.05em",
                    fontSize: "1.1em",
                  }}
                  className="m-0 text-center"
                >
                  Paa-Saviya is an organization within the University of
                  Colombo, Faculty of Medicine, established two years ago to
                  address the significant yet neglected area of wound care in
                  Sri Lanka. Wound care is an unquantified and poorly studied
                  field that requires dedicated attention and resources.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={firstContainerItem}
              className="about-us-custom-card-2 card border mb-5"
            >
              <div className="card-body d-flex align-items-center">
                <p
                  style={{
                    lineHeight: 2,
                    letterSpacing: "0.05em",
                    fontSize: "1.1em",
                  }}
                  className="m-0 text-center"
                >
                  Paa-Saviya is committed to providing comprehensive wound care
                  and other clinical services, conducting rigorous research with
                  the collaboration of other prestigious universities,
                  developing innovative wound care products, engaging in
                  educational activities, trainings and fashioning awareness.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div className="row mt-5">
          <div className="col-md-7 ml-auto">
            <motion.div
              ref={fourthSectionRef}
              initial={{ opacity: 0, x: -500 }}
              animate={fourthSectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.5 }}
              className="about-us-custom-card-2 card border mb-5"
            >
              <div className="card-body d-flex align-items-center">
                <p
                  style={{
                    lineHeight: 2,
                    letterSpacing: "0.05em",
                    fontSize: "1.1em",
                  }}
                  className=" m-0 text-center"
                >
                  Our team comprises professionals from diverse sectors,
                  including healthcare, sciences, technology, and social
                  services, all united by a common goal: to offer the best
                  possible care for patients with complex diseases and
                  conditions. As a proud extension of the Faculty of Medicine,
                  Paa-Saviya strives to make a meaningful impact on wound care
                  and patient outcomes.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="col-md-3 mr-5 ">
            <motion.img
              ref={fourthSectionRef}
              initial={{ opacity: 0, y: 200 }}
              animate={fourthSectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.5 }}
              src={doc3Image}
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      {/* Our vision section */}
      <div className="container-fluid py-5  my-5">
        <div className="row justify-content-center my-4">
          <motion.div
            ref={secondSectionRef}
            initial={{ opacity: 0, x: -300 }}
            animate={secondSectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.5 }}
            className="col-md-6 p-5"
          >
            <div className="custom-card card border-0 py-3">
              <div className="card-body">
                <p
                  style={{
                    lineHeight: 2,
                    letterSpacing: "0.05em",
                    fontSize: "1.05em",
                  }}
                  className="card-title m-0 text-left"
                >
                  Our goal is to be the leader in providing evidence-based,
                  comprehensive, and patient-centered care for wound management
                  and amputation prevention in Sri Lanka. We aim to establish a
                  center of excellence dedicated to advancing holistic care,
                  pioneering research, driving innovation, and delivering
                  exceptional education in wound care and amputation prevention.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={secondSectionRef}
            initial={{ opacity: 0, x: 300 }}
            animate={secondSectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.5 }}
            className="col-md-6 border ml-auto   text-white shadow d-flex align-items-center "
          >
            <div className="bg-overlay"></div>
            <div className="row ">
              <div className="col  p-0">
                <div className="mt-5" style={{ zIndex: 2 }}>
                  <h1 className="font-weight-bold mb-4 vision-text">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span
                        className="main-title"
                        style={{ fontSize: "1.5em" }}
                      >
                        Our
                      </span>
                      <span className="sub-title" style={{ fontSize: "2.5em" }}>
                        Vision
                      </span>
                    </div>
                  </h1>
                </div>
              </div>
              <div className="col-md-7 ">
                <img src={visionImage} className="img-fluid" alt="" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Our Aims section */}
      <div className="container-fluid my-5 py-2 ">
        <div className="row justify-content-center my-5 h-100">
          <motion.div
            style={{ minHeight: "55vh" }}
            ref={thirdSectionRef}
            initial={{ opacity: 0, x: -300 }}
            animate={thirdSectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2 }}
            className="col-md-6 ml-auto py-3 b text-white shadow d-flex align-items-center justify-content-end "
          >
            <div className="bg-overlay" style={{ zIndex: 2 }}></div>

            <div className="row">
              <div className="col-md-7 ">
                <img src={aimImage} className="img-fluid" />
              </div>
              <div className="col d-flex flex-column align-items-center justify-content-center">
                <h1 className="mb-4 vision-text">
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span
                      className="main-title font-weight-bold"
                      style={{ fontSize: "1.5em" }}
                    >
                      Our
                    </span>
                    <span
                      className="sub-title font-weight-bold"
                      style={{ fontSize: "2.5em" }}
                    >
                      Aims
                    </span>
                  </div>
                </h1>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={thirdSectionInView ? "visible" : "hidden"}
            variants={thirdContainer}
            className="col-md-6 py-4 px-5 d-flex flex-column justify-content-between"
            ref={thirdSectionRef}
          >
            <motion.div
              variants={thirdContainerItem}
              className="custom-card card border-0 m-0"
            >
              <div className="card-body m-3">
                <p className="card-title m-0 text-left">
                  Develop a clinical service provision center for wound healing
                  and limb salvage.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={thirdContainerItem}
              className="custom-card card border-0"
            >
              <div className="card-body">
                <p className="card-title m-0 text-left">
                  Provide clinical training and enhance knowledge among health
                  professionals.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={thirdContainerItem}
              className="custom-card card border-0"
            >
              <div className="card-body">
                <p className="card-title m-0 text-left">
                  Conduct research and innovation with local and international
                  collaboration
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div ref={fifthSectionRef}>
        <motion.div
          ref={fifthSectionRef}
          initial={{ opacity: 0, y: -200 }}
          animate={fifthSectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
        >
          <Typography variant="h2" color="textPrimary" align="center">
            Our Team
          </Typography>
        </motion.div>

        <Grid
          container
          spacing={2}
          marginTop={"2rem"}
          marginBottom={"10rem"}
          paddingLeft={"2rem"}
          paddingRight={"2rem"}
        >
          {founderList.map((founder, index) => (
            <Grid
              key={index}
              item
              xs={5}
              sm={4}
              md={3}
              lg={3}
              className="d-flex align-items-center justify-content-center"
            >
              <motion.div
                ref={fifthSectionRef}
                custom={index}
                initial="hidden"
                animate={fifthSectionInView ? "visible" : "hidden"}
                variants={cardVariants}
              >
                <CommonCard className="d-flex flex-column align-items-center founder-cards">
                  <Avatar
                    alt="Remy Sharp"
                    src={founder.image}
                    sx={{ width: "8rem", height: "8rem", marginTop: "1rem" }}
                  />
                  <div className="mt-4" style={{ width: "90%" }}>
                    <Typography
                      variant="h7"
                      color="textPrimary"
                      style={{ fontWeight: "bold" }}
                    >
                      {founder.name}
                    </Typography>
                    <Typography
                      varient="h7"
                      color="textSecondary"
                      marginTop={"0.5rem"}
                    >
                      {founder.description}
                    </Typography>
                  </div>
                </CommonCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </>
  );
};

export default AboutUs;

{
  /* <motion.div
              ref={fourthSectionRef}
              initial={{ opacity: 0, x: -500 }}
              animate={fourthSectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 2 }}
              className="custom-card-2 card border mb-3"
            >
              <div className="card-body d-flex align-items-center">
                <div className="flex-grow-1">
                  <p
                    style={{
                      lineHeight: 2,
                      letterSpacing: "0.05em",
                      fontSize: "1.1em",
                    }}
                    className="card-title m-0 text-center"
                  >
                    Our team comprises professionals from diverse sectors,
                    including healthcare, sciences, technology, and social
                    services, all united by a common goal: to offer the best
                    possible care for patients with complex diseases and
                    conditions. As a proud extension of the Faculty of Medicine,
                    Paa-Saviya strives to make a meaningful impact on wound care
                    and patient outcomes.
                  </p>
                </div>
                <img
                  src="/path/to/image3.jpg"
                  alt="Description"
                  style={{
                    width: "150px",
                    height: "150px",
                    marginLeft: "20px",
                  }}
                />
              </div>
            </motion.div> */
}
