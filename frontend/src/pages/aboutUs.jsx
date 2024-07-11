import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { BsEye } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import "../styles/aboutUsPage.css";

const AboutUs = () => {
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

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

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

  return (
    <>
      {/* What is Paada Saviya section */}
      <div
        style={{ marginTop: "100px" }}
        className="container-fluid bg-gray pb-5"
      >
        <div className="row mb-4">
          <div className="col text-center">
            <motion.h1
              ref={firstSectionRef}
              initial={{ opacity: 0, y: -100 }}
              animate={firstSectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2 }}
              style={{ fontSize: "4em" }}
              className="vision-text font-weight-bold"
            >
              What is Paa-Saviya<span className="question-mark ml-3">?</span>
            </motion.h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 mx-auto">
            <motion.div
              ref={firstSectionRef}
              initial={{ opacity: 0, x: -500 }}
              animate={firstSectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 2 }}
              className="custom-card-2 card border mb-5"
            >
              <div className="card-body">
                <p
                  style={{
                    lineHeight: 2,
                    letterSpacing: "0.05em",
                    fontSize: "1.1em",
                  }}
                  className="card-title m-0 text-center vision-text font-weight-bold"
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
              ref={firstSectionRef}
              initial={{ opacity: 0, x: 500 }}
              animate={firstSectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 2 }}
              className="custom-card-2 card border mb-5"
            >
              <div className="card-body">
                <p
                  style={{
                    lineHeight: 2,
                    letterSpacing: "0.05em",
                    fontSize: "1.1em",
                  }}
                  className="card-title m-0 text-center vision-text font-weight-bold"
                >
                  Paa-Saviya is committed to providing comprehensive wound care
                  and other clinical services, conducting rigorous research with
                  the collaboration of other prestigious universities,
                  developing innovative wound care products, engaging in
                  educational activities, trainings and fashioning awareness.
                </p>
              </div>
            </motion.div>
            <motion.div
              ref={fourthSectionRef}
              initial={{ opacity: 0, x: -500 }}
              animate={fourthSectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 2 }}
              className="custom-card-2 card border mb-3"
            >
              <div className="card-body">
                <p
                  style={{
                    lineHeight: 2,
                    letterSpacing: "0.05em",
                    fontSize: "1.1em",
                  }}
                  className="card-title m-0 text-center vision-text font-weight-bold"
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
        </div>
      </div>

      {/* Our vision section */}
      <div className="container-fluid py-5 bg-gray my-5">
        <div className="row justify-content-center my-4">
          <motion.div
            ref={secondSectionRef}
            initial={{ opacity: 0, x: -300 }}
            animate={secondSectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2 }}
            className="col-md-5 p-5"
          >
            <div className="custom-card card border-0">
              <div className="card-body">
                <p
                  style={{
                    lineHeight: 2,
                    letterSpacing: "0.05em",
                    fontSize: "1.05em",
                  }}
                  className="card-title m-0 text-justify"
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
            transition={{ duration: 1.2 }}
            className="col-md-7 border ml-auto px-5 py-3 text-white shadow d-flex align-items-center bg-image-vision"
          >
            <div className="bg-overlay"></div>
            <div className="ml-4" style={{ zIndex: 2 }}>
              <h1 className="font-weight-bold mb-4 vision-text">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span className="main-title" style={{ fontSize: "1.5em" }}>
                    Our
                  </span>
                  <span className="sub-title" style={{ fontSize: "2.5em" }}>
                    Vision
                  </span>
                </div>
              </h1>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Our Aims section */}
      <div className="container-fluid my-5 py-2 bg-gray">
        <div className="row justify-content-center my-5 h-100">
          <motion.div
            style={{ minHeight: "55vh" }}
            ref={thirdSectionRef}
            initial={{ opacity: 0, x: -300 }}
            animate={thirdSectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2 }}
            className="col-md-6 ml-auto py-3 b text-white shadow d-flex align-items-center justify-content-end bg-image-aims"
          >
            <div className="bg-overlay" style={{ zIndex: 2 }}></div>

            <div className="ml-4">
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
                <p className="card-title m-0 text-justify">
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
                <p className="card-title m-0 text-justify">
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
                <p className="card-title m-0 text-justify">
                  Conduct research and innovation with local and international
                  collaboration
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
