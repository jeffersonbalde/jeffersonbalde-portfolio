import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Experience = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showRightFade, setShowRightFade] = useState(true);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const listRef = useRef(null);

  const experiences = [
    {
      company: "Ibn Khuldoon National School",
      title: "Full Stack Web and Mobile Developer",
      location: "Educational Area Isa Town, Bahrain",
      period: "May 2019 - Present",
      responsibilities: [
        "Developed a CI/CD pipeline using GitHub Actions for automated deployment of a full-stack application (ReactJS, NodeJS, GraphQL) on AWS EC2, improving deployment efficiency and reliability for an internal school project.",
        "Integrated Payment APIs, including Benefitpay and Creditmax, to streamline transaction processing and enhance payment functionality within the application.",
        "Developed a full-stack Employee Appraisal System using React(NextJS) and Apollo GraphQL Server, implementing a responsive frontend for employee management and appraisal processes, enabling efficient data handling and user interactions.",
        "Configured and deployed a Dell R450 server with Windows Server to support an in-house PowerSchool Student Information System (SIS), optimizing performance and reliability for school data management.",
        "Customized the PowerSchool Student Information System (SIS) to enhance functionality and user experience, tailoring features to meet specific educational institution needs.",
      ],
    },
    {
      company: "Sendhive.io",
      title: "Position Title",
      location: "Location",
      period: "Date Range",
      responsibilities: [
        "Responsibility 1",
        "Responsibility 2",
        "Responsibility 3",
      ],
    },
    {
      company: "Platinum Group Media Inc.",
      title: "Position Title",
      location: "Location",
      period: "Date Range",
      responsibilities: [
        "Responsibility 1",
        "Responsibility 2",
        "Responsibility 3",
      ],
    },
    {
      company: "Audiocheck.ca",
      title: "Position Title",
      location: "Location",
      period: "Date Range",
      responsibilities: [
        "Responsibility 1",
        "Responsibility 2",
        "Responsibility 3",
      ],
    },
    {
      company: "ABS-CBN Broadcasting Corporation",
      title: "Position Title",
      location: "Location",
      period: "Date Range",
      responsibilities: [
        "Responsibility 1",
        "Responsibility 2",
        "Responsibility 3",
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
    const checkScroll = () => {
      if (listRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = listRef.current;
        // Show right fade if not scrolled to the end
        setShowRightFade(scrollLeft < scrollWidth - clientWidth - 10);
        // Show left fade if scrolled away from start
        setShowLeftFade(scrollLeft > 10);
      }
    };

    const listElement = listRef.current;
    if (listElement) {
      checkScroll();
      listElement.addEventListener("scroll", checkScroll);
      // Check on resize
      window.addEventListener("resize", checkScroll);
      
      return () => {
        listElement.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, []);

  return (
    <section style={sectionStyle}>
      <div className="container" style={{ maxWidth: "880px", margin: "0 auto" }}>
        <motion.h2
          className="experience-title"
          style={titleStyle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
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
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
              >
                {experiences.map((exp, index) => (
                  <li
                    key={index}
                    className={index === selectedIndex ? "experience-company-selected" : ""}
                    onClick={() => setSelectedIndex(index)}
                    style={companyItemStyle(index === selectedIndex)}
                  >
                    {exp.company}
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
              <h3 className="experience-job-title" style={{ marginBottom: "0.5rem" }}>
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
              <ul className="experience-responsibilities" style={responsibilitiesListStyle}>
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

