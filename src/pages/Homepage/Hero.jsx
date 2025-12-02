import { motion } from "framer-motion";
import profileImg from "../../assets/profile.png";

const Hero = () => {
  const containerStyle = {
    flex: 1,
    paddingTop: "4rem",
    paddingBottom: "6rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const avatarStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "1.25rem",
    border: "none",
  };

  const labelStyle = {
    fontSize: "0.8rem",
    color: "#9ca3af",
    margin: "0 0 0.3rem 0",
  };

  const nameStyle = {
    fontSize: "3.5rem",
    fontWeight: 800,
    margin: "0 0 0.4rem 0",
    color: "#FEFEFE",
  };

  const subTitleStyle = {
    fontSize: "1.5rem",
    color: "#A6A9B3",
    fontWeight: 600,
    margin: "0 0 1.5rem 0",
  };

  const paragraphStyle = {
    fontSize: "0.93rem",
    color: "#A6A9B3",
    maxWidth: "40rem",
  };

  const ctaStyle = {
    paddingInline: "1.25rem",
    paddingBlock: "0.6rem",
    borderRadius: "0.35rem",
    fontSize: "0.9rem",
    fontWeight: 600,
    border: "none",
    backgroundColor: "#04D27B",
    color: "#ffffff",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  };

  return (
    <main style={containerStyle}>
      <div
        className="container"
        style={{ maxWidth: "880px", margin: "0 auto" }}
      >
        <div
          className="row align-items-center gy-4"
          style={{ marginLeft: "-0.5rem", marginRight: "-0.5rem" }}
        >
          {/* Left column - Text */}
          <div
            className="col-lg-7 col-12 d-flex flex-column justify-content-center"
            style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <p style={labelStyle}>Hi, my name is</p>
              <h1 className="hero-name" style={nameStyle}>
                Jefferson Balde
              </h1>
              <p className="hero-subtitle" style={subTitleStyle}>
                Fullstack Developer | UI/UX Designer
              </p>

              <div className="d-flex flex-column gap-3 mb-4">
                <p style={paragraphStyle}>
                  I&apos;m a full-stack developer specializing in building
                  modern, user-focused web applications. On the frontend, I
                  primarily work with React to create clean and responsive
                  interfaces. For backend development, I use Laravel to deliver
                  secure, efficient, and scalable systems.
                </p>
                <p style={paragraphStyle}>
                  I work with MySQL for database management and deploy my
                  applications on DigitalOcean for reliable cloud hosting. I
                  also use Bootstrap for fast and consistent styling, and Figma
                  is my go-to tool when designing layouts before development.
                </p>
                <p style={paragraphStyle}>
                  I enjoy creating minimalist and well-structured
                  experiences—keeping everything simple, functional, and
                  intuitive. Beyond development, I&apos;m also a cybersecurity
                  enthusiast and enjoy solving CTF challenges for fun, helping
                  me strengthen my analytical and problem-solving skills.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
                className="d-flex align-items-center gap-3 d-none d-lg-flex"
              >
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-github-cta"
                >
                  <button type="button" style={ctaStyle}>
                    Check out my Github
                  </button>
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right column - avatar */}
          <div
            className="col-lg-5 col-12 d-flex justify-content-lg-end justify-content-center"
            style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}
          >
            {/* Mobile image */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="avatar-shadow d-lg-none d-block"
              style={{
                width: "270px",
                height: "350px",
                maxWidth: "100%",
                overflow: "hidden",
                marginTop: "0",
                marginLeft: "0",
                marginBottom: "2rem",
              }}
            >
              <img
                src={profileImg}
                alt="Jefferson Balde portrait"
                style={avatarStyle}
              />
            </motion.div>
            {/* Desktop image */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="avatar-shadow d-none d-lg-block"
              style={{
                width: "270px",
                height: "350px",
                overflow: "hidden",
                marginTop: "12.5rem",
                marginLeft: "-1rem",
              }}
            >
              <img
                src={profileImg}
                alt="Jefferson Balde portrait"
                style={avatarStyle}
              />
            </motion.div>
          </div>

          {/* Button section - Mobile only */}
          <div className="col-12 d-lg-none">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
              className="d-flex justify-content-center"
            >
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="btn-github-cta"
              >
                <button type="button" style={ctaStyle}>
                  Check out my Github
                </button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
