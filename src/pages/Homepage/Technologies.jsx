import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Technologies = () => {
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
  const iconStyle = {
    width: "16px",
    height: "16px",
    color: "#A6A9B3",
    flexShrink: 0,
  };

  const getTechIcon = (tech) => {
    switch (tech) {
      case "React.js":
        return (
          <svg style={iconStyle} viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="2" fill="currentColor" />
            <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(-60 12 12)" />
          </svg>
        );
      case "PHP (Laravel)":
        return (
          <svg style={iconStyle} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l8 4v8.64l-8 4-8-4V8.18l8-4z" />
            <path d="M8 9h1.5c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5H8V9zm1.5 1.5v3h.5v-3h-.5zm3-1.5h1.5c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-1.5V9zm1.5 1.5v3h.5v-3h-.5z" />
          </svg>
        );
      case "MySQL":
        return (
          <svg style={iconStyle} viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.405 5.501c-1.21-.095-2.87-.277-4.277-.43v-.122c1.629-.107 3.4-.25 4.28-.38 1.104-.15 1.582-.2 2.006-.28.38-.07.65-.15.78-.28.1-.1.15-.22.15-.35 0-.19-.08-.37-.23-.52-.15-.15-.33-.23-.52-.23-.13 0-.25.05-.35.15-.13.13-.21.4-.28.78-.08.42-.13.9-.28 2.01-.13.88-.27 2.65-.38 4.28h-.12c-.15-1.41-.34-3.07-.43-4.28zm-5.5 0c-1.21.095-2.87.277-4.277.43v.122c1.629.107 3.4.25 4.28.38 1.104.15 1.582.2 2.006.28.38.07.65.15.78.28.1.1.15.22.15.35 0 .19-.08.37-.23.52-.15.15-.33.23-.52.23-.13 0-.25-.05-.35-.15-.13-.13-.21-.4-.28-.78-.08-.42-.13-.9-.28-2.01-.13-.88-.27-2.65-.38-4.28h-.12c-.15 1.41-.34 3.07-.43 4.28z" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
        );
      case "Bootstrap":
        return (
          <svg style={iconStyle} viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.04 12.26c-.15-1.58-.8-2.93-2.01-4.05-.6-.56-1.3-1-2.08-1.3-.78-.3-1.64-.45-2.57-.45H2.35c-.23 0-.4.18-.4.4v11.08c0 .23.18.4.4.4h14.03c.93 0 1.79-.15 2.57-.45.78-.3 1.48-.74 2.08-1.3 1.21-1.12 1.86-2.47 2.01-4.05.08-.8.08-1.6 0-2.38zm-4.43 3.84c-.3.15-.65.23-1.05.23H3.15V7.67h14.41c.4 0 .75.08 1.05.23.3.15.56.35.78.6.22.25.4.55.52.9.12.35.18.73.18 1.15s-.06.8-.18 1.15c-.12.35-.3.65-.52.9-.22.25-.48.45-.78.6z" />
            <path d="M6.5 9.5h4.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H8v2h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H6.5V9.5zm8 0h4.5c.28 0 .5.22.5.5v4c0 .28-.22.5-.5.5h-4.5V9.5zm1 1v3h3v-3h-3z" />
          </svg>
        );
      case "Digital Ocean":
        return (
          <svg style={iconStyle} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 0C5.416-.028.028 5.364 0 11.988h11.99V0zm11.97 11.988c.012-6.624-5.364-11.976-11.99-12.004v12.004h11.99zm-12.01 12.004c6.624.028 12.004-5.364 12.012-11.988H12.002v11.988zM0 12.012c.028 6.624 5.416 12.012 12.04 11.984V12.012H0z" />
          </svg>
        );
      case "JavaScript":
        return (
          <svg style={iconStyle} viewBox="0 0 24 24" fill="currentColor">
            <rect x="2" y="2" width="20" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7 7h10v10H7V7zm1 1v8h8V8H8zm1 1h6v6H9V9zm1 1v4h4v-4h-4z" />
          </svg>
        );
      case "Microsoft SQL Server (MSSQL)":
        return (
          <svg style={iconStyle} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            <path d="M8 8h8v8H8V8zm1 1v6h6V9H9zm1 1h4v4h-4v-4zm1 1v2h2v-2h-2z" />
          </svg>
        );
      case "C#":
        return (
          <svg style={iconStyle} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            <path d="M8 8h8v8H8V8zm1 1v6h6V9H9zm1 1h4v4h-4v-4zm1 1v2h2v-2h-2z" />
            <circle cx="10.5" cy="10.5" r="0.5" />
            <circle cx="13.5" cy="10.5" r="0.5" />
            <circle cx="10.5" cy="13.5" r="0.5" />
            <circle cx="13.5" cy="13.5" r="0.5" />
          </svg>
        );
      case ".NET Framework / .NET 6+":
        return (
          <svg style={iconStyle} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            <path d="M8 8h8v8H8V8zm1 1v6h6V9H9zm1 1h4v4h-4v-4zm1 1v2h2v-2h-2z" />
            <path d="M10 10h4v1h-4v-1zm0 2h4v1h-4v-1z" />
          </svg>
        );
      case "Windows Forms (WinForms)":
        return (
          <svg style={iconStyle} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            <rect x="8" y="8" width="8" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M10 10h4v4h-4v-4zm1 1v2h2v-2h-2z" />
            <circle cx="10.5" cy="10.5" r="0.5" />
            <circle cx="13.5" cy="10.5" r="0.5" />
            <circle cx="10.5" cy="13.5" r="0.5" />
            <circle cx="13.5" cy="13.5" r="0.5" />
          </svg>
        );
      case "Figma (UI/UX Design)":
        return (
          <svg style={iconStyle} viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.264 7.51h3.588c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.588V7.51zm0 1.471H8.26c-2.476 0-4.49-2.014-4.49-4.49S5.784 0 8.26 0h3.588v8.981zm-3.588-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.02 3.019 3.02h3.588V1.471zM8.26 9.451h3.588v3.019c0 1.665-1.355 3.019-3.019 3.019S5.81 14.135 5.81 12.47V9.451H8.26zm-3.019-1.471c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.019V7.98H5.241zm3.019 7.51h3.588v4.588c0 2.476-2.014 4.49-4.49 4.49S3.87 22.104 3.87 19.628V15.98H8.26zm-3.019-1.471c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.019v-6.038H5.241z" />
          </svg>
        );
      case "Git & GitHub":
        return (
          <svg style={iconStyle} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        );
      case "Postman":
        return (
          <svg style={iconStyle} viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.508 0c-.255 0-.51.098-.707.293L16.293 6.8c-.39.39-.39 1.024 0 1.414l6.508 6.508c.195.195.452.293.707.293s.512-.098.707-.293l5.293-5.293c.39-.39.39-1.024 0-1.414L24.215.293C24.018.098 23.763 0 23.508 0zm-1.414 2.121l4.293 4.293-4.293 4.293-4.293-4.293 4.293-4.293zM.5 2.5c-.276 0-.5.224-.5.5v18c0 .276.224.5.5.5h18c.276 0 .5-.224.5-.5v-18c0-.276-.224-.5-.5-.5H.5zm1 1h16v16h-16v-16z" />
          </svg>
        );
      default:
        return (
          <svg style={iconStyle} fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
        );
    }
  };

  const technologies = [
    "React.js",
    "JavaScript",
    "Bootstrap",
    "PHP (Laravel)",
    "C#",
    ".NET Framework / .NET 6+",
    "Windows Forms (WinForms)",
    "MySQL",
    "Microsoft SQL Server (MSSQL)",
    "Git & GitHub",
    "Postman",
    "Digital Ocean",
    "Figma (UI/UX Design)",
  ];

  const sectionStyle = {
    paddingTop: "10rem",
    paddingBottom: "6rem",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    color: "#A6A9B3",
    marginBottom: "2rem",
    fontWeight: 600,
    textAlign: "left",
  };

  const listStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
    listStyle: "none",
    padding: 0,
    margin: 0,
    justifyContent: "flex-start",
  };

  const itemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    color: "#A6A9B3",
    fontSize: "0.95rem",
  };

  return (
    <section ref={sectionRef} style={sectionStyle} id="technologies">
      <div className="container" style={{ maxWidth: "980px", margin: "0 auto" }}>
        <motion.h2
          className="technologies-title"
          style={titleStyle}
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : (scrollDirection === "down" ? -30 : 30),
          }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Technologies I&apos;ve been working with recently:
        </motion.h2>
        <ul className="technologies-list" style={listStyle}>
          {technologies.map((tech, index) => (
            <motion.li
              key={tech}
              initial={{ opacity: 0, y: 25 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : (scrollDirection === "down" ? -25 : 25),
              }}
              transition={{
                delay: index === 0 ? 0 : 0.05 + index * 0.05,
                duration: 1.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={itemStyle}
            >
              {getTechIcon(tech)}
              <span>{tech}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Technologies;

