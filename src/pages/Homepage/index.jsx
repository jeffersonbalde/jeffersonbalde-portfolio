import Navbar from "./Navbar";
import Hero from "./Hero";
import Technologies from "./Technologies";
import Experience from "./Experience";
import Footer from "./Footer";

const Homepage = () => {
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
      <Footer />
    </div>
  );
};

export default Homepage;

