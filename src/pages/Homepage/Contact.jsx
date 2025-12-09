import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollDirection, setScrollDirection] = useState("down");
  const lastScrollY = useRef(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const currentScrollY = window.scrollY;
          const direction = currentScrollY > lastScrollY.current ? "down" : "up";

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

  const sectionStyle = {
    paddingTop: "6rem",
    paddingBottom: "6rem",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    color: "#A6A9B3",
    marginBottom: "0.75rem",
    fontWeight: 700,
    textAlign: "center",
  };

  const subtitleStyle = {
    fontSize: "1rem",
    color: "#9CA3AF",
    marginBottom: "1.75rem",
    fontWeight: 400,
    textAlign: "center",
  };

  const buttonStyle = {
    padding: "0.5rem 0.85rem",
    borderRadius: "0.35rem",
    fontSize: "0.8rem",
    fontWeight: 600,
    border: "1px solid #374151",
    backgroundColor: "transparent",
    color: "#E5E7EB",
    cursor: "pointer",
    transition: "background-color 0.2s ease, transform 0.1s ease",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.35rem",
  };

  return (
    <section ref={sectionRef} id="contact" style={sectionStyle}>
      <div
        className="container"
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : (scrollDirection === "down" ? -16 : 16),
          }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            backgroundColor: "transparent",
            borderRadius: "0.75rem",
            padding: "2.5rem 2rem",
            textAlign: "center",
          }}
        >
          <motion.h2
            style={titleStyle}
            initial={{ opacity: 0, y: 16 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              y: isVisible ? 0 : (scrollDirection === "down" ? -16 : 16),
            }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Get In Touch
          </motion.h2>

          <motion.p
            style={subtitleStyle}
            initial={{ opacity: 0, y: 16 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              y: isVisible ? 0 : (scrollDirection === "down" ? -16 : 16),
            }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          >
            Have an exciting project where you need some help?
          </motion.p>

          <motion.a
            href="https://www.facebook.com/jefferson.balde.2024"
            target="_blank"
            rel="noreferrer"
            style={buttonStyle}
            initial={{ opacity: 0, y: 16 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              y: isVisible ? 0 : (scrollDirection === "down" ? -16 : 16),
            }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            whileHover={{
              backgroundColor: "rgba(15,23,42,0.8)",
              transform: "translateY(-1px)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            Send me over a message
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

