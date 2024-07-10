import "./App.css";
import { Grid, Typography } from "@mui/material";
import AppHeader from "./components/header";
import Home from "./pages/home";
import ContactUs from "./pages/contactUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/sharedLayout";
import Projects from "./pages/projects";
import AboutUs from "./pages/aboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
