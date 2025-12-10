import Navbar from "./Navbar";
import Hero from "./Hero";
import Technologies from "./Technologies";
import Experience from "./Experience";
import Works from "./Works";
import Certifications from "./Certifications";
import Contact from "./Contact";
import Footer from "./Footer";

const Homepage = ({ onOpenGallery, onOpenManual }) => {
  const pageStyle = {
    minHeight: "100vh",
    backgroundColor: "transparent",
    color: "#FEFEFE",
    display: "flex",
    flexDirection: "column",
    paddingTop: "80px",
  };

  return (
    <div style={pageStyle}>
      <Navbar />
      <Hero />
      <Technologies />
      <Experience />
      <Works onOpenManual={onOpenManual} />
      <Certifications onOpenGallery={onOpenGallery} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;

