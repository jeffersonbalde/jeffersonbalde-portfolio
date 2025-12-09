import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import profileImg from "../../assets/profile.png";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollDirection, setScrollDirection] = useState("down");
  const lastScrollY = useRef(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const currentScrollY = window.scrollY;
          const direction =
            currentScrollY > lastScrollY.current ? "down" : "up";

          if (entry.isIntersecting) {
            setIsVisible(true);
            setScrollDirection(direction);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: [0, 0.1, 0.2, 0.3],
        rootMargin: "-100px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY.current ? "down" : "up";
      setScrollDirection(direction);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
    padding: "0.65rem 1.1rem",
    borderRadius: "0.35rem",
    fontSize: "0.9rem",
    fontWeight: 600,
    border: "none",
    backgroundColor: "#16a34a",
    color: "#ffffff",
    cursor: "pointer",
    transition: "background-color 0.2s ease, transform 0.1s ease",
    whiteSpace: "nowrap",
    flex: "0 1 auto",
  };

  const avatarOverlayStyle = {
    position: "absolute",
    inset: 0,
    backgroundColor: "#A6A9B3",
    mixBlendMode: "multiply",
    pointerEvents: "auto",
  };

  return (
    <main ref={sectionRef} style={containerStyle} id="about">
      <div
        className="container"
        style={{ maxWidth: "980px", margin: "0 auto" }}
      >
        <div
          className="row align-items-center gy-4"
          style={{ marginLeft: "-0.5rem", marginRight: "-0.5rem" }}
        >
          {/* Left column - Text */}
          <div
            className="col-lg-8 col-12 d-flex flex-column justify-content-center"
            style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : scrollDirection === "down" ? -30 : 30,
              }}
              transition={{
                duration: 1.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <p style={labelStyle}>Hi, my name is</p>
              <h1 className="hero-name" style={nameStyle}>
                Jefferson Balde
              </h1>
              <p className="hero-subtitle" style={subTitleStyle}>
                Software Developer | Graphic Designer
              </p>

              <div className="d-flex flex-column gap-3 mb-4">
                <p style={paragraphStyle}>
                  I&apos;m a software developer dedicated to helping businesses
                  of all sizes streamline their operations through efficient,
                  user-friendly systems. I focus on creating solutions that
                  automate processes, improve productivity, and support
                  long-term business success.
                </p>
                <p style={paragraphStyle}>
                  Alongside development, I also work as a graphic designer who
                  enjoys crafting visually appealing designs for websites,
                  branding, promotions, and digital content. My goal is to
                  combine functionality and aesthetics to deliver work that
                  supports your business growth and leaves a lasting impression.
                </p>
                <p style={paragraphStyle}>
                  Beyond development, I&apos;m also a cybersecurity enthusiast
                  and enjoy solving CTF challenges for fun, helping me
                  strengthen my analytical and problem-solving skills.
                </p>
              </div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: scrollDirection === "down" ? 20 : -20,
                }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: scrollDirection === "down" ? -20 : 20,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="d-flex align-items-center gap-3 d-none d-lg-flex"
              >
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-github-cta"
                >
                  <motion.button
                    type="button"
                    style={ctaStyle}
                    whileHover={{
                      backgroundColor: "#0c7a44",
                      boxShadow: "0 0 0 3px rgba(12, 122, 68, 0.25)",
                      transform: "translateY(-1px)",
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      Check out my Github
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.02c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.469-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.007-.322 3.3 1.23a11.52 11.52 0 0 1 3.004-.404c1.02.004 2.047.138 3.006.404 2.292-1.552 3.297-1.23 3.297-1.23.654 1.653.242 2.873.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.624-5.48 5.922.43.371.823 1.103.823 2.222v3.293c0 .319.194.694.801.576C20.565 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12Z" />
                      </svg>
                    </span>
                  </motion.button>
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right column - avatar */}
          <div
            className="col-lg-4 col-12 d-flex justify-content-lg-end justify-content-center"
            style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}
          >
            {/* Mobile image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                x: isVisible ? 0 : scrollDirection === "down" ? -40 : 40,
              }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="avatar-shadow d-lg-none d-block"
              style={{
                width: "270px",
                height: "350px",
                maxWidth: "100%",
                overflow: "hidden",
                marginTop: "0",
                marginLeft: "0",
                marginBottom: "2rem",
                position: "relative",
              }}
              whileHover="hover"
            >
              <img
                src={profileImg}
                alt="Jefferson Balde portrait"
                style={avatarStyle}
              />
              <motion.div
                style={avatarOverlayStyle}
                initial={{ opacity: 0.55 }}
                whileHover={{
                  opacity: 0,
                  transition: { duration: 0.45, ease: "easeOut" },
                }}
              />
            </motion.div>
            {/* Desktop image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                x: isVisible ? 0 : scrollDirection === "down" ? -40 : 40,
              }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="avatar-shadow d-none d-lg-block"
              style={{
                width: "270px",
                height: "350px",
                overflow: "hidden",
                marginTop: "5rem",
                marginLeft: "0",
                position: "relative",
              }}
              whileHover="hover"
            >
              <img
                src={profileImg}
                alt="Jefferson Balde portrait"
                style={avatarStyle}
              />
              <motion.div
                style={avatarOverlayStyle}
                initial={{ opacity: 0.55 }}
                whileHover={{
                  opacity: 0,
                  transition: { duration: 0.45, ease: "easeOut" },
                }}
              />
            </motion.div>
          </div>

          {/* Button section - Mobile only */}
          <div className="col-12 d-lg-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : scrollDirection === "down" ? -20 : 20,
              }}
              transition={{
                delay: 0.3,
                duration: 1.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="d-flex justify-content-center"
            >
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="btn-github-cta"
              >
                <motion.button
                  type="button"
                  style={ctaStyle}
                  whileHover={{
                    backgroundColor: "#0c7a44",
                    boxShadow: "0 0 0 3px rgba(12, 122, 68, 0.25)",
                    transform: "translateY(-1px)",
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                  >
                    Check out my Github
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.02c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.469-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.007-.322 3.3 1.23a11.52 11.52 0 0 1 3.004-.404c1.02.004 2.047.138 3.006.404 2.292-1.552 3.297-1.23 3.297-1.23.654 1.653.242 2.873.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.624-5.48 5.922.43.371.823 1.103.823 2.222v3.293c0 .319.194.694.801.576C20.565 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12Z" />
                    </svg>
                  </span>
                </motion.button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
