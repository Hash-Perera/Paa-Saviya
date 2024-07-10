import { motion } from "framer-motion";
import mainImage from "../assets/images/projectsMainImage.jpg"; // Adjust the path to your image file
import ImageAccordion from "../components/shared/imageAccordion";
import "bootstrap/dist/js/bootstrap.bundle";

const Projects = () => {
  return (
    <>
      <div
        style={{ marginTop: "100px", minHeight: "80vh" }}
        className="container-fluid  bg-gray pt-3 px-5"
      >
        <div className="row">
          <div className="col-md-6 mx-auto text-center ">
            <h1
              style={{ fontSize: "4em" }}
              className="text-muted font-weight-bold "
            >
              Our Projects
            </h1>
          </div>
        </div>

        <div className="row my-5">
          <motion.div
            initial={{ opacity: 0, y: -300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="col d-flex flex-column align-items-start "
          >
            <h1 className="my-5 font-weight-bold text-muted">Step Smart</h1>
            <p
              style={{
                lineHeight: "2",
                letterSpacing: "0.05em",
                fontSize: "1.1em",
              }}
              className="text-muted"
            >
              Our customized insoles for diabetic feet offer personalized
              support and comfort tailored to your unique foot structure.
              Designed to provide optimal cushioning, arch support, and shock
              absorption, these insoles help prevent foot complications, heal
              existing ulcers, improve comfort, and promote overall foot health
              for those with diabetes.
              <br className="text-muted" />
              <hr className="text-dark" />
              <strong>Date:</strong> Every 1st and 3rd Wednesday of the month
              <br />
              <br />
              <strong>Location:</strong> 13th floor of UCFM Tower, Faculty of
              Medicine, University of Colombo, Maradana Road, Colombo 07.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="col-md-5 border"
          >
            <img
              src={mainImage} // Replace with the path to your image
              alt="Step Smart Project"
              className="img-fluid "
            />
          </motion.div>
        </div>
        <div className="row">
          <div className="col">
            <ImageAccordion />
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 mx-auto text-center">
            <h1 className="text-muted">Upcoming Projects</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Pada diabetic shoe project</h5>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Prosthetic limb project</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
