import React from "react";
import { Grid, Typography, Button, Card, CardMedia } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

//! Images
import serviceImage1 from "../assets/images/projects/services1.jpg";
import serviceImage2 from "../assets/images/projects/services2.jpg";

const Services = () => {
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
          transition={{ duration: 1.7 }}
        >
          <Grid
            container
            spacing={2}
            marginTop={"5.5rem"}
            marginBottom={"5.5rem"}
            paddingLeft={"8rem"}
            paddingRight={"8rem"}
          >
            <Grid item xs={12} sm={7} md={7} lg={7}>
              <Typography variant="h3" letterSpacing={1}>
                Wound Care Clinic
              </Typography>

              <Typography
                variant="body1"
                marginTop={4}
                letterSpacing={2}
                lineHeight={"1.7rem"}
                textAlign={"justify"}
              >
                Wound care and limb salvage requires a multidisciplinary,
                multispecialty approach to manage the patient at risk of / with
                a chronic wound. Our novel 5 step model of recruit, heal,
                maintain, prevent and mitigate provides the backbone to the
                clinical service. In 2022, Paa-SAVIYA took a significant step
                forward by establishing the 'Wound Care Clinic' at the National
                Hospital of Sri Lanka. This clinic has since become a crucial
                healthcare facility, serving thousands of patients with
                specialized wound care needs. The team at the clinic is
                committed to offering comprehensive care, which includes precise
                diagnosis, effective treatment, and continuous patient support.
                By focusing on individualized needs, the clinic ensures that
                each patient receives the best possible care tailored to their
                unique condition. This initiative has not only enhanced the
                quality of wound care but also set a new standard for medical
                practices in the region, demonstrating Paa-SAVIYA's dedication
                to improving healthcare outcomes for all.
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              sm={5}
              md={5}
              lg={5}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card sx={{ maxWidth: 300, maxHeight: 300 }}>
                <CardMedia
                  sx={{ height: 300, width: 300 }}
                  image={serviceImage1}
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
          transition={{ duration: 1.7 }}
        >
          <Grid
            container
            spacing={2}
            marginTop={"5.5rem"}
            marginBottom={"5.5rem"}
            paddingLeft={"8rem"}
            paddingRight={"8rem"}
          >
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
              <Card sx={{ maxWidth: 300, maxHeight: 300 }}>
                <CardMedia
                  sx={{ height: 300, width: 300 }}
                  image={serviceImage2}
                  title=""
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography variant="h3" letterSpacing={1}>
                Diagnostic services
              </Typography>

              <Typography
                variant="h6"
                marginTop={4}
                letterSpacing={1}
                lineHeight={"2.5rem"}
              >
                • Noninvasive and invasive perfusion assessment
              </Typography>
              <Typography variant="h6" letterSpacing={2} lineHeight={"2.5rem"}>
                • Infection diagnostics
              </Typography>
              <Typography variant="h6" letterSpacing={2} lineHeight={"2.5rem"}>
                • Biomechanical assessment of the foot
              </Typography>
            </Grid>
          </Grid>
        </motion.div>
      </div>
      ;
    </>
  );
};

export default Services;
