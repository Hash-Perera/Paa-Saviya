import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { BsEye } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

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
      <div
        style={{ marginTop: "150px" }}
        className="container-fluid py-5 bg-gray"
      >
        <div className="row justify-content-center my-4">
          <motion.div
            ref={firstSectionRef}
            initial={{ opacity: 0, x: -300 }}
            animate={firstSectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2 }}
            className="col p-5"
          >
            <p
              style={{
                lineHeight: "2",
                letterSpacing: "0.05em",
                fontSize: "1.1em",
              }}
              className="text-center text-muted"
            >
              Our goal is to be the leader in providing evidence-based,
              comprehensive, and patient-centered care for wound management and
              amputation prevention in Sri Lanka. We aim to establish a center
              of excellence dedicated to advancing holistic care, pioneering
              research, driving innovation, and delivering exceptional education
              in wound care and amputation prevention.
            </p>
          </motion.div>

          <motion.div
            ref={firstSectionRef}
            initial={{ opacity: 0, x: 300 }}
            animate={firstSectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2 }}
            className="col-md-7 ml-auto px-5 py-3 bg-primary text-white shadow-lg d-flex align-items-center"
          >
            <div className="ml-4">
              <h1 className="font-weight-bold mb-4">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "1.5em" }}>Our</span>
                  <span style={{ fontSize: "2.5em" }}>Vision</span>
                </div>
              </h1>
            </div>
            <div className="ml-5 px-5">
              <BsEye style={{ fontSize: "6em", marginBottom: "0.5em" }} />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container-fluid py-5 bg-gray my-5">
        <motion.div
          className="row justify-content-center align-items-center my-5"
          variants={container}
          initial="hidden"
          animate={secondSectionInView ? "visible" : "hidden"}
          ref={secondSectionRef}
        >
          <motion.div className="col-md-3 mb-4 ml-5" variants={item}>
            <div className="card shadow-lg border-0">
              <div className="card-body">
                <p className="card-title">
                  Develop a clinical service provision center for wound healing
                  and limb salvage.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div className="col-md-3 mb-4 mx-5" variants={item}>
            <div className="card border-0 bg-gray">
              <div className="card-body d-flex flex-column align-items-center">
                <h1 className="card-title my-auto">Aims</h1>
              </div>
            </div>
          </motion.div>
          <motion.div className="col-md-3 mb-4 mr-5" variants={item}>
            <div className="card shadow-lg border-0">
              <div className="card-body">
                <p className="card-title">
                  Provide clinical training and enhance knowledge among health
                  professionals.
                </p>
              </div>
            </div>
          </motion.div>
          <div className="row justify-content-center mt-5">
            <motion.div className="col-md-3 mb-4 mx-auto" variants={item}>
              <div className="card shadow-lg border-0">
                <div className="card-body">
                  <p className="card-title">
                    Conduct research and innovation with local and international
                    collaboration.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="container-fluid py-5 bg-gray">
        <div className="row justify-content-center my-5">
          <motion.div
            ref={thirdSectionRef}
            initial={{ opacity: 0, x: -300 }}
            animate={thirdSectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2 }}
            className="col-md-6 ml-auto px-5 py-3 bg-primary text-white shadow-lg d-flex align-items-center justify-content-end"
          >
            <div className="ml-5 px-5">
              <FaHandsHelping
                style={{ fontSize: "7em", marginBottom: "0.5em" }}
              />
            </div>
            <div className="ml-4">
              <h1 className="font-weight-bold mb-4">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "1.5em" }}>Our</span>
                  <span style={{ fontSize: "2.5em" }}>Services</span>
                </div>
              </h1>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={thirdSectionInView ? "visible" : "hidden"}
            variants={thirdContainer}
            className="col-md-6 p-3"
            ref={thirdSectionRef}
          >
            <motion.div
              variants={thirdContainerItem}
              className="card shadow-lg border-0 mb-2"
            >
              <div className="card-body">
                <p className="card-title m-0">
                  Conducting education and clinical training to undergraduate,
                  postgraduate students and healthcare professionals.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={thirdContainerItem}
              className="card shadow-lg border-0 mb-2"
            >
              <div className="card-body">
                <p className="card-title m-0">
                  Offer comprehensive research training and engage in
                  collaborative research with members, institutes, and
                  international universities.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={thirdContainerItem}
              className="card shadow-lg border-0 mb-2"
            >
              <div className="card-body">
                <p className="card-title m-0">
                  Providing clinical services in relation to wound care,
                  podiatry, revascularization, infection diagnostics and
                  therapeutics, foot wear and foot care advice, nutritional
                  wellbeing, mental health and public health care.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={thirdContainerItem}
              className="card shadow-lg border-0 mb-2"
            >
              <div className="card-body">
                <p className="card-title m-0">Diagnostic services</p>
                <ul>
                  <li>Non invasive and invasive perfusion assessment</li>
                  <li>Infection diagnostics</li>
                  <li>Biomechanical assessment of the foot</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
