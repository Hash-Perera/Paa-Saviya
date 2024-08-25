import "./App.css";
import Home from "./pages/home";
import ContactUs from "./pages/contactUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/sharedLayout";
import Projects from "./pages/projects";
import AboutUs from "./pages/aboutUs";
import Education from "./pages/education";
import Services from "./pages/services";
import ScrollToTop from "./components/scrollToTop";
import JoinUs from "./pages/join-us";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/education" element={<Education />} />
          <Route path="/services" element={<Services />} />
          <Route path="/join-us" element={<JoinUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
