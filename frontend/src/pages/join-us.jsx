import { Card, Typography, CardMedia, CardContent } from "@mui/material";

//! images
import donerMsDissanayka from "../assets/images/doners/Ms. Dissanayaka Donation.png";
import FootImage from "../assets/images/joinus/Join Us- footsteps.png";

const JoinUs = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "lightblue",
          width: "100%",
          padding: "2rem",
          boxSizing: "border-box",
        }}
      >
        <img
          style={{
            height: "25rem",
            marginRight: "2rem",
          }}
          src={FootImage}
          alt="Diabetic foot care"
        />
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "1rem",
          }}
        >
          <Typography variant="h4">Make an Impact, Save a Limb!</Typography>
          <Typography
            variant="body1"
            letterSpacing={1}
            marginTop={4}
            marginLeft={"2rem"}
            marginRight={"2rem"}
          >
            Your support is crucial in our mission to transform lives through
            diabetic foot care and treatment. By donating, you provide essential
            resources and care to those at risk of severe foot complications.
            Every contribution helps us offer life-saving interventions and
            improve the quality of life for individuals in need
          </Typography>
          <Typography
            variant="body2"
            marginTop={3}
            marginLeft={"2rem"}
            marginRight={"2rem"}
          >
            Join us in our fight to save limbs and make a lasting impact—your
            generosity truly makes a difference. Thank you for standing with us!
          </Typography>
          <Typography
            variant="h6"
            marginTop={3}
            marginLeft={"2rem"}
            marginRight={"2rem"}
            style={{ fontWeight: "bold" }}
          >
            Your Gift, Their Relief!
          </Typography>
        </div>
        <img
          style={{
            height: "25rem",
            marginLeft: "2rem",
          }}
          src={FootImage}
          alt="Diabetic foot care"
        />
      </div>

      <div>
        <Typography
          variant="h4"
          marginTop={4}
          marginLeft={"5rem"}
          marginBottom={"5rem"}
        >
          Previous Donors
        </Typography>
        <div
          style={{
            paddingLeft: "25rem",
            paddingRight: "25rem",
            marginBottom: "10rem",
          }}
        >
          <Card sx={{ display: "flex" }}>
            <CardContent>
              <Typography variant="body2">
                Ms. Dissanayka played a pivotal role in providing 50 pairs of
                diabetic footwear during the Colombo Diabetic Foot Conference,
                held on February 1, 2022, at the National Hospital of Sri Lanka.
                Her contribution was a significant highlight of the event, aimed
                at enhancing diabetic foot care. We deeply appreciate her
                commitment to our cause and her dedication to improving patient
                outcomes.
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: "20rem" }}
              image={donerMsDissanayka}
              alt="Live from space album cover"
            />
          </Card>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
