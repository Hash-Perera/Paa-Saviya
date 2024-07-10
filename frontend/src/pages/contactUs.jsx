import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import AppHeader from "../components/header";
import { motion } from "framer-motion";

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
        style={{ marginTop: "100px" }}
        className="container bg-white vh-100 "
      >
        <div className="row mt-4">
          <div className="col text-center">
            <motion.h1
              className="text-gradient font-weight-bold"
              initial={{ opacity: 0, y: -150 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              Get in Touch with us
            </motion.h1>
          </div>
        </div>

        <div className="row mt-4 px-4">
          <div className="col-md-10 mx-auto">
            <div className="row p-3 shadow-lg bg-white border">
              <motion.div
                className="col-md-6 p-5 border shadow-lg ml-auto bg-gradient-blue"
                initial={{ opacity: 0, x: -150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
              >
                <h3 className="text-white mt-2">Contact Details</h3>
                <div>
                  <p className="text-white mt-5">
                    <FaMapMarkerAlt className="mr-2" /> 13th floor of UCFM
                    Tower, Faculty of Medicine, University of Colombo, Maradana
                    Road, Colombo 07.
                  </p>
                  <p className="text-white mt-4">
                    <FaPhoneAlt className="mr-2" /> (your contact number)
                  </p>
                  <p className="text-white mt-4">
                    <FaEnvelope className="mr-2" /> <strong>Email:</strong>{" "}
                    paa-saviya@srg.cmb.ac.lk
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="col py-5 px-4 bg-white border shadow-lg mr-auto"
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
              >
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
                  <button type="submit" className="btn bg-blue text-white">
                    Submit
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
