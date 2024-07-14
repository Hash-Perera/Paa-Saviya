import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import backgroundSVG from "../assets/images/contactus/bgImage1.svg";
import { Typography } from "@mui/material";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, phone, message });
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <>
      <div
        style={{
          marginTop: "90px",
          backgroundImage: `url(${backgroundSVG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="container-fluid bg-white pb-5"
      >
        <div className="row ">
          <div className="col text-center">
            <motion.div
              className="text-dark font-weight-bold"
              initial={{ opacity: 0, y: -150 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <Typography variant="h2" color="textPrimary">
                Get in Touch with us
              </Typography>
            </motion.div>
          </div>
        </div>

        <div className="row mt-5 px-5">
          <motion.div
            className="col-md-6 px-4 "
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="row pt-3">
              <div className="col d-flex flex-row  align-items-start  ">
                <FaMapMarkerAlt className="mt-1 mr-2" />
                <p className="text-dark  ">
                  13th floor of UCFM Tower,
                  <br />
                  Faculty of Medicine,
                  <br /> University of Colombo,
                  <br /> Maradana Road,
                  <br /> Colombo 07.
                </p>
              </div>
              <div className="col">
                <p className="text-dark">
                  <FaPhoneAlt className="mr-2" /> (your contact number)
                </p>
                <p className="text-dark mt-4">
                  <FaEnvelope className="mr-2" />
                  paa-saviya@srg.cmb.ac.lk
                </p>
              </div>
            </div>
            <div className="row mt-3  ">
              <div className="col p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.759191450235!2d79.86994867454109!3d6.919366118437443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259b37a209583%3A0x807a441fc81cbb56!2sUCFM%20Tower%20(Faculty%20of%20Medicine%2C%20UOC)!5e0!3m2!1sen!2slk!4v1720772151008!5m2!1sen!2slk"
                  width="100%"
                  height="160%"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </motion.div>

          <div className="col-md-5 ml-auto mx-auto bg-white border p-5">
            <h3 className="text-muted">Closer than a click away</h3>
            <form className="form mt-5 mx-0" onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control bg-gray"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  className="form-control bg-gray"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="form-control bg-gray"
                  id="message"
                  rows="4"
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary text-white">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
