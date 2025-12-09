import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Experience = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showRightFade, setShowRightFade] = useState(true);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [scrollDirection, setScrollDirection] = useState("down");
  const lastScrollY = useRef(0);
  const sectionRef = useRef(null);
  const listRef = useRef(null);

  const experiences = [
    {
      company: "Self-Employed",
      title: "Freelance Software Developer",
      location: "Pagadian City, Philippines",
      period: "2022 - Present",
      responsibilities: [
        "Developed custom POS systems, management tools, and desktop applications tailored to client business needs, improving operational efficiency and workflow automation.",
        "Built responsive landing pages and online profiles for small businesses, enhancing their digital presence and customer engagement.",
        "Created functional systems for students' capstone and thesis projects, delivering scalable solutions that meet academic requirements and real-world applications.",
        "Designed user-friendly, responsive interfaces to enhance business visibility and improve user experience across multiple platforms.",
        "Provided ongoing support, updates, and system optimization to ensure long-term reliability and performance for client projects.",
      ],
    },
    {
      company: "CPC Marketing Consultancy & Services",
      title: "Computer Graphics Artist",
      location: "Pagadian City, Philippines",
      period: "2024 - Present",
      responsibilities: [
        "Created banners, posters, and digital visuals using Figma and Canva, delivering high-quality marketing materials that aligned with brand guidelines.",
        "Edited promotional videos using CapCut, producing engaging content for social media campaigns and brand promotion.",
        "Produced and posted social media content for brand promotion, increasing online engagement and brand awareness.",
        "Ensured consistent branding across all marketing materials, maintaining visual identity and brand standards.",
      ],
    },
    {
      company: "Brown Butter Café",
      title: "Kitchen Staff",
      location: "Pagadian City, Philippines",
      period: "2023-2024",
      responsibilities: [
        "Assisted in food preparation, cooking, and plating, ensuring high-quality presentation and timely service.",
        "Maintained cleanliness of kitchen areas, utensils, and equipment, adhering to health and safety regulations.",
        "Organized ingredients, storage areas, and inventory supplies, optimizing kitchen workflow and efficiency.",
        "Provided basic dine-in assistance and supported customer service needs, contributing to positive customer experiences.",
        "Ensured compliance with safety and sanitation standards, maintaining a safe working environment for staff and customers.",
      ],
    },
  ];

  const sectionStyle = {
    paddingTop: "10rem",
    paddingBottom: "6rem",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    color: "#A6A9B3",
    marginBottom: "3rem",
    fontWeight: 600,
    textAlign: "left",
  };

  const companyListStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    borderLeft: "2px solid #374151",
  };

  const companyItemStyle = (isSelected) => ({
    padding: "0.75rem 1.5rem",
    cursor: "pointer",
    borderLeft: isSelected ? "2px solid #04D27B" : "2px solid transparent",
    backgroundColor: isSelected ? "rgba(4, 210, 123, 0.1)" : "transparent",
    color: "#FEFEFE",
    fontSize: "0.9rem",
    transition: "all 0.2s ease",
    marginLeft: "-2px",
  });

  const detailsContainerStyle = {
    paddingLeft: "2rem",
  };

  const jobTitleStyle = {
    fontSize: "1.1rem",
    color: "#A6A9B3",
    fontWeight: 600,
  };

  const companyNameStyle = {
    fontSize: "1.1rem",
    color: "#04D27B",
    fontWeight: 600,
  };

  const locationStyle = {
    fontSize: "0.9rem",
    color: "#9ca3af",
    marginBottom: "1.5rem",
  };

  const responsibilitiesListStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
  };

  const responsibilityItemStyle = {
    fontSize: "0.93rem",
    color: "#A6A9B3",
    marginBottom: "1rem",
    paddingLeft: "1.5rem",
    position: "relative",
    lineHeight: "1.6",
  };

  const bulletStyle = {
    position: "absolute",
    left: 0,
    color: "#04D27B",
  };

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

    const checkScroll = () => {
      if (listRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = listRef.current;
        setShowRightFade(scrollLeft < scrollWidth - clientWidth - 10);
        setShowLeftFade(scrollLeft > 10);
      }
    };

    const listElement = listRef.current;
    if (listElement) {
      checkScroll();
      listElement.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);

      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
        window.removeEventListener("scroll", handleScroll);
        if (listElement) {
          listElement.removeEventListener("scroll", checkScroll);
        }
        window.removeEventListener("resize", checkScroll);
      };
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} style={sectionStyle} id="experience">
      <div
        className="container"
        style={{ maxWidth: "980px", margin: "0 auto" }}
      >
        <motion.h2
          className="experience-title"
          style={titleStyle}
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : scrollDirection === "down" ? -30 : 30,
          }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Where I&apos;ve Worked
        </motion.h2>

        <div className="row">
          <div className="col-md-4 col-12">
            <div className="experience-company-list-wrapper">
              {showLeftFade && <div className="experience-fade-left" />}
              <motion.ul
                ref={listRef}
                className="experience-company-list"
                style={companyListStyle}
                initial={{ opacity: 0, x: -30 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  x: isVisible ? 0 : scrollDirection === "down" ? 30 : -30,
                }}
                transition={{
                  delay: 0.25,
                  duration: 1.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {experiences.map((exp, index) => (
                  <li
                    key={index}
                    className={
                      index === selectedIndex
                        ? "experience-company-selected"
                        : ""
                    }
                    onClick={() => setSelectedIndex(index)}
                    style={companyItemStyle(index === selectedIndex)}
                  >
                    {exp.title}
                  </li>
                ))}
              </motion.ul>
              {showRightFade && <div className="experience-fade-right" />}
              {showRightFade && (
                <div className="experience-scroll-hint">
                  <span>Swipe →</span>
                </div>
              )}
            </div>
          </div>

          <div className="col-md-8 col-12">
            <motion.div
              key={selectedIndex}
              className="experience-details"
              style={detailsContainerStyle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <h3
                className="experience-job-title"
                style={{ marginBottom: "0.5rem" }}
              >
                <span style={jobTitleStyle}>
                  {experiences[selectedIndex].title}
                </span>{" "}
                <span style={companyNameStyle}>
                  @ {experiences[selectedIndex].company}
                </span>
              </h3>
              <p className="experience-location" style={locationStyle}>
                {experiences[selectedIndex].location} |{" "}
                {experiences[selectedIndex].period}
              </p>
              <ul
                className="experience-responsibilities"
                style={responsibilitiesListStyle}
              >
                {experiences[selectedIndex].responsibilities.map(
                  (responsibility, idx) => (
                    <li key={idx} style={responsibilityItemStyle}>
                      <span style={bulletStyle}>▹</span>
                      {responsibility}
                    </li>
                  )
                )}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
