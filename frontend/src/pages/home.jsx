import Footer from "../components/footer";
import AppHeader from "../components/header";
import { Grid, Typography } from "@mui/material";
import CommonCard from "../components/shared/common-card";
import backgroundImage from "../assets/images/sample-hero.jpg";

const Home = () => {
  const images = [1, 2, 3];
  const aboutUs = ["Our Vision", "Our Founders", "Our Services"];
  return (
    <>
      <AppHeader />
      <div
        className="d-flex align-items-center justify-content-center vh-100"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 style={{ color: "#000" }}>Home</h1>
      </div>

      {/* Projects section */}
      <div
        style={{
          paddingLeft: "12%",
          paddingRight: "12%",
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
        className="bg-light"
      >
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            className="d-flex flex-column align-items-center mb-5"
          >
            <Typography variant="h4" color="textPrimary">
              Our Projects
            </Typography>
            <Typography variant="body1" color="textSecondary">
              77% of learners report career benefits, like landing a new job,
              earning a promotion, gaining applicable skills, and more.
            </Typography>
          </Grid>

          {images.map((image, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              className="d-flex align-items-center justify-content-center"
            >
              <CommonCard
                style={{ position: "relative", width: "100%" }}
                className="d-flex flex-column align-items-center justify-content-center"
              >
                <img
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                  src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A6A0477DA809F962FBA9A54E53C40E66F6182B822AC8CF0AD1BCDFB8D8CBEC6A/scale?width=1200&aspectRatio=1.78&format=webp"
                  alt={`Project Image ${image}`}
                />
                <Typography
                  variant="body1"
                  color="textPrimary"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "5px",
                  }}
                >
                  Project {image}
                </Typography>
              </CommonCard>
            </Grid>
          ))}
        </Grid>
      </div>

      {/* About Us section */}
      <div
        style={{
          paddingLeft: "12%",
          paddingRight: "12%",
          paddingTop: "5rem",
          paddingBottom: "5rem",
          backgroundColor: "white",
        }}
      >
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            className="d-flex flex-column align-items-center mb-5"
          >
            <Typography variant="h4" color="textPrimary">
              About Us
            </Typography>
            <Typography variant="body1" color="textSecondary">
              77% of learners report career benefits, like landing a new job,
              earning a promotion, gaining applicable skills, and more.
            </Typography>
          </Grid>

          {aboutUs.map((image, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              className="d-flex align-items-center justify-content-center"
            >
              <CommonCard
                style={{ position: "relative", width: "100%" }}
                className="d-flex flex-column align-items-center justify-content-center"
              >
                <img
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                  src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A6A0477DA809F962FBA9A54E53C40E66F6182B822AC8CF0AD1BCDFB8D8CBEC6A/scale?width=1200&aspectRatio=1.78&format=webp"
                  alt={`Project Image ${image}`}
                />
                <Typography
                  variant="body1"
                  color="textPrimary"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "5px",
                  }}
                >
                  Project {image}
                </Typography>
              </CommonCard>
            </Grid>
          ))}
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export default Home;
