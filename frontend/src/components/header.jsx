import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../assets/images/logo-small.png";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const pages = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "/projects" },
  { name: "Services", link: "/services" },
  { name: "Education ", link: "/education" },
  { name: "About", link: "/about-us" },
  { name: "Contact", link: "/contact-us" },
  { name: "Join Us", link: "/join-us" },
];

function AppHeader() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "white", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={Logo}
            alt="organization logo"
            style={{ height: "5.0rem" }}
          />

          {/* Small Screen */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <NavLink
                  key={page.name}
                  to={page.link}
                  style={{ textDecoration: "none", color: "black" }}
                  activeclassname="active"
                  className="nav-link mx-2"
                >
                  {({ isActive }) => (
                    <Typography
                      sx={{
                        my: 2,
                        color: isActive ? "#1f95f7" : "black",
                        fontWeight: isActive ? "bold" : "normal",
                        display: "block",
                      }}
                    >
                      {page.name}
                    </Typography>
                  )}
                </NavLink>
              ))}
            </Menu>
          </Box>

          {/* Large Screen */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <NavLink
                key={page.name}
                to={page.link}
                style={{ textDecoration: "none", color: "black" }}
                activeclassname="active"
                className="nav-link mx-2"
              >
                {({ isActive }) => (
                  <Typography
                    sx={{
                      my: 2,
                      color: isActive ? "#1f95f7" : "black",
                      fontWeight: isActive ? "bold" : "normal",
                      display: "block",
                      ":hover": { color: "#1f95f7" },
                    }}
                  >
                    {page.name}
                  </Typography>
                )}
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AppHeader;
