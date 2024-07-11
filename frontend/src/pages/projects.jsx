import { motion } from "framer-motion";
import mainImage from "../assets/images/projects/mainImage.jpg";
import ImageAccordion from "../components/shared/imageAccordion";
import "bootstrap/dist/js/bootstrap.bundle";
import "../styles/projectsPage.css";
import { useInView } from "react-intersection-observer";

const Projects = () => {
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
      <div
        style={{ marginTop: "100px", minHeight: "80vh" }}
        className="container-fluid pb-5  bg-gray pt-3 px-5"
      >
        <div className="row">
          <div className="col-md-6 mx-auto text-center ">
            <motion.h1
              ref={firstSectionRef}
              initial={{ opacity: 0, x: -300 }}
              animate={firstSectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.2 }}
              className="gradient-text main-title font-weight-bold "
            >
              Our Projects
            </motion.h1>
          </div>
        </div>

        <div className="row my-5 d-flex  align-items-center">
          <motion.div
            ref={firstSectionRef}
            initial={{ opacity: 0, y: -300 }}
            animate={firstSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2 }}
            className="col d-flex flex-column align-items-start "
          >
            <div className=" card border-0 custom-card-2 px-3">
              <div className="card-body">
                <h1 className="my-5 font-weight-bold gradient-orange-subtitle">
                  Step Smart
                </h1>
                <p
                  style={{
                    lineHeight: "2",
                    letterSpacing: "0.05em",
                    fontSize: "1.1em",
                  }}
                  className=" text-justify"
                >
                  <span className="font-weight-bold">
                    Our customized insoles for diabetic feet offer personalized
                    support and comfort tailored to your unique foot structure.
                    Designed to provide optimal cushioning, arch support, and
                    shock absorption, these insoles help prevent foot
                    complications, heal existing ulcers, improve comfort, and
                    promote overall foot health for those with diabetes.
                  </span>
                  <br className="text-muted" />
                  <hr className="text-dark" />
                  <strong>Date:</strong> Every 1st and 3rd Wednesday of the
                  month
                  <br />
                  <br />
                  <strong>Location:</strong> 13th floor of UCFM Tower, Faculty
                  of Medicine, University of Colombo, Maradana Road, Colombo 07.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            ref={firstSectionRef}
            initial={{ opacity: 0, y: 300 }}
            animate={firstSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2 }}
            className="col-md-5 "
          >
            <img
              src={mainImage} // Replace with the path to your image
              alt="Step Smart Project"
              className="img-fluid shadow-lg "
            />
          </motion.div>
        </div>
        <div className="row">
          <div className="col">
            <ImageAccordion />
          </div>
        </div>
      </div>
      <div className="container-flui my-5 border bg-gray">
        <div className="row my-2">
          <div className="col-md-6 mx-auto text-center">
            <motion.h1
              ref={secondSectionRef}
              initial={{ opacity: 0, y: -200 }}
              animate={secondSectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2 }}
              className="gradient-text main-title font-weight-bold"
            >
              Upcoming Projects
            </motion.h1>
          </div>
        </div>
        <div className="row py-5">
          <div className="mx-auto col-md-4">
            <motion.div
              ref={secondSectionRef}
              initial={{ opacity: 0, x: -300 }}
              animate={secondSectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.2 }}
              className="custom-card-2"
            >
              <div className="card-body text-center px-5 py-3">
                <h5 className="gradient-orange-subtitle">
                  Pada diabetic shoe project
                </h5>
                <p
                  style={{
                    lineHeight: 2,
                    letterSpacing: "0.05em",
                    fontSize: "1.1em",
                  }}
                  className="text-justify py-3"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum iste vel voluptatem adipisci necessitatibus, commodi
                  dolores illo, dolore quasi iusto iure sint officia nemo dicta
                  expedita odit rerum, accusamus alias qui repellat quam fuga.
                  Illum aut, fugiat sunt odit deserunt illo tempore autem?
                  Numquam odit totam deserunt nulla, reprehenderit deleniti!
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mx-auto col-md-4">
            <motion.div
              ref={secondSectionRef}
              initial={{ opacity: 0, x: 300 }}
              animate={secondSectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.2 }}
              className="custom-card-2"
            >
              <div className="card-body text-center px-5 py-3">
                <h5 className="gradient-orange-subtitle">
                  Prosthetic limb project
                </h5>
                <p
                  style={{
                    lineHeight: 2,
                    letterSpacing: "0.05em",
                    fontSize: "1.1em",
                  }}
                  className="text-justify py-3"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum iste vel voluptatem adipisci necessitatibus, commodi
                  dolores illo, dolore quasi iusto iure sint officia nemo dicta
                  expedita odit rerum, accusamus alias qui repellat quam fuga.
                  Illum aut, fugiat sunt odit deserunt illo tempore autem?
                  Numquam odit totam deserunt nulla, reprehenderit deleniti!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
