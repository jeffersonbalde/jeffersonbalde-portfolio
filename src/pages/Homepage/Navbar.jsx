import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "../../assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY) {
          // Scrolling up
          setIsVisible(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const logoBoxStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transform: isVisible ? "translateY(0)" : "translateY(-100%)",
    transition: "transform 0.3s ease-in-out",
    paddingInline: "3.5rem",
    paddingTop: "1.2rem",
    paddingBottom: "1rem",
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      x: -20,
    },
    open: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.nav
      className="navbar navbar-expand-md navbar-dark navbar-blur"
      style={navStyle}
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="container-fluid px-0">
        <div style={logoBoxStyle}>
          <img
            src={logoImg}
            alt="Jefferson Balde logo"
            style={{ width: "35px", height: "40px", display: "block" }}
          />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation"
          style={{
            border: "none",
            outline: "none",
            background: "transparent",
            padding: "0.5rem",
            cursor: "pointer",
            boxShadow: "none",
          }}
        >
          <motion.div
            animate={isMobileMenuOpen ? "open" : "closed"}
            style={{ width: "24px", height: "24px", position: "relative" }}
          >
            <motion.span
              style={{
                position: "absolute",
                width: "100%",
                height: "2px",
                background: "#FEFEFE",
                borderRadius: "2px",
                top: "50%",
                left: 0,
              }}
              variants={{
                closed: { rotate: 0, y: -6 },
                open: { rotate: 45, y: 0 },
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              style={{
                position: "absolute",
                width: "100%",
                height: "2px",
                background: "#FEFEFE",
                borderRadius: "2px",
                top: "50%",
                left: 0,
              }}
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              style={{
                position: "absolute",
                width: "100%",
                height: "2px",
                background: "#FEFEFE",
                borderRadius: "2px",
                top: "50%",
                left: 0,
              }}
              variants={{
                closed: { rotate: 0, y: 6 },
                open: { rotate: -45, y: 0 },
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </button>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="navbar-collapse"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              style={{
                overflow: "hidden",
                marginTop: "1rem",
              }}
            >
              <motion.ul
                className="navbar-nav gap-3 align-items-start flex-column"
                variants={{
                  open: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.1,
                    },
                  },
                }}
                initial="closed"
                animate="open"
              >
                {["About", "Experience", "Work", "Contact"].map((item, index) => (
                  <motion.li
                    className="nav-item"
                    key={item}
                    variants={menuItemVariants}
                    style={{ width: "100%" }}
                  >
                    <a
                      className={`nav-link ${
                        item === "About" ? "nav-link-active" : "nav-link-muted"
                      }`}
                      href="#"
                      style={{ fontSize: "0.85rem", padding: "0.75rem 0" }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  className="nav-item"
                  variants={menuItemVariants}
                  style={{ width: "100%", marginTop: "0.5rem" }}
                >
                  <button
                    type="button"
                    className="btn-resume"
                    style={{
                      paddingInline: "1rem",
                      paddingBlock: "0.4rem",
                      borderRadius: "0.35rem",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      border: "1px solid #9ca3af",
                      backgroundColor: "#1a1b1e",
                      color: "#9ca3af",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      width: "100%",
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Resume
                  </button>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>

        <div
          className="collapse navbar-collapse justify-content-end d-none d-md-flex"
          id="navLinks"
        >
          <ul className="navbar-nav gap-3 align-items-center">
            {["About", "Experience", "Work", "Contact"].map((item) => (
              <li className="nav-item" key={item}>
                <a
                  className={`nav-link ${
                    item === "About" ? "nav-link-active" : "nav-link-muted"
                  }`}
                  href="#"
                  style={{ fontSize: "0.85rem" }}
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="nav-item ms-2">
              <button
                type="button"
                className="btn-resume"
                style={{
                  paddingInline: "1rem",
                  paddingBlock: "0.4rem",
                  borderRadius: "0.35rem",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  border: "1px solid #9ca3af",
                  backgroundColor: "#1a1b1e",
                  color: "#9ca3af",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                Resume
              </button>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
