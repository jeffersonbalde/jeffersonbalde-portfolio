import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "../../assets/logo.png";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Technologies", href: "#technologies" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("About");
  const navRef = useRef(null);

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

  // Smooth scroll with offset for fixed navbar
  const handleNavClick = (href) => {
    const targetId = href.replace("#", "");
    const scrollToTarget = () => {
      const element = document.getElementById(targetId);
      if (element) {
        const navHeight = navRef.current?.offsetHeight || 80;
        const elementTop =
          element.getBoundingClientRect().top +
          window.scrollY -
          navHeight +
          4;
        window.scrollTo({
          top: elementTop,
          behavior: "smooth",
        });
      }
    };

    // Close mobile menu first, then scroll after animation for reliability
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      setTimeout(scrollToTarget, 260);
    } else {
      scrollToTarget();
    }
  };

  // Track which section is in view to highlight nav item
  useEffect(() => {
    const updateActiveSection = () => {
      const viewportCenter = window.scrollY + window.innerHeight / 2;
      const nearPageBottom =
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 20;
      let closestLabel = NAV_ITEMS[0].label;
      let smallestDistance = Infinity;

      NAV_ITEMS.forEach(({ label, href }) => {
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          const height = rect.height;
          const center = top + height / 2;
          const distance = Math.abs(center - viewportCenter);

          // Bias toward sections currently in view
          const inView =
            viewportCenter >= top - height * 0.25 &&
            viewportCenter <= top + height * 1.25;
          const effectiveDistance = inView ? distance * 0.5 : distance;

          if (effectiveDistance < smallestDistance) {
            smallestDistance = effectiveDistance;
            closestLabel = label;
          }
        }
      });

      // If the user is at (or extremely near) the bottom, force the last item
      if (nearPageBottom) {
        closestLabel = NAV_ITEMS[NAV_ITEMS.length - 1].label;
      }

      setActiveSection(closestLabel);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <motion.nav
      className="navbar navbar-expand-md navbar-dark navbar-blur"
      style={navStyle}
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      ref={navRef}
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
                {NAV_ITEMS.map(({ label, href }, index) => (
                  <motion.li
                    className="nav-item"
                    key={label}
                    variants={menuItemVariants}
                    style={{ width: "100%" }}
                  >
                    <a
                      className={`nav-link ${
                        label === activeSection
                          ? "nav-link-active"
                          : "nav-link-muted"
                      }`}
                      href={href}
                      style={{ fontSize: "0.85rem", padding: "0.75rem 0" }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(href);
                      }}
                    >
                      {label}
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
            {NAV_ITEMS.map(({ label, href }) => (
              <li className="nav-item" key={label}>
                <a
                  className={`nav-link ${
                    label === activeSection
                      ? "nav-link-active"
                      : "nav-link-muted"
                  }`}
                  href={href}
                  style={{ fontSize: "0.85rem" }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(href);
                  }}
                >
                  {label}
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
