import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Footer = () => {
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

  return (
    <footer ref={sectionRef} style={{ paddingTop: "1.5rem", paddingBottom: "2rem" }}>
      <div
        className="container"
        style={{
          maxWidth: "980px",
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
          style={{ textAlign: "center" }}
        >
          <p style={{ fontSize: "0.9rem", color: "#9CA3AF", marginBottom: "0.25rem" }}>
            Copyright © 2025 Jefferson Balde
          </p>
          <p style={{ fontSize: "0.85rem", color: "#6B7280", margin: 0 }}>
            Version 1.0.2 | Build 1
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

