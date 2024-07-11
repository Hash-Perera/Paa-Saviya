import React from "react";
import projectImage01 from "../../assets/images/step_smart/projectImage-01.jpeg";
import projectImage02 from "../../assets/images/step_smart/projectImage-02.jpeg";
import projectImage03 from "../../assets/images/step_smart/projectImage-03.jpeg";
import projectImage04 from "../../assets/images/step_smart/projectImage-04.jpeg";
import projectImage05 from "../../assets/images/step_smart/projectImage-05.jpeg";
import projectImage06 from "../../assets/images/step_smart/projectImage-06.jpeg";
import projectImage07 from "../../assets/images/step_smart/projectImage-07.jpeg";
import projectImage08 from "../../assets/images/step_smart/projectImage-08.jpeg";
import projectImage09 from "../../assets/images/step_smart/projectImage-09.jpeg";
import projectImage10 from "../../assets/images/step_smart/projectImage-10.jpeg";
import projectImage11 from "../../assets/images/step_smart/projectImage-11.jpeg";
import projectImage12 from "../../assets/images/step_smart/projectImage-12.jpeg";
import projectImage13 from "../../assets/images/step_smart/projectImage-13.jpeg";
import projectImage14 from "../../assets/images/step_smart/projectImage-14.jpeg";
import projectImage15 from "../../assets/images/step_smart/projectImage-15.jpeg";
import projectImage16 from "../../assets/images/step_smart/projectImage-16.jpeg";
import projectImage17 from "../../assets/images/step_smart/projectImage-17.jpeg";
import projectImage18 from "../../assets/images/step_smart/projectImage-18.jpeg";
import projectImage19 from "../../assets/images/step_smart/projectImage-19.jpeg";
import projectImage20 from "../../assets/images/step_smart/projectImage-20.jpeg";
import projectImage21 from "../../assets/images/step_smart/projectImage-21.jpeg";

const ImageAccordion = () => {
  const projectImages = [
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

  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button custom-card text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            See Photos
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <div className="container-fluid bg-gray">
              <div className="row">
                {projectImages.map((image) => {
                  return (
                    <div
                      key={image.id}
                      className="col-lg-4 col-md-6 mb-4 d-flex align-items-center justify-content-center"
                    >
                      <img
                        src={image.image}
                        className="w-100 shadow-1-strong rounded"
                        alt={`Project Image ${image.id}`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageAccordion;
